"use client";
import { useState } from "react";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_INTAKE_WEBHOOK_URL?.replace("svdonline-intake", "svdonline-contact") ??
  "https://shoka-n8n-instance.zeabur.app/webhook/svdonline-contact";

export function ContactForm({ locale }: { locale: string }) {
  const isNL = locale === "nl";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale, source: "contact-form" }),
      });
      if (!res.ok) throw new Error("webhook");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: "var(--dark-card)", border: "1px solid var(--dark-border)" }}>
        <p className="text-3xl mb-3">✓</p>
        <h2 className="text-xl font-black mb-2" style={{ color: "var(--foreground)" }}>
          {isNL ? "Bericht ontvangen" : "Message received"}
        </h2>
        <p className="text-sm" style={{ color: "var(--dark-muted)" }}>
          {isNL ? "Ik reageer binnen twee werkdagen." : "I'll get back to you within two business days."}
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: "var(--dark-card)",
    border: "1px solid var(--dark-border)",
    color: "var(--foreground)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
  } as React.CSSProperties;

  const labelStyle = { color: "var(--foreground)", fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" } as React.CSSProperties;

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label style={labelStyle}>{isNL ? "Naam" : "Name"}</label>
        <input required value={form.name} onChange={set("name")} style={inputStyle}
          placeholder={isNL ? "Jouw naam" : "Your name"} />
      </div>
      <div>
        <label style={labelStyle}>{isNL ? "E-mailadres" : "Email"}</label>
        <input required type="email" value={form.email} onChange={set("email")} style={inputStyle}
          placeholder={isNL ? "jij@voorbeeld.nl" : "you@example.com"} />
      </div>
      <div>
        <label style={labelStyle}>{isNL ? "Onderwerp" : "Subject"}</label>
        <select required value={form.subject} onChange={set("subject")} style={inputStyle}>
          <option value="">{isNL ? "Selecteer een onderwerp..." : "Select a subject..."}</option>
          <option value="project">{isNL ? "Ik wil een project starten" : "I want to start a project"}</option>
          <option value="tools">{isNL ? "Vraag over tools of reviews" : "Question about tools or reviews"}</option>
          <option value="tidify">{isNL ? "Vraag over Tidify AI" : "Question about Tidify AI"}</option>
          <option value="other">{isNL ? "Anders" : "Something else"}</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>{isNL ? "Bericht" : "Message"}</label>
        <textarea required value={form.message} onChange={set("message")} rows={5} style={{ ...inputStyle, resize: "vertical" }}
          placeholder={isNL ? "Vertel me meer..." : "Tell me more..."} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-glow font-bold px-7 py-3.5 rounded-xl text-sm w-full sm:w-auto"
        style={{ background: "var(--accent)", color: "#fff", opacity: status === "sending" ? 0.7 : 1 }}
      >
        {status === "sending"
          ? (isNL ? "Verzenden..." : "Sending...")
          : (isNL ? "Verstuur bericht →" : "Send message →")}
      </button>
      {status === "error" && (
        <p className="text-xs" style={{ color: "#f87171" }}>
          {isNL ? (
            <>Er ging iets mis — probeer het opnieuw of mail{" "}
              <a href="mailto:contact@svdonline.com" style={{ textDecoration: "underline" }}>contact@svdonline.com</a>.
            </>
          ) : (
            <>Something went wrong — try again or email{" "}
              <a href="mailto:contact@svdonline.com" style={{ textDecoration: "underline" }}>contact@svdonline.com</a>.
            </>
          )}
        </p>
      )}
    </form>
  );
}
