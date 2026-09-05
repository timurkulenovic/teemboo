import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import ProductImage from "./ProductImage";

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQuantity, subtotal, count } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-ink/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="text-[13px] uppercase tracking-[0.2em]">
            Your bag ({count})
          </h2>
          <button
            onClick={close}
            aria-label="Close cart"
            className="text-stone transition-colors hover:text-ink"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={32} strokeWidth={1} className="text-stone/50" />
            <p className="font-display text-xl">Your bag is empty</p>
            <p className="max-w-xs text-sm text-stone">
              Quiet essentials, waiting to be worn. Let's find your tee.
            </p>
            <Link
              to="/shop"
              onClick={close}
              className="mt-2 border-b border-ink pb-0.5 text-[13px] uppercase tracking-[0.18em]"
            >
              Browse the shop
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <ul className="divide-y divide-line">
                {items.map((item) => (
                  <li
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 py-5"
                  >
                    <Link
                      to={`/shop/${item.product.id}`}
                      onClick={close}
                      className="shrink-0"
                    >
                      <ProductImage
                        color={item.product.color}
                        colorName={item.product.colorName}
                        className="h-24 w-24 rounded-sm"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <Link
                            to={`/shop/${item.product.id}`}
                            onClick={close}
                            className="text-sm font-medium hover:opacity-70"
                          >
                            {item.product.name}
                          </Link>
                          <p className="mt-0.5 text-xs text-stone">
                            {item.product.colorName} · {item.size}
                          </p>
                        </div>
                        <p className="text-sm tabular-nums">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-line">
                          <button
                            onClick={() =>
                              setQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1,
                              )
                            }
                            aria-label="Decrease quantity"
                            className="p-1.5 text-stone hover:text-ink"
                          >
                            <Minus size={13} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-xs tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              setQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1,
                              )
                            }
                            aria-label="Increase quantity"
                            className="p-1.5 text-stone hover:text-ink"
                          >
                            <Plus size={13} strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item.product.id, item.size)}
                          className="text-[11px] uppercase tracking-[0.15em] text-stone underline-offset-4 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone">Subtotal</span>
                <span className="text-base tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                onClick={() => alert("Checkout is a demo — thanks for browsing.")}
                className="mt-4 w-full bg-ink py-4 text-[13px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink/85"
              >
                Checkout
              </button>
              <button
                onClick={close}
                className="mt-2 w-full py-2 text-[13px] uppercase tracking-[0.18em] text-stone hover:text-ink"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
