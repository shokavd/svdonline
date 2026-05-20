import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "SVD Online: AI automation workflows and honest tool reviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0C0810",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#FF2D8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 22,
              color: "#fff",
            }}
          >
            S
          </div>
          <span style={{ color: "#F5F0F8", fontWeight: 700, fontSize: 22 }}>SVD Online</span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              color: "#FF2D8A",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            AI Automation · Tool Reviews
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <span style={{ color: "#F5F0F8", fontSize: 80, fontWeight: 900, lineHeight: 0.88, margin: 0 }}>
              Automate.
            </span>
            <span style={{ color: "#FF2D8A", fontSize: 80, fontWeight: 900, lineHeight: 0.88, margin: 0 }}>
              Review.
            </span>
            <span style={{ color: "#F5F0F8", fontSize: 80, fontWeight: 900, lineHeight: 0.88, margin: 0 }}>
              Scale.
            </span>
          </div>
          <p style={{ color: "#B890CC", fontSize: 20, margin: 0, maxWidth: 680 }}>
            n8n workflows and honest tool reviews by Shoka van Dooren. No fluff, no sponsored nonsense.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
