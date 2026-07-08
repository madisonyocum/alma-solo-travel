import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alma Solo Travel, Curated Solo Journeys for Women";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Programmatically generated Open Graph image so no external asset is required.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#40493A",
          color: "#FBF8F2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: 18,
            marginBottom: 24,
          }}
        >
          ALMA
        </div>
        <div style={{ fontSize: 72, textAlign: "center", padding: "0 80px" }}>
          Curated solo journeys for women
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            letterSpacing: 8,
            color: "#D8B86A",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          SOLO&nbsp;&nbsp;TRAVEL
        </div>
      </div>
    ),
    { ...size },
  );
}
