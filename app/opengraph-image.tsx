import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000f23",
          color: "#E8EBF1",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 10,
            color: "#C7CCD6",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TRINETRA VISUALS · NELLORE
        </div>
        <div style={{ fontSize: 110, fontStyle: "italic", marginTop: 12 }}>
          Vow, Bump &amp; Giggle
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#C7CCD6",
            marginTop: 16,
            fontFamily: "Arial, sans-serif",
          }}
        >
          Maternity · Newborn · Wedding
        </div>
      </div>
    ),
    { ...size },
  );
}
