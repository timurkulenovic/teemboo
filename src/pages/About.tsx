import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";

const stats = [
  { value: "240–300", label: "gsm cotton" },
  { value: "9", label: "tees in the line" },
  { value: "1", label: "studio in Porto" },
  { value: "100%", label: "organic cotton" },
];

const steps = [
  {
    n: "01",
    title: "Source",
    body: "Organic cotton, grown without synthetic pesticides and combed to remove short fibers — leaving only the longest, softest staples.",
  },
  {
    n: "02",
    title: "Knit",
    body: "Knit into heavyweight jerseys on machines that hold their tension. The result: a fabric with structure and a dry, full hand.",
  },
  {
    n: "03",
    title: "Cut & sew",
    body: "Cut and sewn in a family-run studio in Porto we've worked with since the first tee. Side-seamed for structure, collar that holds.",
  },
  {
    n: "04",
    title: "Garment-dye",
    body: "Dyed as finished garments for depth of color and a lived-in feel from the first wear. Pre-washed for zero shrinkage.",
  },
];

const faqs = [
  {
    q: "What fit should I expect?",
    a: "Our Essentials run true to size with a relaxed, everyday body. The Box Tee is intentionally boxy and slightly cropped. When in doubt, take your usual size.",
  },
  {
    q: "How should I care for my tee?",
    a: "Machine wash cold, inside out, with like colors. Tumble dry low or hang to dry. The fabric is pre-washed, so expect no shrinkage.",
  },
  {
    q: "What is your shipping policy?",
    a: "Complimentary carbon-neutral shipping on orders over $75. Standard orders ship within 1–2 business days from Porto.",
  },
  {
    q: "Can I return a tee?",
    a: "Yes — unworn tees with tags can be returned within 30 days for a full refund. We'll send a prepaid label.",
  },
  {
    q: "Where are your tees made?",
    a: "Every tee is cut and sewn in a family-run studio in Porto, Portugal, from organic cotton knitted in Europe.",
  },
];

export default function About() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
            About Teemboo
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tighter-2 sm:text-5xl md:text-6xl">
            We make a short line of t-shirts and we make them well.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-stone">
            Teemboo began with a frustration: the t-shirts we loved faded,
            sagged, and lost their shape within a season. So we set out to make
            a small, considered line of organic cotton tees — built to be the
            ones you reach for, every day, for years.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-10 text-center sm:px-8">
              <p className="font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-stone">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
              The story
            </p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
              Fewer, better tees.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-stone">
            <p>
              Most wardrobes have a drawer of t-shirts that didn't survive
              their first year. Collars that wave, fabric that thins, colors
              that wash out to nothing. We thought there had to be a quieter
              way.
            </p>
            <p>
              So we stripped the t-shirt back to what matters: weight, hand,
              cut, and color. We work with a single family-run studio in Porto,
              knit from organic cotton grown without synthetics, and dye each
              garment as a finished piece — for depth and a lived-in feel from
              day one.
            </p>
            <p>
              We don't chase trends or flood the calendar with drops. The line
              is short on purpose. When something is worth making, we make it —
              and we make it to last.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
              How it's made
            </p>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
              From field to drawer
            </h2>
          </div>
          <div className="grid gap-px bg-line md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="bg-mist p-8 transition-colors hover:bg-sand/60">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-stone">{s.n}</span>
                  <h3 className="text-base font-medium">{s.title}</h3>
                </div>
                <p className="mt-4 pl-10 text-sm leading-relaxed text-stone">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
            Questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tighter-2 sm:text-4xl">
            Good to know
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium sm:text-base">
                    {f.q}
                  </span>
                  <span className="shrink-0 text-stone">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-stone">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-ink px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink/85"
          >
            Browse the shop
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
