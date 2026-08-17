import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, AbsoluteFill } from "remotion";
import { C, GRAD } from "../theme";

export const useRise = (delay = 0, distance = 40) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 22, stiffness: 140 } });
  return {
    opacity: interpolate(s, [0, 1], [0, 1]),
    transform: `translateY(${interpolate(s, [0, 1], [distance, 0])}px)`,
  };
};

export const Backdrop: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 90) * 18;
  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(circle at ${28 + drift}% 18%, rgba(47,107,255,0.30), transparent 55%), radial-gradient(circle at 82% 88%, rgba(84,182,255,0.16), transparent 50%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          transform: `translateX(${drift}px)`,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

export const Eyebrow: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const style = useRise(delay, 20);
  return (
    <div
      style={{
        ...style,
        display: "inline-flex",
        alignSelf: "flex-start",
        width: "fit-content",
        alignItems: "center",
        gap: 12,
        padding: "10px 20px",
        borderRadius: 999,
        border: `1px solid ${C.line}`,
        backgroundColor: "rgba(26,33,49,0.7)",
        color: C.dim,
        fontSize: 22,
        letterSpacing: 4,
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: 999, backgroundImage: GRAD }} />
      {children}
    </div>
  );
};

export const Panel: React.FC<{ style?: React.CSSProperties; children: React.ReactNode }> = ({
  style,
  children,
}) => (
  <div
    style={{
      borderRadius: 26,
      border: `1px solid ${C.line}`,
      backgroundImage: `linear-gradient(160deg, ${C.panel}, ${C.bgSoft})`,
      boxShadow: "0 40px 90px -50px rgba(0,0,0,0.9)",
      ...style,
    }}
  >
    {children}
  </div>
);
