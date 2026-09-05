import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { getProduct, products } from "../data/products";
import type { Size } from "../types";
import { formatPrice } from "../utils/format";
import { useCart } from "../context/CartContext";
import ProductImage from "../components/ProductImage";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : undefined;
  const { add } = useCart();

  const [size, setSize] = useState<Size | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSize(null);
    setQty(1);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 px-5 py-32 text-center">
        <p className="font-display text-3xl tracking-tighter-2">
          Piece not found
        </p>
        <p className="text-sm text-stone">
          We couldn't find that t-shirt. It may have been retired.
        </p>
        <Link
          to="/shop"
          className="border-b border-ink pb-1 text-[13px] uppercase tracking-[0.18em]"
        >
          Back to the shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleAdd = () => {
    if (!size) return;
    add(product, size, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to shop
        </Link>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          <div className="flex flex-col gap-4 fade-up">
            <div className="overflow-hidden rounded-sm bg-mist">
              <ProductImage
                color={product.color}
                colorName={product.colorName}
                className="aspect-[4/5] w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { color: product.color, name: product.colorName },
                { color: "#e9e6df", name: "Bone" },
                { color: "#1f1f1f", name: "Ink" },
              ].map((sw) => (
                <div
                  key={sw.name}
                  className="overflow-hidden rounded-sm bg-mist"
                >
                  <ProductImage
                    color={sw.color}
                    colorName={sw.name}
                    className="aspect-[4/5] w-full opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col fade-up" style={{ animationDelay: "80ms" }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                {product.category}
              </span>
              {product.isNew && (
                <span className="border border-ink px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                  New
                </span>
              )}
              {product.category === "Limited" && (
                <span className="bg-ink px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-paper">
                  Limited
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-4xl font-light tracking-tighter-2 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-stone">{product.subtitle}</p>
            <p className="mt-5 text-lg tabular-nums">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Size
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-stone/70">
                  True to size
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`min-w-12 border px-3 py-3 text-xs uppercase tracking-[0.15em] transition-colors ${
                      size === s
                        ? "border-ink bg-ink text-paper"
                        : "border-line text-stone hover:border-ink hover:text-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="p-3 text-stone hover:text-ink"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm tabular-nums">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  aria-label="Increase quantity"
                  className="p-3 text-stone hover:text-ink"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to bag */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleAdd}
                disabled={!size}
                className="group inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:bg-stone/40"
              >
                {added ? (
                  <>
                    <Check size={16} strokeWidth={1.5} />
                    Added to bag
                  </>
                ) : !size ? (
                  "Select a size"
                ) : (
                  <>
                    <ShoppingBag size={16} strokeWidth={1.5} />
                    Add to bag — {formatPrice(product.price * qty)}
                  </>
                )}
              </button>
            </div>
            {!size && (
              <p className="mt-3 text-xs text-stone">
                Choose a size to add this tee to your bag.
              </p>
            )}

            {/* Details */}
            <div className="mt-12 border-t border-line pt-8">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-stone">
                Details
              </h2>
              <ul className="mt-4 space-y-2.5">
                {product.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-sm text-stone"
                  >
                    <span className="mt-2 h-px w-3 shrink-0 bg-stone/50" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping note */}
            <div className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-stone">
              Complimentary shipping on orders over $75. Returns within 30
              days. Shipped carbon-neutral from Porto.
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line bg-mist/50">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
            <h2 className="mb-10 font-display text-2xl font-light tracking-tighter-2 sm:text-3xl">
              You may also like
            </h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
