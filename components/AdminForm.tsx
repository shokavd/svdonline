"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const POSTCALL_WEBHOOK = "https://shoka-n8n-instance.zeabur.app/webhook/svdonline-postcall";

type DocType = "agreement" | "thinkover";
type Status = "idle" | "submitting" | "success" | "error";

interface IntakeField {
  label: string;
  answer: string;
}

export function AdminForm() {
  const params = useSearchParams();

  const [docType, setDocType] = useState<DocType>("agreement");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [basePackage, setBasePackage] = useState("");
  const [upgradePackage, setUpgradePackage] = useState("");
  const [packageName, setPackageName] = useState(""); // the one actually chosen
  const [timeline, setTimeline] = useState("");
  const [chosenOption, setChosenOption] = useState<"A" | "B" | "C">("B");
  const [callNotes, setCallNotes] = useState("");
  const [fields, setFields] = useState<IntakeField[]>([]);
  const [sendDirectly, setSendDirectly] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const type = params.get("type") as DocType;
    if (type === "agreement" || type === "thinkover") setDocType(type);
    setClientName(params.get("name") || "");
    setClientEmail(params.get("email") || "");
    const pkg = params.get("package") || "";
    const upgrade = params.get("upgradePackage") || "";
    setBasePackage(pkg);
    setUpgradePackage(upgrade);
    setPackageName(pkg); // default to base package
    setTimeline(params.get("timeline") || "");

    const raw = params.get("data");
    if (raw) {
      try {
        const json = atob(raw.replace(/-/g, "+").replace(/_/g, "/"));
        const parsed = JSON.parse(json) as IntakeField[];
        setFields(parsed);
      } catch {
        // silently ignore
      }
    }
  }, [params]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(POSTCALL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          docType,
          chosenOption: docType === "agreement" ? chosenOption : null,
          callNotes,
          clientName,
          clientEmail,
          packageName,
          timeline,
          fields,
          sendDirectly,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900 focus:outline-none focus:border-orange-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-4">✅</p>
        <p className="font-bold text-gray-900 text-lg mb-2">
          {sendDirectly ? "Sent to client!" : "Generating draft…"}
        </p>
        <p className="text-sm text-gray-500">
          {sendDirectly
            ? `Email sent directly to ${clientEmail}. You have a BCC copy in your inbox.`
            : `Check contact@svdonline.com in about 30 seconds. Review and forward to ${clientEmail || "the client"}.`}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Client name</label>
          <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Client email</label>
          <input type="email" required value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Timeline</label>
          <input type="text" value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputClass} />
        </div>
      </div>

      {/* Package selector — shows upgrade option if Claude flagged one */}
      <div>
        <label className={labelClass}>Package agreed on the call</label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2.5 text-sm cursor-pointer">
            <input
              type="radio"
              name="packageChoice"
              checked={packageName === basePackage}
              onChange={() => setPackageName(basePackage)}
              className="accent-orange-500"
            />
            <span>{basePackage} <span className="text-gray-400">(originally applied for)</span></span>
          </label>
          {upgradePackage && (
            <label className="flex items-center gap-2.5 text-sm cursor-pointer">
              <input
                type="radio"
                name="packageChoice"
                checked={packageName === upgradePackage}
                onChange={() => setPackageName(upgradePackage)}
                className="accent-orange-500"
              />
              <span className="font-medium text-orange-600">{upgradePackage} <span className="text-gray-400 font-normal">(upgrade — Claude flagged this)</span></span>
            </label>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass}>Document type</label>
        <div className="flex gap-4">
          {(["agreement", "thinkover"] as DocType[]).map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="docType"
                value={t}
                checked={docType === t}
                onChange={() => setDocType(t)}
                className="accent-orange-500"
              />
              {t === "agreement" ? "Project Agreement (decided)" : "Project Thinkover (undecided)"}
            </label>
          ))}
        </div>
      </div>

      {docType === "agreement" && (
        <div>
          <label className={labelClass}>Option chosen on the call</label>
          <div className="flex gap-4">
            {(["A", "B", "C"] as const).map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={chosenOption === opt}
                  onChange={() => setChosenOption(opt)}
                  className="accent-orange-500"
                />
                Option {opt}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className={labelClass}>
          Call notes <span className="font-normal text-gray-400">(what came up in the call that wasn't in the intake)</span>
        </label>
        <textarea
          rows={5}
          value={callNotes}
          onChange={(e) => setCallNotes(e.target.value)}
          placeholder="e.g. Client mentioned they also want invoice reminders. Budget is flexible. They use Moneybird. Already has n8n account."
          className={`${inputClass} resize-none`}
        />
      </div>

      {fields.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Intake answers (read-only)</p>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {fields.map((f, i) => (
              <div key={i}>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">{f.label}</p>
                <p className="text-sm text-gray-700 mt-0.5">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Send mode */}
      <div className="border border-gray-200 rounded-xl p-4 space-y-2">
        <p className="text-sm font-medium text-gray-700">How should this be sent?</p>
        <label className="flex items-start gap-2.5 text-sm cursor-pointer">
          <input
            type="radio"
            name="sendMode"
            checked={!sendDirectly}
            onChange={() => setSendDirectly(false)}
            className="accent-orange-500 mt-0.5"
          />
          <span>
            <span className="font-medium">Send draft to me first</span>
            <span className="text-gray-400 block text-xs">You review, then forward to the client</span>
          </span>
        </label>
        <label className="flex items-start gap-2.5 text-sm cursor-pointer">
          <input
            type="radio"
            name="sendMode"
            checked={sendDirectly}
            onChange={() => setSendDirectly(true)}
            className="accent-orange-500 mt-0.5"
          />
          <span>
            <span className="font-medium">Send directly to client</span>
            <span className="text-gray-400 block text-xs">Sent from contact@svdonline.com — you get a BCC copy</span>
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Try again or check n8n.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-orange-500 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "submitting"
          ? "Generating…"
          : docType === "agreement"
          ? "Generate Project Agreement"
          : "Generate Project Thinkover"}
      </button>
    </form>
  );
}
