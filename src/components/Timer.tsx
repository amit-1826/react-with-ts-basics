import { useEffect, useRef, useState } from "react";
import { useTimersContext, type TimerModel } from "../store/TimerContext";
import Container from "./UI/Container";

export default function Timer({ name, duration }: TimerModel) {
  const timerRef = useRef<number | null>(null);
  const { isRunning } = useTimersContext();
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0) {
    // clearInterval(timerRef.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 100) {
            return 0;
          }
          return prev - 100;
        });
      }, 100);

      timerRef.current = timer;
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <Container as="article">
      <h2>{name}</h2>
      {remainingTime > 0 && (
        <progress value={remainingTime} max={duration * 1000} />
      )}
      <p>{(remainingTime / 1000).toFixed(2)}</p>
    </Container>
  );
}
