import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8 md:py-40">
      <p className="font-display text-7xl font-light tracking-tighter-2 sm:text-8xl">
        404
      </p>
      <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-stone">
        Page not found
      </p>
      <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone">
        The page you're looking for isn't here. It may have moved, or never
        existed in the first place.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] uppercase tracking-[0.2em]"
      >
        <ArrowLeft size={15} strokeWidth={1.5} />
        Back to home
      </Link>
    </section>
  );
}
