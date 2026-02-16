import { useRef } from "react";
import Button from "./UI/Button";
import Form, { type ForwardProps } from "./UI/Form";
import Input from "./UI/Input";
import { useTimersContext } from "../store/TimerContext";

export default function AddTimer() {
  const formRef = useRef<ForwardProps>(null);

  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const fetchedData = data as { name: string; duration: string };
    addTimer({
      id: Math.random(),
      name: fetchedData.name,
      duration: Number(fetchedData.duration),
    });
    formRef.current?.clear();
  }

  return (
    <Form onSave={handleSaveTimer} ref={formRef}>
      <Input label="Name" id="name" type="text" />
      <Input label="Duration" id="duration" type="number" />
      <Button el="button">Add Timer</Button>
    </Form>
  );
}
