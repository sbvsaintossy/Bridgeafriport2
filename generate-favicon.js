import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateFavicon() {
  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, 'public');

  // Candidate file names
  const candidateFiles = [
    'my-logo.png',
    'my-logo.png.png',
    'my-logo.jpg',
    'my-logo.jpeg',
    'my-logo.webp'
  ];

  let sourceFile = null;
  for (const file of candidateFiles) {
    const fullPath = path.join(rootDir, file);
    if (fs.existsSync(fullPath)) {
      sourceFile = fullPath;
      break;
    }
  }

  const rootFaviconPath = path.join(rootDir, 'favicon-48x48.png');
  const publicFaviconPath = path.join(publicDir, 'favicon-48x48.png');

  if (sourceFile) {
    console.log(`Found source image at: ${sourceFile}`);
    console.log('Cropping to perfect square and resizing to exactly 48x48 pixels...');

    const metadata = await sharp(sourceFile).metadata();
    const width = metadata.width || 48;
    const height = metadata.height || 48;
    const squareSize = Math.min(width, height);
    const left = Math.floor((width - squareSize) / 2);
    const top = Math.floor((height - squareSize) / 2);

    // Crop to square, resize to 48x48
    await sharp(sourceFile)
      .extract({ left, top, width: squareSize, height: squareSize })
      .resize(48, 48, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 100 })
      .toFile(rootFaviconPath);

    console.log(`Successfully created root favicon: ${rootFaviconPath}`);
  } else {
    console.log('No local "my-logo.png" found on disk. Generating high-fidelity Bridge AfriPort brand emblem as vector SVG and rendering to 48x48 PNG...');

    // Vector representation of the Bridge AfriPort emblem with rich gradients
    const svgEmblem = `
<svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGrad" cx="50" cy="45" r="45" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#14263E"/>
      <stop offset="70%" stop-color="#09111D"/>
      <stop offset="100%" stop-color="#050A12"/>
    </radialGradient>

    <!-- Outer Gold Ring -->
    <linearGradient id="goldStitchGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFD54F"/>
      <stop offset="50%" stop-color="#C9A227"/>
      <stop offset="100%" stop-color="#9A7B1C"/>
    </linearGradient>

    <!-- Green Outer Rim -->
    <linearGradient id="greenRimGrad" x1="10" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4CAF50"/>
      <stop offset="60%" stop-color="#2E7D32"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </linearGradient>

    <!-- Bean Pod Gradient -->
    <linearGradient id="beanGrad" x1="28" y1="20" x2="60" y2="50" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#81C784"/>
      <stop offset="40%" stop-color="#4CAF50"/>
      <stop offset="85%" stop-color="#2E7D32"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </linearGradient>

    <!-- Sprouting Leaf Gradient -->
    <linearGradient id="leafGrad" x1="50" y1="15" x2="74" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#A5D6A7"/>
      <stop offset="35%" stop-color="#66BB6A"/>
      <stop offset="100%" stop-color="#2E7D32"/>
    </linearGradient>

    <!-- Bridge Arch Gradient -->
    <linearGradient id="bridgeGrad" x1="22" y1="50" x2="78" y2="70" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFE082"/>
      <stop offset="50%" stop-color="#FFB300"/>
      <stop offset="100%" stop-color="#FFA000"/>
    </linearGradient>
  </defs>

  <!-- Outer Dashed Gold Stitch Border -->
  <circle cx="50" cy="50" r="47" stroke="url(#goldStitchGrad)" stroke-width="2.2" stroke-dasharray="3.5 2.5" stroke-linecap="round"/>

  <!-- Outer Green Rim -->
  <circle cx="50" cy="50" r="44.5" fill="none" stroke="url(#greenRimGrad)" stroke-width="2.8"/>

  <!-- Inner Dark Blue Disk Background -->
  <circle cx="50" cy="50" r="42" fill="url(#bgGrad)" stroke="#1E334E" stroke-width="0.8"/>

  <!-- Golden Bridge Arch -->
  <path d="M20 69 C 20 47, 80 47, 80 69" stroke="url(#bridgeGrad)" stroke-width="4.2" stroke-linecap="round" fill="none"/>

  <!-- Vertical Bridge Pillars -->
  <path d="M31 69 L 31 56 M 50 69 L 50 50 M 69 69 L 69 56" stroke="url(#bridgeGrad)" stroke-width="3" stroke-linecap="round"/>

  <!-- Signature Organic Green Bean Pod Curve -->
  <path d="M34 51 C 25 33, 38 18, 52 21 C 61 23, 63 31, 55 39 C 47 47, 39 49, 34 51 Z" fill="url(#beanGrad)"/>

  <!-- Sprouting Leaf / Seed Apex -->
  <path d="M51 22 C 63 15, 75 23, 69 37 C 63 46, 52 42, 51 22 Z" fill="url(#leafGrad)"/>

  <!-- Golden Center Seed Dot -->
  <circle cx="48" cy="32" r="3.6" fill="#FFC107"/>
  <circle cx="47.2" cy="31.2" r="1.2" fill="#FFF9C4"/>

  <!-- White Accent Meridian Dot -->
  <circle cx="59.5" cy="27.5" r="2.6" fill="#FFFFFF"/>
</svg>
`;

    await sharp(Buffer.from(svgEmblem), { density: 300 })
      .resize(48, 48, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 100 })
      .toFile(rootFaviconPath);

    console.log(`Successfully created root favicon: ${rootFaviconPath}`);
  }

  // Ensure public folder copy exists for Vite static serving at /favicon-48x48.png
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.copyFileSync(rootFaviconPath, publicFaviconPath);
  console.log(`Successfully synced to public directory: ${publicFaviconPath}`);

  const rootStats = fs.statSync(rootFaviconPath);
  console.log(`Favicon generated: 48x48 PNG (${rootStats.size} bytes).`);
}

generateFavicon().catch((err) => {
  console.error('Error generating favicon:', err);
  process.exit(1);
});
