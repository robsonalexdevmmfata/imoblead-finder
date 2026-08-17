import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, Eyebrow, Panel, useRise } from "../components/Kit";
import { C, GRAD } from "../theme";

const CAMPOS = [
  ["Contato", "Marina Belchior"],
  ["Origem", "Facebook Groups"],
  ["Transação", "Compra"],
  ["Urgência", "Alta"],
];

export const Scene4IA: React.FC = () => {
  const frame = useCurrentFrame();
  const title = useRise(4, 30);
  const card = useRise(18, 60);
  const score = interpolate(frame, [40, 78], [0, 94], { extrapolateRight: "clamp" });

  return (
    <Backdrop>
      <AbsoluteFill
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 70,
          padding: "0 150px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Eyebrow>Etapa 02 — Inteligência</Eyebrow>
          <h2
            style={{
              ...title,
              fontFamily: "var(--display)",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -2,
              color: C.text,
              margin: "26px 0 22px",
            }}
          >
            A IA lê o post e entrega o lead pronto
          </h2>
          <p style={{ fontSize: 32, lineHeight: 1.45, color: C.dim, maxWidth: 620 }}>
            Nome, telefone, WhatsApp, redes sociais, tipo de transação, urgência e um resumo direto
            da necessidade — com score de qualificação.
          </p>
        </div>

        <Panel style={{ ...card, width: 720, padding: 40 }}>
          <p style={{ fontSize: 26, color: C.dim, lineHeight: 1.45 }}>
            “Pessoal, alguém indica apartamento de 2 quartos no Cambuí? Preciso mudar até o fim do
            mês, financiamento já aprovado.”
          </p>
          <div style={{ height: 1, background: C.line, margin: "30px 0" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {CAMPOS.map(([k, v], i) => {
              const s = useRise(34 + i * 7, 24);
              return (
                <div key={k} style={s}>
                  <p style={{ fontSize: 20, color: C.dim, letterSpacing: 2 }}>{k.toUpperCase()}</p>
                  <p style={{ fontSize: 30, fontWeight: 600, color: C.text, marginTop: 6 }}>{v}</p>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 34 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 22, color: C.dim, letterSpacing: 2 }}>SCORE</span>
              <span style={{ fontSize: 26, fontWeight: 700, color: C.text }}>
                {Math.round(score)}
              </span>
            </div>
            <div
              style={{
                marginTop: 12,
                height: 12,
                borderRadius: 99,
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <div style={{ height: "100%", width: `${score}%`, backgroundImage: GRAD }} />
            </div>
          </div>
        </Panel>
      </AbsoluteFill>
    </Backdrop>
  );
};
