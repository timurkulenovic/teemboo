import { Link } from "react-router-dom";
import type { Product } from "../types";
import { formatPrice } from "../utils/format";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className="group block fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative overflow-hidden rounded-sm bg-mist">
        <ProductImage
          color={product.color}
          colorName={product.colorName}
          className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.isNew && (
            <span className="bg-paper/90 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-ink">
              New
            </span>
          )}
          {product.category === "Limited" && (
            <span className="bg-ink px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-paper">
              Limited
            </span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-paper/95 py-3 text-center text-[12px] uppercase tracking-[0.2em] transition-transform duration-300 ease-out group-hover:translate-y-0">
          View
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium leading-snug">{product.name}</h3>
          <p className="mt-0.5 text-xs text-stone">{product.subtitle}</p>
        </div>
        <p className="shrink-0 text-sm tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
