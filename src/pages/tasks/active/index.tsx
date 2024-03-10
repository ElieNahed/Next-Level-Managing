// pages/tasks/active/index.tsx
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "@/components/organisms/navbar";
import TaskCard from "@/components/molecules/taskcard";
import Alert from "@/components/atoms/alert"; // Import Alert component
import { RootState } from "../../../store/TaskStore"; // Import RootState as a type

const ActivePage: React.FC = () => {
  const activeTasks = useSelector((state: RootState) =>
    state.tasks.filter((task) => !task.completed)
  );

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {activeTasks.length === 0 && <Alert message="No active tasks found!" />}
        <div className="flex gap-4 flex-wrap">
          {activeTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </>
  );
};

export default ActivePage;
