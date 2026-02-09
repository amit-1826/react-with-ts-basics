import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

export default function Button({ el, children }: ButtonProps | AnchorProps) {
  if (el === "anchor") {
    return <a className="button">{children}</a>;
  }
  return <button className="button">{children}</button>;
}
