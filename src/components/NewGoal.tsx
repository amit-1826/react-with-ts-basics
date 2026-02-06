import { useRef, type FormEvent } from "react";

type AddGoalProp = {
  addGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ addGoal }: AddGoalProp) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentGoal = goal.current!.value;
    const currentSummary = goal.current!.value;

    event.currentTarget.reset();

    if (!!currentGoal && !!currentSummary) {
      addGoal(currentGoal, currentSummary);
    }
  }

  return (
    <form className="goal-form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" required ref={goal} />
      </p>

      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" required ref={summary} />
      </p>

      <p className="goal-form-button">
        <button>Add Goal</button>
      </p>
    </form>
  );
}
