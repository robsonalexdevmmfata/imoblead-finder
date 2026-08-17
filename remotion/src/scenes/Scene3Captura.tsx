import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, Eyebrow, Panel, useRise } from "../components/Kit";
import { C, GRAD } from "../theme";

const FONTES = [
  { nome: "Facebook Groups", nota: "conversas públicas" },
  { nome: "OLX", nota: "anúncios de procura" },
  { nome: "Portais Abertos", nota: "quero vender / alugar" },
  { nome: "Google Maps", nota: "avaliações e buscas" },
];

export const Scene3Captura: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useRise(6, 34);
  const pulse = interpolate(frame % 45, [0, 45], [0.2, 1]);

  return (
    <Backdrop>
      <AbsoluteFill style={{ justifyContent: "center", padding: "0 150px" }}>
        <Eyebrow>Etapa 01 — Captura</Eyebrow>
        <h2
          style={{
            ...title,
            fontFamily: "var(--display)",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            color: C.text,
            margin: "26px 0 40px",
          }}
        >
          Raspagem contínua nas fontes onde a demanda aparece
        </h2>

        <div style={{ display: "flex", gap: 24 }}>
          {FONTES.map((f, i) => {
            const s = useRise(24 + i * 9, 50);
            return (
              <Panel key={f.nome} style={{ ...s, flex: 1, padding: "30px 28px" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 14,
                    backgroundImage: GRAD,
                    opacity: 0.9,
                  }}
                />
                <p
                  style={{
                    marginTop: 22,
                    fontSize: 32,
                    fontWeight: 600,
                    color: C.text,
                    fontFamily: "var(--display)",
                  }}
                >
                  {f.nome}
                </p>
                <p style={{ marginTop: 8, fontSize: 24, color: C.dim }}>{f.nota}</p>
                <div
                  style={{
                    marginTop: 26,
                    height: 6,
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${Math.min(100, (pulse * 100 + i * 12) % 100)}%`,
                      backgroundImage: GRAD,
                    }}
                  />
                </div>
              </Panel>
            );
          })}
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
