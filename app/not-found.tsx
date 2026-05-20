import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--dark)", color: "var(--foreground)" }}
    >
      <p className="text-[10rem] font-black leading-none" style={{ color: "var(--accent)", opacity: 0.15 }}>404</p>
      <div className="-mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Page not found</p>
        <h1 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "var(--foreground)" }}>
          This page doesn&apos;t exist
        </h1>
        <p className="text-base mb-8 max-w-sm" style={{ color: "var(--dark-muted)" }}>
          The link might be broken or the page has moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/en"
            className="btn-glow font-bold px-6 py-3 rounded-xl text-sm"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Go home →
          </Link>
          <Link
            href="/en/tools"
            className="btn-ghost font-medium px-6 py-3 rounded-xl text-sm"
          >
            Browse tools
          </Link>
        </div>
      </div>
    </div>
  );
}
