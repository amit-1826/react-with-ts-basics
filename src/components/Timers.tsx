import { useTimersContext } from "../store/TimerContext";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul className="timers-list">
      {timers.map((timer) => {
        return (
          <li key={timer.id}>
            <Timer {...timer}></Timer>
          </li>
        );
      })}
    </ul>
  );
}
