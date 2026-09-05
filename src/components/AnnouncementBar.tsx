const messages = [
  "Complimentary shipping on orders over $75",
  "Organic cotton, made in Portugal",
  "New — The Heavyweight Tee is here",
];

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden border-b border-line bg-ink text-paper">
      <div className="flex whitespace-nowrap py-2 text-[11px] uppercase tracking-[0.25em]">
        <div className="marquee flex shrink-0">
          {[...messages, ...messages, ...messages, ...messages].map((m, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              <span className="opacity-80">{m}</span>
              <span className="opacity-30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
