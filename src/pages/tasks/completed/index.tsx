// pages/tasks/completed/index.tsx
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "@/components/organisms/navbar";
import TaskCard from "@/components/molecules/taskcard";
import { RootState } from "../../../store/TaskStore"; // Import RootState as a type

const CompletedPage: React.FC = () => {
  const completedTasks = useSelector((state: RootState) =>
    state.tasks.filter((task) => task.completed)
  );

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex gap-4 flex-wrap">
          {completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </>
  );
};

export default CompletedPage;
