import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Backdrop, useRise } from "../components/Kit";
import { C, GRAD } from "../theme";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoIn = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const sub = useRise(28, 26);
  const line = interpolate(frame, [20, 55], [0, 1], { extrapolateRight: "clamp" });

  return (
    <Backdrop>
      <AbsoluteFill style={{ justifyContent: "center", paddingLeft: 170 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
          <Img
            src={staticFile("images/logo.png")}
            style={{
              width: 150,
              height: 150,
              opacity: logoIn,
              transform: `scale(${interpolate(logoIn, [0, 1], [0.6, 1])})`,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--display)",
                fontSize: 116,
                fontWeight: 700,
                color: C.text,
                letterSpacing: -3,
                opacity: logoIn,
                transform: `translateX(${interpolate(logoIn, [0, 1], [-40, 0])}px)`,
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
            </div>
            <div
              style={{
                height: 4,
                width: 520 * line,
                marginTop: 8,
                borderRadius: 99,
                backgroundImage: GRAD,
              }}
            />
          </div>
        </div>

        <p
          style={{
            ...sub,
            marginTop: 46,
            maxWidth: 1000,
            fontSize: 42,
            lineHeight: 1.3,
            color: C.dim,
            fontWeight: 500,
          }}
        >
          A plataforma de prospecção ativa que encontra quem já está procurando imóvel — antes do
          seu concorrente.
        </p>
      </AbsoluteFill>
    </Backdrop>
  );
};
