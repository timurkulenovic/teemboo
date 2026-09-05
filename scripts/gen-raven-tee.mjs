// Minimalist "The Raven" tee — a perched raven silhouette in profile.
// Public-domain literary motif (Poe). Run: node scripts/gen-raven-tee.mjs
import { writeFileSync } from "node:fs";

// --- Raven silhouette (facing left), one filled shape ---
// Built as a smooth closed path: tail -> back -> nape -> forehead ->
// beak -> chin -> chest -> belly -> tail.
const RAVEN =
  "M335 250 " +
  "C322 236, 312 230, 300 224 " +     // tail top edge
  "C278 214, 262 200, 244 192 " +     // back rising to nape
  "C224 184, 200 178, 178 170 " +     // nape
  "C166 166, 156 160, 146 158 " +     // crown / forehead
  "C138 157, 132 160, 126 164 " +     // forehead to beak top
  "L100 170 " +                       // beak top edge
  "C92 173, 90 178, 96 182 " +        // beak tip (down-curve)
  "L126 186 " +                        // beak bottom edge
  "C134 188, 140 188, 148 190 " +     // chin
  "C158 196, 166 208, 176 220 " +     // chest
  "C188 236, 202 246, 220 250 " +     // belly
  "C244 254, 270 252, 296 251 " +     // belly to tail underside
  "C312 250, 324 250, 335 250 Z";     // close at tail tip

// Legs (two thin strokes) + perch line
const LEGS =
  "M176 246 L174 300 M206 250 L210 300";
const PERCH = "M108 300 L352 300";

const ink = "#111111"; // black print

// Design-only artwork (transparent background, for reuse / screen print)
const designSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 360" width="440" height="360">
  <g fill="${ink}" stroke="${ink}">
    <path d="${RAVEN}" />
    <path d="${LEGS}" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="${PERCH}" stroke-width="3" stroke-linecap="round" fill="none" />
    <circle cx="138" cy="160" r="2.6" fill="#fafaf9" stroke="none" />
  </g>
</svg>
`;

// --- Tee mockup (bone/off-white tee, black print) ---
const W = 640;
const H = 760;
const TEE =
  "M170 150 C190 120, 230 110, 270 104 C272 116, 280 124, 320 124 " +
  "C360 124, 368 116, 370 104 C410 110, 450 120, 470 150 L520 180 " +
  "L498 232 L460 214 L460 620 C460 626, 456 630, 450 630 L190 630 " +
  "C184 630, 180 626, 180 620 L180 214 L142 232 L120 180 Z";
const COLLAR = "M270 104 C272 116, 280 124, 320 124 C360 124, 368 116, 370 104";

const mockupSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f3f1ec"/>
      <stop offset="100%" stop-color="#e9e6df"/>
    </linearGradient>
    <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#efeae0"/>
      <stop offset="100%" stop-color="#e3ddcf"/>
    </linearGradient>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.10"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <g filter="url(#soft)">
    <path d="${TEE}" fill="url(#shirt)"/>
  </g>
  <path d="${TEE}" fill="url(#shade)"/>
  <path d="${COLLAR}" fill="none" stroke="#0000001a" stroke-width="3" stroke-linecap="round"/>

  <!-- Print: raven, centered on chest -->
  <g transform="translate(100, 196) scale(1.0)" fill="${ink}" stroke="${ink}">
    <path d="${RAVEN}" />
    <path d="${LEGS}" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="${PERCH}" stroke-width="3" stroke-linecap="round" fill="none" />
    <circle cx="138" cy="160" r="2.6" fill="#efeae0" stroke="none" />
  </g>

  <text x="${W / 2}" y="${H - 40}" text-anchor="middle"
    font-family="Inter, Helvetica, Arial, sans-serif"
    font-size="10" letter-spacing="4" fill="#6b6b6b">
    TEEMBOO · THE RAVEN TEE
  </text>
</svg>
`;

writeFileSync("public/raven-design.svg", designSvg.trim() + "\n", "utf8");
writeFileSync("public/raven-tee.svg", mockupSvg.trim() + "\n", "utf8");
console.log("Wrote public/raven-tee.svg and public/raven-design.svg");
