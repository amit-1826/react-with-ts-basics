import type { PropsWithChildren } from "react";
import type { CourseGoalItem } from "../models/course-goal";
import CourseGoal from "./CourseGoal";

type CourseGoalItemProp = PropsWithChildren<{
  onDeleteGoal: (id: number) => void;
  goals: CourseGoalItem[];
}>;

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalItemProp) {
  return (
    <ul className="goals-list">
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
              {goal.description}
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
