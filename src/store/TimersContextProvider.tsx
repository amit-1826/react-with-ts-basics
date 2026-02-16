import { useReducer } from "react";
import {
  TimersContext,
  type TimerModel,
  type TimersContextValue,
  type TimerState,
} from "./TimerContext";

const initialState: TimerState = {
  timers: [],
  isRunning: false,
};

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: TimerModel;
};

type TimerAction = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case "START_TIMERS":
      console.log("Starting timers...");
      return { ...state, isRunning: true };

    case "STOP_TIMERS":
      return { ...state, isRunning: false };

    case "ADD_TIMER":
      return { ...state, timers: [...state.timers, action.payload] };

    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reducerState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: reducerState.timers,
    isRunning: reducerState.isRunning,
    addTimer: (timerData: TimerModel) => {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers: () => {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers: () => {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
