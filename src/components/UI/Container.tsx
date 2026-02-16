import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  as: ElementType;
};

export default function Container({ children, as }: ContainerProps) {
  const Component = as;
  return <Component>{children}</Component>;
}
