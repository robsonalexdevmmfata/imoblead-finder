import React from "react";
import { AbsoluteFill, Img, staticFile, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, useRise } from "../components/Kit";
import { C, GRAD } from "../theme";

export const Scene7Fim: React.FC = () => {
  const frame = useCurrentFrame();
  const logo = useRise(2, 30);
  const line = useRise(16, 30);
  const cta = useRise(30, 26);
  const glow = interpolate(Math.sin(frame / 22), [-1, 1], [0.35, 0.7]);

  return (
    <Backdrop>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ ...logo, display: "flex", alignItems: "center", gap: 26 }}>
          <Img
            src={staticFile("images/logo.png")}
            style={{ width: 96, height: 96, filter: `drop-shadow(0 0 40px rgba(47,107,255,${glow}))` }}
          />
          <span
            style={{
              fontFamily: "var(--display)",
              fontSize: 82,
              fontWeight: 700,
              color: C.text,
              letterSpacing: -2,
            }}
          >
            Imob
            <span
              style={{
                backgroundImage: GRAD,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Lead
            </span>
          </span>
        </div>

        <p
          style={{
            ...line,
            marginTop: 32,
            fontSize: 42,
            color: C.dim,
            textAlign: "center",
            maxWidth: 1100,
          }}
        >
          Pare de esperar. Comece a encontrar.
        </p>

        <div
          style={{
            ...cta,
            marginTop: 44,
            padding: "20px 44px",
            borderRadius: 999,
            backgroundImage: GRAD,
            color: "#06101F",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          imoblead.com.br
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
