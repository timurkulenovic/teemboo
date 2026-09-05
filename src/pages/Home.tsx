import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";

const featured = products.filter((p) => p.featured).slice(0, 3);
const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

const categories = [
  {
    name: "Essentials",
    blurb: "The everyday foundation.",
    to: "/shop?category=Essentials",
  },
  {
    name: "Collections",
    blurb: "Seasonal studies in color.",
    to: "/shop?category=Collections",
  },
  {
    name: "Limited",
    blurb: "Small runs, signed quietly.",
    to: "/shop?category=Limited",
  },
];

const values = [
  {
    n: "01",
    title: "Organic cotton",
    body: "Grown without synthetics, combed for softness, and knit into fabric that wears in — not out.",
  },
  {
    n: "02",
    title: "Made in Portugal",
    body: "Cut and sewn in a family-run studio in Porto we've worked with since day one.",
  },
  {
    n: "03",
    title: "Made to last",
    body: "Heavyweight knits, reinforced collars, and garment-dyed color that holds its depth.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="fade-up">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
              Teemboo — Quiet essentials
            </p>
            <h1 className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-tighter-2 sm:text-6xl md:text-7xl">
              The t-shirt,
              <br />
              <span className="italic">reduced</span> to its
              <br />
              essentials.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
              Heavyweight organic cotton. Clean silhouettes. A small line of
              tees made in Portugal to be the ones you reach for, every day,
              for years.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 bg-ink px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink/85"
              >
                Shop the line
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/about"
                className="text-[13px] uppercase tracking-[0.18em] text-stone underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Our approach
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative fade-up" style={{ animationDelay: "120ms" }}>
            <div className="grid grid-cols-2 gap-4">
              {featured.slice(0, 2).map((p, i) => (
                <Link
                  key={p.id}
                  to={`/shop/${p.id}`}
                  className={`group block overflow-hidden rounded-sm bg-mist ${
                    i === 1 ? "mt-10" : ""
                  }`}
                >
                  <div className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <ProductImage
                      color={p.color}
                      colorName={p.colorName}
                      className="h-full w-full"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-stone">
              <span className="uppercase tracking-[0.18em]">
                {featured[0]?.name}
              </span>
              <span className="tabular-nums">from $38</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee values strip */}
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-5 text-[11px] uppercase tracking-[0.25em] text-stone sm:px-8">
          <span>Organic cotton</span>
          <span className="text-line">/</span>
          <span>240–300 gsm</span>
          <span className="text-line">/</span>
          <span>Made in Portugal</span>
          <span className="text-line">/</span>
          <span>Garment-dyed</span>
          <span className="text-line">/</span>
          <span>Carbon-neutral shipping</span>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
              Selected
            </p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
              The featured few
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1.5 text-[13px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink sm:inline-flex"
          >
            View all
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Manifesto / values */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
              The approach
            </p>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tighter-2 sm:text-4xl">
              Fewer pieces.
              <br />
              Better made.
              <br />
              Worn longer.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-stone">
              We make a short line of t-shirts and we make them well. No drops
              for the sake of drops — just the silhouettes, weights, and colors
              we'd want in our own drawers.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] underline-offset-4 hover:underline"
            >
              Read the full story
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-1">
            {values.map((v) => (
              <div
                key={v.n}
                className="bg-mist px-6 py-7 transition-colors hover:bg-sand/60"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-stone">{v.n}</span>
                  <h3 className="text-base font-medium">{v.title}</h3>
                </div>
                <p className="mt-3 pl-10 text-sm leading-relaxed text-stone">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
            Browse
          </p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
            By category
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-sm bg-mist p-6 transition-colors hover:bg-sand"
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-stone">
                {c.blurb}
              </span>
              <div className="flex items-end justify-between">
                <h3 className="font-display text-2xl tracking-tighter-2">
                  {c.name}
                </h3>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="text-stone transition-all group-hover:-translate-y-1 group-hover:text-ink"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      {newArrivals.length > 0 && (
        <section className="border-t border-line bg-mist/50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
                  Just in
                </p>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
                  New arrivals
                </h2>
              </div>
              <Link
                to="/shop"
                className="hidden items-center gap-1.5 text-[13px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink sm:inline-flex"
              >
                View all
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {newArrivals.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial closing */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
          Teemboo
        </p>
        <p className="mt-6 font-display text-2xl font-light leading-relaxed tracking-tighter-2 sm:text-3xl">
          “The best t-shirt is the one you forget you're wearing — until you
          reach for it again the next morning.”
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] uppercase tracking-[0.2em]"
        >
          Find your tee
          <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
      </section>
    </>
  );
}
