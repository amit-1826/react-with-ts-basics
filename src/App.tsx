import Header from "./components/Header";
import logoImg from "./assets/goals.jpeg";
import { useState } from "react";
import type { CourseGoalItem } from "./models/course-goal";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import InfoBox from "./components/InfoBox";

function App() {
  const [goals, setGoals] = useState<CourseGoalItem[]>([]);

  function addGoalHandler(goal: string, summary: string) {
    const newGoal: CourseGoalItem = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header src={logoImg} alt="Course Goals Logo">
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal addGoal={addGoalHandler}></NewGoal>

      {goals.length === 0 && (
        <InfoBox mode="info">
          No goals yet. Add some goals to get started!
        </InfoBox>
      )}

      {goals.length > 0 && (
        <>
          {goals.length >= 3 && (
            <InfoBox mode="warning" severity="medium">
              You have {goals.length} goal{goals.length > 1 ? "s" : ""}. Don't
              forget to work on them first!
            </InfoBox>
          )}

          <CourseGoalList
            onDeleteGoal={deleteGoalHandler}
            goals={goals}
          ></CourseGoalList>
        </>
      )}
    </main>
  );
}

export default App;
