import { ImageResponse } from "next/og";
import { Lang, t } from "../../lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Iago Alves";

const highlights = [
  "C# / .NET",
  "Java / Spring Boot",
  "PostgreSQL · SQL Server · MySQL",
  "Docker",
];

export default function Image({ params }: { params: { lang: Lang } }) {
  const { lang } = params;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          backgroundColor: "#18181b",
          color: "#e4e4e7",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 76 }}>{t("header.name", lang)}</div>
        <div style={{ fontSize: 40, color: "#a1a1aa" }}>
          {t("home.title", lang)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                fontSize: 26,
                color: "#e4e4e7",
                border: "1px solid #52525b",
                borderRadius: 999,
                padding: "8px 24px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 26, color: "#0ea5e9" }}>
          blog-iago-alves.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
