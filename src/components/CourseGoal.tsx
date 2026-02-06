import type { CourseGoalProps } from "../models/course-goal";

export default function CourseGoal({
  title,
  id,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article className="goal-container">
      <div>
        <h2 className="goal-title">{title}</h2>
        <p className="goal-description">{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
