import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.resolve(process.argv[2]);
const outputPath = path.resolve(process.argv[3] || process.argv[2]);

const WHITE_THRESHOLD = 240;

function isWhite(data, idx) {
  return data[idx] > WHITE_THRESHOLD && data[idx + 1] > WHITE_THRESHOLD && data[idx + 2] > WHITE_THRESHOLD;
}

function floodFillEdges(data, width, height) {
  const toRemove = new Uint8Array(width * height);
  const queue = [];

  for (let x = 0; x < width; x++) {
    let idx = x * 4;
    if (isWhite(data, idx)) { queue.push(x + 0 * width); toRemove[x + 0 * width] = 1; }
    idx = (x + (height - 1) * width) * 4;
    if (isWhite(data, idx)) { queue.push(x + (height - 1) * width); toRemove[x + (height - 1) * width] = 1; }
  }
  for (let y = 0; y < height; y++) {
    let idx = (0 + y * width) * 4;
    if (isWhite(data, idx)) { queue.push(0 + y * width); toRemove[0 + y * width] = 1; }
    idx = ((width - 1) + y * width) * 4;
    if (isWhite(data, idx)) { queue.push((width - 1) + y * width); toRemove[(width - 1) + y * width] = 1; }
  }

  const dirs = [-1, 1, -width, width];
  while (queue.length > 0) {
    const pos = queue.shift();
    const x = pos % width;
    const y = Math.floor(pos / width);

    for (const d of dirs) {
      const np = pos + d;
      const nx = np % width;
      const ny = Math.floor(np / width);

      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
      if (Math.abs(nx - x) > 1 && Math.abs(d) === 1) continue; 
      if (toRemove[np]) continue;

      const idx = np * 4;
      if (isWhite(data, idx)) {
        toRemove[np] = 1;
        queue.push(np);
      }
    }
  }

  let removed = 0;
  for (let i = 0; i < toRemove.length; i++) {
    if (toRemove[i]) {
      data[i * 4 + 3] = 0;
      removed++;
    }
  }
  console.log(`Removed ${removed} background pixels.`);
}

async function removeWhiteBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  floodFillEdges(data, info.width, info.height);

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .png()
    .toFile(outputPath);

  console.log(`Saved to ${outputPath}`);
}

removeWhiteBackground().catch(console.error);
