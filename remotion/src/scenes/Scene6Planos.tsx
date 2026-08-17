import React from "react";
import { AbsoluteFill } from "remotion";
import { Backdrop, Eyebrow, Panel, useRise } from "../components/Kit";
import { C, GRAD } from "../theme";

const PLANOS = [
  {
    nome: "Starter",
    preco: "80",
    limite: "100 buscas por dia",
    itens: ["Todas as fontes de captura", "Classificação por IA", "Pipeline completo"],
    destaque: false,
  },
  {
    nome: "Performance",
    preco: "170",
    limite: "600 buscas por dia",
    itens: ["Volume 6x maior", "Prioridade na fila de raspagem", "Suporte dedicado"],
    destaque: true,
  },
];

export const Scene6Planos: React.FC = () => {
  const title = useRise(4, 30);
  return (
    <Backdrop>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: "0 160px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Eyebrow>Planos</Eyebrow>
        </div>
        <h2
          style={{
            ...title,
            fontFamily: "var(--display)",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
            color: C.text,
            margin: "24px 0 44px",
            textAlign: "center",
          }}
        >
          Escolha pelo volume de prospecção
        </h2>

        <div style={{ display: "flex", gap: 34, width: "100%" }}>
          {PLANOS.map((p, i) => {
            const s = useRise(20 + i * 12, 54);
            return (
              <Panel
                key={p.nome}
                style={{
                  ...s,
                  flex: 1,
                  padding: 44,
                  border: p.destaque ? `1px solid ${C.blue}` : `1px solid ${C.line}`,
                  boxShadow: p.destaque
                    ? "0 40px 110px -50px rgba(47,107,255,0.85)"
                    : "0 40px 90px -50px rgba(0,0,0,0.9)",
                }}
              >
                <p style={{ fontSize: 28, color: C.dim, letterSpacing: 3 }}>
                  {p.nome.toUpperCase()}
                </p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginTop: 16 }}>
                  <span style={{ fontSize: 34, color: C.dim, paddingBottom: 12 }}>R$</span>
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: 96,
                      fontWeight: 700,
                      color: C.text,
                      lineHeight: 1,
                    }}
                  >
                    {p.preco}
                  </span>
                  <span style={{ fontSize: 30, color: C.dim, paddingBottom: 12 }}>/mês</span>
                </div>
                <div
                  style={{
                    marginTop: 22,
                    display: "inline-block",
                    padding: "10px 18px",
                    borderRadius: 999,
                    backgroundImage: p.destaque ? GRAD : "none",
                    background: p.destaque ? undefined : "rgba(255,255,255,0.06)",
                    color: p.destaque ? "#06101F" : C.text,
                    fontSize: 26,
                    fontWeight: 600,
                  }}
                >
                  {p.limite}
                </div>
                <div style={{ marginTop: 30 }}>
                  {p.itens.map((it) => (
                    <p
                      key={it}
                      style={{
                        fontSize: 27,
                        color: C.dim,
                        marginTop: 14,
                        display: "flex",
                        gap: 14,
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: 99,
                          background: p.destaque ? C.cyan : C.dim,
                        }}
                      />
                      {it}
                    </p>
                  ))}
                </div>
              </Panel>
            );
          })}
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
