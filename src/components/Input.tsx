import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string | number;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p className="input-element">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} />
      </p>
    );
  },
);

export default Input;
