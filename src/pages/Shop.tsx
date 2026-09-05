import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";

const CATEGORIES = ["All", "Essentials", "Collections", "Limited"] as const;

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
] as const;

type SortId = (typeof SORTS)[number]["id"];

function sortProducts(list: Product[], sort: SortId): Product[] {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "newest":
      return copy.sort(
        (a, b) => Number(b.isNew ?? false) - Number(a.isNew ?? false),
      );
    case "featured":
    default:
      return copy.sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
      );
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "All";
  const sort = (params.get("sort") as SortId) ?? "featured";

  const activeCategory = CATEGORIES.includes(category as (typeof CATEGORIES)[number])
    ? category
    : "All";

  const filtered = useMemo(() => {
    const base =
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory);
    return sortProducts(base, sort);
  }, [activeCategory, sort]);

  const setCategory = (next: string) => {
    const nextParams = new URLSearchParams(params);
    if (next === "All") nextParams.delete("category");
    else nextParams.set("category", next);
    setParams(nextParams, { replace: true });
  };

  const setSort = (next: SortId) => {
    const nextParams = new URLSearchParams(params);
    nextParams.set("sort", next);
    setParams(nextParams, { replace: true });
  };

  return (
    <>
      {/* Header */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
            The shop
          </p>
          <h1 className="mt-4 font-display text-4xl font-light tracking-tighter-2 sm:text-5xl md:text-6xl">
            All t-shirts
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">
            A short, considered line of organic cotton tees. Filter by
            category, sort to taste.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  activeCategory === c
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-stone hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs tabular-nums text-stone">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </span>
            <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone">
              <span className="hidden sm:inline">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortId)}
                className="border border-line bg-paper px-3 py-2 text-xs normal-case tracking-normal text-ink outline-none transition-colors focus:border-ink"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
            <p className="font-display text-2xl">Nothing here yet</p>
            <p className="text-sm text-stone">
              No tees in this category. Try another filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
