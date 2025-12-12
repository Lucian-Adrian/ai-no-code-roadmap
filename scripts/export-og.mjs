import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const svgPath = path.resolve('public', 'og-architect.svg')
const outPath = path.resolve('public', 'og-architect.png')

if (!fs.existsSync(svgPath)) {
  console.error('SVG not found:', svgPath)
  process.exit(1)
}

sharp(svgPath)
  .resize(1200, 630)
  .png({ quality: 90 })
  .toFile(outPath)
  .then(() => {
    console.log('Exported:', outPath)
  })
  .catch((err) => {
    console.error('Error exporting OG PNG:', err)
    process.exit(1)
  })
