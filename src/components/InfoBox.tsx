import type { ReactNode } from "react";

type InfoMode = {
  mode: "info";
  children: ReactNode;
};

type WarningModeProp = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = InfoMode | WarningModeProp;

export default function InfoBox(props: InfoBoxProps) {
  if (props.mode === "info") {
    return (
      <div className="info-box">
        <p>{props.children}</p>
      </div>
    );
  }

  const severityClass = `warning-${props.severity}`;
  return (
    <div className={`warning-box ${severityClass}`}>
      <h2 className="warning-title">Warning</h2>
      <p>{props.children}</p>
    </div>
  );
}
