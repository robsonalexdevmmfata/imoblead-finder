import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problema } from "./scenes/Scene2Problema";
import { Scene3Captura } from "./scenes/Scene3Captura";
import { Scene4IA } from "./scenes/Scene4IA";
import { Scene5Pipeline } from "./scenes/Scene5Pipeline";
import { Scene6Planos } from "./scenes/Scene6Planos";
import { Scene7Fim } from "./scenes/Scene7Fim";
import { C } from "./theme";

const sora = loadSora("normal", { weights: ["600", "700"], subsets: ["latin"] });
const inter = loadInter("normal", { weights: ["400", "500", "600"], subsets: ["latin"] });

const T = (presentation: Parameters<typeof TransitionSeries.Transition>[0]["presentation"]) => (
  <TransitionSeries.Transition
    presentation={presentation}
    timing={springTiming({ config: { damping: 200 }, durationInFrames: 20 })}
  />
);

export const MainVideo: React.FC = () => (
  <AbsoluteFill
    style={
      {
        backgroundColor: C.bg,
        fontFamily: inter.fontFamily,
        color: C.text,
        ["--display" as string]: sora.fontFamily,
      } as React.CSSProperties
    }
  >
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={100}>
        <Scene1Hook />
      </TransitionSeries.Sequence>
      {T(fade())}
      <TransitionSeries.Sequence durationInFrames={95}>
        <Scene2Problema />
      </TransitionSeries.Sequence>
      {T(wipe({ direction: "from-right" }))}
      <TransitionSeries.Sequence durationInFrames={110}>
        <Scene3Captura />
      </TransitionSeries.Sequence>
      {T(fade())}
      <TransitionSeries.Sequence durationInFrames={120}>
        <Scene4IA />
      </TransitionSeries.Sequence>
      {T(wipe({ direction: "from-bottom" }))}
      <TransitionSeries.Sequence durationInFrames={110}>
        <Scene5Pipeline />
      </TransitionSeries.Sequence>
      {T(fade())}
      <TransitionSeries.Sequence durationInFrames={120}>
        <Scene6Planos />
      </TransitionSeries.Sequence>
      {T(fade())}
      <TransitionSeries.Sequence durationInFrames={100}>
        <Scene7Fim />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
