import type { Product, Size } from "../types";

export const ALL_SIZES: Size[] = ["XS", "S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    id: "the-essential-tee",
    name: "The Essential Tee",
    subtitle: "Heavyweight organic cotton",
    price: 38,
    color: "#e9e6df",
    colorName: "Bone",
    category: "Essentials",
    description:
      "The one you reach for every morning. Cut from 240gsm organic cotton with a clean, relaxed body and a collar that holds its shape wash after wash.",
    details: [
      "240gsm organic combed cotton",
      "Relaxed, true-to-size fit",
      "Ribbed crewneck that keeps its shape",
      "Garment-dyed for depth of color",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
    featured: true,
  },
  {
    id: "the-box-tee",
    name: "The Box Tee",
    subtitle: "Boxy fit, soft hand",
    price: 42,
    color: "#1f1f1f",
    colorName: "Ink",
    category: "Essentials",
    description:
      "A modern boxy silhouette with dropped shoulders and a slightly cropped length. Pairs with everything you already own.",
    details: [
      "220gsm organic cotton jersey",
      "Boxy, cropped fit",
      "Dropped shoulder construction",
      "Pre-washed for zero shrinkage",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
    featured: true,
  },
  {
    id: "the-long-sleeve",
    name: "The Long Sleeve",
    subtitle: "Layering, perfected",
    price: 48,
    color: "#cfcabf",
    colorName: "Oat",
    category: "Essentials",
    description:
      "A weightless long sleeve built for layering or standing alone. Slim through the sleeve with a tidy cuff.",
    details: [
      "200gsm organic cotton",
      "Slim sleeve, tidy ribbed cuff",
      "Side-seamed for structure",
      "Reactive-dyed for lasting color",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
    featured: true,
  },
  {
    id: "the-pocket-tee",
    name: "The Pocket Tee",
    subtitle: "A quiet detail",
    price: 40,
    color: "#2f3a36",
    colorName: "Forest",
    category: "Essentials",
    description:
      "Our essential tee with a single patch pocket at the chest. The kind of detail you don't notice until you do.",
    details: [
      "240gsm organic combed cotton",
      "Relaxed, true-to-size fit",
      "Single chest patch pocket",
      "Garment-dyed for depth of color",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
  },
  {
    id: "the-v-neck",
    name: "The V-Neck",
    subtitle: "Soft, open collar",
    price: 38,
    color: "#b8a890",
    colorName: "Clay",
    category: "Essentials",
    description:
      "A relaxed v-neck with a soft, open collar. Easy on its own or layered under a jacket.",
    details: [
      "230gsm organic cotton",
      "Relaxed, true-to-size fit",
      "Self-fabric v-neck binding",
      "Pre-washed for zero shrinkage",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
  },
  {
    id: "the-heavyweight",
    name: "The Heavyweight",
    subtitle: "Built to last years",
    price: 52,
    color: "#3a4a5a",
    colorName: "Slate",
    category: "Essentials",
    description:
      "Our densest tee at 300gsm. Structured, substantial, and the one that earns its place in your rotation.",
    details: [
      "300gsm organic combed cotton",
      "Relaxed, true-to-size fit",
      "Double-stitched hems",
      "Garment-dyed for depth of color",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
    isNew: true,
  },
  {
    id: "the-stripe-tee",
    name: "The Stripe Tee",
    subtitle: "Tonal rhythm",
    price: 46,
    color: "#d9d3c4",
    colorName: "Sand",
    category: "Collections",
    description:
      "A tonal stripe knit from dyed yarn, not printed. Subtle from a distance, satisfying up close.",
    details: [
      "230gsm organic cotton",
      "Yarn-dyed tonal stripe",
      "Relaxed, true-to-size fit",
      "Pre-washed for zero shrinkage",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
    isNew: true,
  },
  {
    id: "the-pocket-tee-bone",
    name: "The Pocket Tee",
    subtitle: "Bone, garment-dyed",
    price: 40,
    color: "#efeae0",
    colorName: "Bone",
    category: "Collections",
    description:
      "The pocket tee in a softer, warmer bone. Garment-dyed for a lived-in feel from day one.",
    details: [
      "240gsm organic combed cotton",
      "Relaxed, true-to-size fit",
      "Single chest patch pocket",
      "Garment-dyed for depth of color",
      "Made in Portugal",
    ],
    sizes: ALL_SIZES,
  },
  {
    id: "the-monogram-tee",
    name: "The Monogram Tee",
    subtitle: "Quietly signed",
    price: 45,
    color: "#181818",
    colorName: "Black",
    category: "Limited",
    description:
      "A small tonal monogram at the hem. The most quietly confident piece in the line.",
    details: [
      "250gsm organic combed cotton",
      "Relaxed, true-to-size fit",
      "Tonal embroidered monogram",
      "Garment-dyed for depth of color",
      "Made in Portugal",
      "Limited release",
    ],
    sizes: ALL_SIZES,
    featured: true,
    isNew: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
