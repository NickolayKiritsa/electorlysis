import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const publicDir = join(process.cwd(), 'public');
const svgPath = join(publicDir, 'favicon.svg');

const pngSizes = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['favicon-48x48.png', 48],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
];

for (const [name, size] of pngSizes) {
  await sharp(svgPath).resize(size, size).png().toFile(join(publicDir, name));
  console.log(`wrote ${name}`);
}

const icoBuffer = await pngToIco([
  join(publicDir, 'favicon-16x16.png'),
  join(publicDir, 'favicon-32x32.png'),
  join(publicDir, 'favicon-48x48.png'),
]);
await writeFile(join(publicDir, 'favicon.ico'), icoBuffer);
console.log('wrote favicon.ico');
