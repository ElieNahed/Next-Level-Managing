import React from "react";
import { useSelector } from "react-redux";
import Navbar from "@/components/organisms/navbar";
import TaskCard from "@/components/molecules/taskcard";
import Alert from "@/components/atoms/alert";
import { RootState } from "../../../store/TaskStore";

const CompletedPage: React.FC = () => {
  const completedTasks = useSelector((state: RootState) =>
    state.tasks.filter((task) => task.completed)
  );

  return (
    <>
      <Navbar />
      <div className="bg-primary min-h-screen flex justify-center items-center">
        <div className="bg-white bg-opacity-25 p-8 rounded-lg">
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {completedTasks.length === 0 && (
              <Alert message="No completed tasks found!" />
            )}
            <div className="flex gap-4 flex-wrap">
              {completedTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CompletedPage;
