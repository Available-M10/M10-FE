import { StartFirstLabel } from "./StartFirstLabel";
import { StartSecondLabel } from "./StartSecondLabel";
import { MainFirstLabel } from "./MainFirstLabel";
import { MainSecondLabel } from "./MainSecondLabel";
import { EndLabel } from "./EndLabel";
import type { JSX } from "react";

export interface nodeConfig {
  label: JSX.Element;
  style?: React.CSSProperties;
}

const StartStyle: React.CSSProperties = {
  width: "3%",
  borderTopLeftRadius: "50%",
  borderBottomLeftRadius: "50%",
  border: "1px solid #E1E5E9",
};

const MainStyle: React.CSSProperties = {
  borderRadius: "12px",
  border: "1px solid #E1E5E9",
};

export const labelMap: Record<
  "시작-first" | "시작-second" | "본론-first" | "본론-second",
  nodeConfig
> = {
  "시작-first": {
    label: <StartFirstLabel />,
    style: StartStyle,
  },
  "시작-second": { label: <StartSecondLabel />, style: StartStyle },
  "본론-first": {
    label: <MainFirstLabel />,
    style: { ...MainStyle, width: "10%" },
  },
  "본론-second": {
    label: <MainSecondLabel />,
    style: { ...MainStyle, width: "4%" },
  },
};
