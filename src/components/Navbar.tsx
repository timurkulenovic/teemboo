import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Shop", end: false },
  { to: "/about", label: "About", end: false },
];

export default function Navbar() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left: desktop links */}
        <div className="hidden flex-1 items-center gap-8 md:flex">
          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="text-[13px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink"
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-1 items-center text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Center: wordmark */}
        <Link
          to="/"
          className="font-display text-2xl font-medium tracking-tighter-2 sm:text-3xl"
        >
          Teemboo
        </Link>

        {/* Right: cart + home link */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <NavLink
            to="/"
            className="hidden text-[13px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink md:inline"
          >
            Home
          </NavLink>
          <button
            type="button"
            onClick={open}
            className="relative flex items-center gap-2 text-ink transition-opacity hover:opacity-60"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="text-[13px] tabular-nums tracking-wide">
              ({count})
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="flex flex-col px-5 py-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `border-b border-line/60 py-3 text-sm uppercase tracking-[0.18em] last:border-0 ${
                    isActive ? "text-ink" : "text-stone"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
