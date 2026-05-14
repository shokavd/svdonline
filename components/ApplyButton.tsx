"use client";
import { useState } from "react";
import { getT, type Locale } from "../lib/i18n";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_INTAKE_WEBHOOK_URL ??
  "https://shoka-n8n-instance.zeabur.app/webhook/svdonline-intake";

type Status = "idle" | "submitting" | "success" | "error";
type PackageId = "spark" | "frame" | "build" | "fullStack";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timeline, setTimeline] = useState("");
  const [extra, setExtra] = useState<Record<string, string>>({});

  const fields = f.packageFields[packageId as PackageId] ?? [];

  function close() {
    setOpen(false);
    setStatus("idle");
    setName("");
    setEmail("");
    setTimeline("");
    setExtra({});
  }

  function setField(id: string, value: string) {
    setExtra((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    const details = fields
      .map((field) => `${field.label}\n${extra[field.id] || "—"}`)
      .join("\n\n");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package: packageName,
          packageId,
          name,
          email,
          timeline,
          details,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]";

  const labelClass = "block text-sm font-medium text-[var(--foreground)] mb-1.5";

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
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="bg-[var(--background)] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <h2 className="font-bold text-[var(--foreground)]">{f.modalTitle(packageName)}</h2>
              <button
                onClick={close}
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors leading-none text-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {status === "success" ? (
                <div className="text-center py-8">
                  <p className="text-3xl mb-3">✅</p>
                  <p className="font-bold text-[var(--foreground)] mb-2">{f.successTitle}</p>
                  <p className="text-sm text-[var(--muted)]">{f.successBody}</p>
                  <button onClick={close} className="mt-6 text-sm text-[var(--accent)] hover:underline">
                    {f.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>{f.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={f.namePlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{f.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={f.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  {fields.map((field) => (
                    <div key={field.id}>
                      <label className={labelClass}>
                        {field.label}
                        {"optional" in field && field.optional && (
                          <span className="font-normal text-[var(--muted)]"> (optional)</span>
                        )}
                      </label>
                      {"options" in field && Array.isArray(field.options) ? (
                        <select
                          required
                          value={extra[field.id] ?? ""}
                          onChange={(e) => setField(field.id, e.target.value)}
                          className={inputClass}
                        >
                          <option value="">{f.selectDefault}</option>
                          {(field.options as string[]).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <textarea
                          required={!("optional" in field && field.optional)}
                          rows={3}
                          value={extra[field.id] ?? ""}
                          onChange={(e) => setField(field.id, e.target.value)}
                          placeholder={"placeholder" in field ? field.placeholder : ""}
                          className={`${inputClass} resize-none`}
                        />
                      )}
                    </div>
                  ))}

                  <div>
                    <label className={labelClass}>{f.timelineLabel}</label>
                    <select
                      required
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">{f.timelineDefault}</option>
                      {f.timelines.map((tl) => (
                        <option key={tl} value={tl}>
                          {tl}
                        </option>
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
