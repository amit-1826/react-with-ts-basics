import { createContext, useContext } from "react";

export type TimerModel = {
  id: number;
  name: string;
  duration: number;
};

export type TimerState = {
  timers: TimerModel[];
  isRunning: boolean;
};

export type TimersContextValue = TimerState & {
  addTimer: (timerData: TimerModel) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersContext = useContext(TimersContext);
  if (!timersContext) {
    throw new Error(
      "useTimersContext must be used within a TimersContextProvider",
    );
  }
  return timersContext;
}
