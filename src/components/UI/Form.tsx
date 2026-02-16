import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";

export type ForwardProps = { clear: () => void };

type FormProps = {
  onSave: (data: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

const Form = forwardRef<ForwardProps, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref,
) {
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        // formRef.current?.clear();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      {...otherProps}
      ref={formRef}
    >
      {children}
    </form>
  );
});

export default Form;
