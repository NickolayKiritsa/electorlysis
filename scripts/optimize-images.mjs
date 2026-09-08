import sharp from 'sharp';
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'public/images');

async function make(input, outName, { width, format, quality }) {
  const outPath = join(dir, outName);
  let pipeline = sharp(join(dir, input));
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  if (format === 'webp') pipeline = pipeline.webp({ quality });
  else pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  await pipeline.toFile(outPath);
  const kb = (statSync(outPath).size / 1024).toFixed(1);
  console.log(`${outName.padEnd(32)} ${kb} kB`);
}

const jobs = [
  // Hero — full-bleed background, above the fold (LCP candidate)
  ['hero-photo.jpg', 'hero-photo.webp', { format: 'webp', quality: 72 }],
  ['hero-photo.jpg', 'hero-photo-mobile.jpg', { width: 600, format: 'jpg', quality: 70 }],
  ['hero-photo.jpg', 'hero-photo-mobile.webp', { width: 600, format: 'webp', quality: 68 }],

  // Services spotlight band
  ['spotlight-photo.jpg', 'spotlight-photo.webp', { format: 'webp', quality: 72 }],
  ['spotlight-photo.jpg', 'spotlight-photo-mobile.jpg', { width: 600, format: 'jpg', quality: 70 }],
  ['spotlight-photo.jpg', 'spotlight-photo-mobile.webp', { width: 600, format: 'webp', quality: 68 }],

  // Ambiance band
  ['process-photo.jpg', 'process-photo.webp', { format: 'webp', quality: 72 }],
  ['process-photo.jpg', 'process-photo-mobile.jpg', { width: 500, format: 'jpg', quality: 70 }],
  ['process-photo.jpg', 'process-photo-mobile.webp', { width: 500, format: 'webp', quality: 68 }],

  // Marble texture tile — small, fixed tile size, no responsive variant needed.
  // Quality 40: this is high-entropy noise (granite speckle), so WebP needs a
  // lower quality than photos to actually beat the JPEG — tiled at 460px and
  // washed with a translucent overlay, so the extra compression isn't visible.
  ['marble.jpg', 'marble.webp', { format: 'webp', quality: 40 }],

  // Practitioner photo — real <img>, needs a srcset
  ['practitioner-photo.jpg', 'practitioner-photo-320.jpg', { width: 320, format: 'jpg', quality: 75 }],
  ['practitioner-photo.jpg', 'practitioner-photo-320.webp', { width: 320, format: 'webp', quality: 72 }],
  ['practitioner-photo.jpg', 'practitioner-photo-440.jpg', { width: 440, format: 'jpg', quality: 75 }],
  ['practitioner-photo.jpg', 'practitioner-photo-440.webp', { width: 440, format: 'webp', quality: 72 }],
];

for (const [input, outName, opts] of jobs) {
  if (!existsSync(join(dir, input))) {
    console.error(`missing source: ${input}`);
    continue;
  }
  await make(input, outName, opts);
}
