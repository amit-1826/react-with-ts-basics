import Button from "./UI/Button";
import { useTimersContext } from "../store/TimerContext";

export default function Header() {
  // const timersContext = useContext(TimersContext);
  const timersContext = useTimersContext();
  console.log("Header render", timersContext);

  return (
    <header className="header">
      <h1>React Timer</h1>
      <Button
        el="button"
        onClick={
          timersContext.isRunning
            ? timersContext.stopTimers
            : timersContext.startTimers
        }
      >
        {timersContext.isRunning ? "Stop" : "Start"} All Timers
      </Button>
    </header>
  );
}
