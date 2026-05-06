"use client";
import { useState } from "react";
import { getT, type Locale } from "../lib/i18n";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_INTAKE_WEBHOOK_URL ??
  "https://shoka-n8n-instance.zeabur.app/webhook/svdonline-intake";

type Status = "idle" | "submitting" | "success" | "error";

export function ApplyButton({
  locale,
  packageId,
  packageName,
  accent,
}: {
  locale: Locale;
  packageId: string;
  packageName: string;
  accent: boolean;
}) {
  const f = getT(locale).intakeForm;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", problem: "", tools: "", timeline: "" });

  function close() {
    setOpen(false);
    setStatus("idle");
    setForm({ name: "", email: "", problem: "", tools: "", timeline: "" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ package: packageName, packageId, ...form, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`block w-full text-center font-semibold text-sm px-5 py-3 rounded-lg transition-opacity hover:opacity-90 ${
          accent ? "bg-[var(--accent)] text-white" : "bg-[var(--foreground)] text-white"
        }`}
      >
        {f.modalTitle(packageName)}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="bg-[var(--background)] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <h2 className="font-bold text-[var(--foreground)]">{f.modalTitle(packageName)}</h2>
              <button onClick={close} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors leading-none text-lg">✕</button>
            </div>

            <div className="p-6">
              {status === "success" ? (
                <div className="text-center py-8">
                  <p className="text-3xl mb-3">✅</p>
                  <p className="font-bold text-[var(--foreground)] mb-2">{f.successTitle}</p>
                  <p className="text-sm text-[var(--muted)]">{f.successBody}</p>
                  <button onClick={close} className="mt-6 text-sm text-[var(--accent)] hover:underline">{f.close}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{f.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={f.namePlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{f.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={f.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1">{f.problemLabel}</label>
                    <p className="text-xs text-[var(--muted)] mb-1.5">{f.problemHint}</p>
                    <textarea
                      required
                      rows={4}
                      value={form.problem}
                      onChange={(e) => setForm({ ...form, problem: e.target.value })}
                      placeholder={f.problemPlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                      {f.toolsLabel} <span className="font-normal text-[var(--muted)]">({f.toolsHint})</span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.tools}
                      onChange={(e) => setForm({ ...form, tools: e.target.value })}
                      placeholder={f.toolsPlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">{f.timelineLabel}</label>
                    <select
                      required
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">{f.timelineDefault}</option>
                      {f.timelines.map((tl) => (
                        <option key={tl} value={tl}>{tl}</option>
                      ))}
                    </select>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{f.errorBody}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[var(--accent)] text-white font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === "submitting" ? f.submitting : f.submitLabel}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
