import type { PropsWithChildren } from "react";

export type CourseGoal = {
  title: string;
  id: number;
  onDelete: (id: number) => void;
};

export type CourseGoalProps = PropsWithChildren<CourseGoal>;

export type HeaderProps = PropsWithChildren<{ src: string; alt: string }>;

export type CourseGoalItem = {
  title: string;
  description: string;
  id: number;
};
