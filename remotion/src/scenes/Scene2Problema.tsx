import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Backdrop, Eyebrow, useRise } from "../components/Kit";
import { C } from "../theme";

const LINHAS = ["Você espera o lead chegar.", "Ele já perguntou em outro lugar."];

export const Scene2Problema: React.FC = () => {
  const frame = useCurrentFrame();
  const risco = interpolate(frame, [46, 74], [0, 1], { extrapolateRight: "clamp" });
  const l0 = useRise(10, 44);
  const l1 = useRise(26, 44);
  const styles = [l0, l1];

  return (
    <Backdrop>
      <AbsoluteFill style={{ justifyContent: "center", paddingLeft: 170, paddingRight: 260 }}>
        <Eyebrow>O problema</Eyebrow>
        <div style={{ marginTop: 42 }}>
          {LINHAS.map((t, i) => (
            <div key={t} style={{ position: "relative", display: "inline-block" }}>
              <h2
                style={{
                  ...styles[i],
                  fontFamily: "var(--display)",
                  fontSize: 82,
                  fontWeight: 700,
                  letterSpacing: -2,
                  color: i === 0 ? C.dim : C.text,
                  margin: "10px 0",
                }}
              >
                {t}
              </h2>
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "58%",
                    left: 0,
                    height: 6,
                    width: `${risco * 100}%`,
                    borderRadius: 99,
                    backgroundColor: C.blue,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
