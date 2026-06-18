import type { Metadata } from "next"
import { Geist_Mono, Poppins, Sora, Urbanist } from "next/font/google"
import "./globals.css"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Protocolo Presença Exponencial",
  description: "Landing page do Protocolo Presença Exponencial.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sora.variable} ${poppins.variable} ${urbanist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}