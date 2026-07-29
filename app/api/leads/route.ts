import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type LeadPayload = {
  name?: string
  email?: string
  whatsapp?: string
  specialty?: string
  location?: string
  instagram?: string
  difficulty?: string
  goal?: string
  consent?: boolean
  source?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload

    const lead = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      whatsapp: sanitize(body.whatsapp),
      specialty: sanitize(body.specialty),
      location: sanitize(body.location),
      instagram: sanitize(body.instagram),
      difficulty: sanitize(body.difficulty),
      goal: sanitize(body.goal),
      consent: Boolean(body.consent),
      source: sanitize(body.source) || 'analise-de-perfil',
    }

    const missingFields = [
      ['name', lead.name],
      ['whatsapp', lead.whatsapp],
      ['specialty', lead.specialty],
      ['instagram', lead.instagram],
    ].filter(([, value]) => !value)

    if (missingFields.length > 0 || !lead.consent) {
      return NextResponse.json(
        {
          message:
            'Preencha todos os campos obrigatórios e aceite o contato da equipe PPE.',
        },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: 'RESEND_API_KEY não foi configurada.' },
        { status: 500 }
      )
    }

    if (!process.env.LEADS_TO_EMAIL || !process.env.LEADS_FROM_EMAIL) {
      return NextResponse.json(
        {
          message:
            'LEADS_TO_EMAIL ou LEADS_FROM_EMAIL não foram configurados.',
        },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const createdAt = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    })

    const internalEmail = await resend.emails.send({
      from: process.env.LEADS_FROM_EMAIL,
      to: process.env.LEADS_TO_EMAIL,
      subject: `Nova candidatura PPE — ${lead.name}`,
      html: buildInternalEmailHtml(lead, createdAt),
      text: buildInternalEmailText(lead, createdAt),
    })

    if (internalEmail.error) {
      throw new Error(`Resend recusou o envio: ${internalEmail.error.message}`)
    }

    if (process.env.WHATSAPP_WEBHOOK_URL) {
      await fetch(process.env.WHATSAPP_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'new_ppe_profile_analysis_lead',
          createdAt,
          lead,
        }),
      }).catch((error) => {
        console.error('Erro ao enviar lead para webhook WhatsApp:', error)
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Erro ao processar lead PPE:', error)

    return NextResponse.json(
      {
        message:
          'Não foi possível enviar sua candidatura. Tente novamente em alguns instantes.',
      },
      { status: 500 }
    )
  }
}

function sanitize(value: unknown) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, 2000)
}

function buildInternalEmailText(
  lead: Required<LeadPayload>,
  createdAt: string
) {
  return `
Nova candidatura para Análise Estratégica de Perfil Médico — PPE

Data: ${createdAt}
Origem: ${lead.source}

Nome: ${lead.name}
WhatsApp: ${lead.whatsapp}
Especialidade: ${lead.specialty}
Instagram: ${lead.instagram}

Consentimento: ${lead.consent ? 'Sim' : 'Não'}
`
}

function buildInternalEmailHtml(
  lead: Required<LeadPayload>,
  createdAt: string
) {
  return `
  <div style="font-family: Arial, sans-serif; color: #1F2933; line-height: 1.6;">
    <h1 style="color: #0D1B2A;">Nova candidatura PPE</h1>
    <p><strong>Data:</strong> ${createdAt}</p>
    <p><strong>Origem:</strong> ${lead.source}</p>

    <hr style="border: none; border-top: 1px solid #DEDAD0; margin: 24px 0;" />

    <p><strong>Nome:</strong> ${lead.name}</p>
    <p><strong>WhatsApp:</strong> ${lead.whatsapp}</p>
    <p><strong>Especialidade:</strong> ${lead.specialty}</p>
    <p><strong>Instagram:</strong> ${lead.instagram}</p>

    <p style="margin-top: 28px;"><strong>Consentimento:</strong> ${
      lead.consent ? 'Sim' : 'Não'
    }</p>
  </div>
  `
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
