import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input label="Name" id="name" type="text" ref={inputRef} />
      <Input label="Age" id="age" type="number" />

      <Button disabled el="button">
        Button
      </Button>
      <Button el="anchor" href="www.google.com">
        Link
      </Button>
    </main>
  );
}

export default App;
