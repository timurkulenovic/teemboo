export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  /** Tailwind-friendly hex used to render the garment swatch */
  color: string;
  colorName: string;
  category: "Essentials" | "Collections" | "Limited";
  description: string;
  details: string[];
  sizes: Size[];
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}
