import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, Eyebrow, Panel, useRise } from "../components/Kit";
import { C, GRAD } from "../theme";

const COLUNAS = [
  { t: "Encontrado", n: 128 },
  { t: "Contato", n: 74 },
  { t: "Visita", n: 31 },
  { t: "Negociação", n: 18 },
  { t: "Fechado", n: 9 },
];

export const Scene5Pipeline: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useRise(4, 30);
  const move = interpolate(frame, [45, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Backdrop>
      <AbsoluteFill style={{ justifyContent: "center", padding: "0 140px" }}>
        <Eyebrow>Etapa 03 — Conversão</Eyebrow>
        <h2
          style={{
            ...title,
            fontFamily: "var(--display)",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
            color: C.text,
            margin: "24px 0 40px",
          }}
        >
          Pipeline visual e conversa no WhatsApp em um clique
        </h2>

        <div style={{ display: "flex", gap: 20 }}>
          {COLUNAS.map((c, i) => {
            const s = useRise(20 + i * 8, 46);
            return (
              <Panel key={c.t} style={{ ...s, flex: 1, padding: 22, minHeight: 300 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 24, fontWeight: 600, color: C.text }}>{c.t}</span>
                  <span style={{ fontSize: 22, color: C.dim }}>{c.n}</span>
                </div>
                <div
                  style={{
                    marginTop: 16,
                    height: 4,
                    borderRadius: 99,
                    backgroundImage: i < 2 ? GRAD : "none",
                    background: i < 2 ? undefined : "rgba(255,255,255,0.08)",
                  }}
                />
                {[0, 1].map((k) => (
                  <div
                    key={k}
                    style={{
                      marginTop: 16,
                      borderRadius: 16,
                      border: `1px solid ${C.line}`,
                      background: "rgba(255,255,255,0.03)",
                      padding: 16,
                      opacity: i === 0 && k === 0 ? 1 - move * 0.85 : 1,
                      transform:
                        i === 1 && k === 0 ? `translateY(${(1 - move) * -18}px)` : undefined,
                    }}
                  >
                    <div
                      style={{
                        height: 10,
                        width: "72%",
                        borderRadius: 99,
                        background: "rgba(255,255,255,0.16)",
                      }}
                    />
                    <div
                      style={{
                        marginTop: 10,
                        height: 8,
                        width: "48%",
                        borderRadius: 99,
                        background: "rgba(255,255,255,0.09)",
                      }}
                    />
                    <div
                      style={{
                        marginTop: 14,
                        height: 26,
                        width: 110,
                        borderRadius: 8,
                        background: `${C.green}22`,
                        border: `1px solid ${C.green}55`,
                      }}
                    />
                  </div>
                ))}
              </Panel>
            );
          })}
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
