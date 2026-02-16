import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps | AnchorProps) {
  const { el, children, ...rest } = props;

  if (el === "anchor") {
    return (
      <a className="btn" {...(rest as React.ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className="btn"
      {...(rest as React.ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
