import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const publicDir = join(process.cwd(), 'public')
const partsDir = join(publicDir, 'vsl-parts')
const outputPath = join(publicDir, 'vsl-analise-perfil.mp4')
const tempPath = outputPath + '.tmp'
const expectedSize = 28878383
const expectedSha256 = '1b8cc82bcc87c57ccc07d33c618b60ab821d47f9921bfabde2f0b2a4f2e13c50'

const partNames = readdirSync(partsDir)
  .filter((name) => /^part-\d{3}\.b64$/.test(name))
  .sort()

if (partNames.length !== 42) {
  throw new Error(`Expected 42 VSL parts, found ${partNames.length}`)
}

const chunks = partNames.map((name) =>
  Buffer.from(readFileSync(join(partsDir, name), 'utf8').trim(), 'base64')
)
const video = Buffer.concat(chunks)
const actualSha256 = createHash('sha256').update(video).digest('hex')

if (video.length !== expectedSize || actualSha256 !== expectedSha256) {
  throw new Error(
    `Invalid assembled VSL: ${video.length} bytes, sha256 ${actualSha256}`
  )
}

writeFileSync(tempPath, video)
renameSync(tempPath, outputPath)

const poster = Buffer.from(
  readFileSync(join(partsDir, 'poster.b64'), 'utf8').trim(),
  'base64'
)
writeFileSync(join(publicDir, 'vsl-analise-perfil-poster.jpg'), poster)

rmSync(partsDir, { recursive: true, force: true })

console.log(`VSL assembled and verified: ${video.length} bytes`)
