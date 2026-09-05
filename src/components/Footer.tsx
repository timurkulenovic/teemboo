import { Link } from "react-router-dom";
import { Camera, AtSign, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="mt-24 border-t border-line bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div>
            <Link to="/" className="font-display text-3xl tracking-tighter-2">
              Teemboo
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              Minimalist t-shirts cut from organic cotton. Quiet essentials,
              made to last.
            </p>
            <form onSubmit={submit} className="mt-6">
              <label className="text-[11px] uppercase tracking-[0.2em] text-stone">
                Join the list
              </label>
              <div className="mt-2 flex items-center border-b border-ink/30 focus-within:border-ink">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-stone/60"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-1 text-ink transition-opacity hover:opacity-60"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
              {done && (
                <p className="mt-2 text-xs text-stone">
                  Thanks — check your inbox.
                </p>
              )}
            </form>
          </div>

          {/* Shop */}
          <FooterCol
            title="Shop"
            links={[
              { label: "All Tees", to: "/shop" },
              { label: "Essentials", to: "/shop?category=Essentials" },
              { label: "Collections", to: "/shop?category=Collections" },
              { label: "Limited", to: "/shop?category=Limited" },
            ]}
          />

          {/* Help */}
          <FooterCol
            title="Help"
            links={[
              { label: "Shipping", to: "/about" },
              { label: "Returns", to: "/about" },
              { label: "Size Guide", to: "/about" },
              { label: "Contact", to: "/about" },
            ]}
          />

          {/* About */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-stone">
              Studio
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Rua das Camisetas 12<br />
              Porto, Portugal
            </p>
            <div className="mt-4 flex gap-4 text-stone">
              <a href="#" aria-label="Instagram" className="hover:text-ink">
                <Camera size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Contact" className="hover:text-ink">
                <AtSign size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-stone sm:flex-row">
          <p>© {new Date().getFullYear()} Teemboo. All rights reserved.</p>
          <p className="tracking-wide">Organic · Made in Portugal</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.2em] text-stone">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="text-sm text-stone transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
