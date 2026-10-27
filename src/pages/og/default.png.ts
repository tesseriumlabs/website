import sharp from 'sharp';
import { SITE_TITLE } from '../../consts';

// Default 1200x630 social share image, rendered from SVG at build time.
export async function GET() {
  const tiles: string[] = [];
  const placed = new Set(['0,5', '1,5', '1,4', '2,4', '3,4', '3,3', '4,3', '4,2', '5,2', '6,2', '6,1', '7,1', '7,0']);
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 8; c++) {
      const key = `${c},${r}`;
      const fill = placed.has(key) ? '#ffffff' : '#141414';
      tiles.push(`<rect x="${c * 54}" y="${r * 54}" width="46" height="46" fill="${fill}"/>`);
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#000000"/>
  <text x="80" y="300" font-family="DM Sans, Helvetica Neue, Arial, sans-serif" font-size="84" font-weight="300" letter-spacing="-3" fill="#ffffff">${SITE_TITLE}</text>
  <text x="80" y="370" font-family="DM Sans, Helvetica Neue, Arial, sans-serif" font-size="34" fill="#8c8c8c">Software that fits your business</text>
  <g transform="translate(700 155)">${tiles.join('')}</g>
</svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
