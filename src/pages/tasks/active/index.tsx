import React from "react";
import { useSelector } from "react-redux";
import Navbar from "@/components/organisms/navbar";
import TaskCard from "@/components/molecules/taskcard";
import Alert from "@/components/atoms/alert";
import { RootState } from "../../../store/TaskStore";

const ActivePage: React.FC = () => {
  const activeTasks = useSelector((state: RootState) =>
    state.tasks.filter((task) => !task.completed)
  );

  return (
    <>
      <Navbar />
      <div className="bg-primary min-h-screen flex justify-center items-center">
        <div className="bg-white bg-opacity-25 p-8 rounded-lg flex flex-col w-full max-w-screen-lg">
          <main className="flex-grow flex flex-col items-center justify-between p-4 md:p-12">
            {activeTasks.length === 0 && (
              <Alert message="No active tasks found!" />
            )}
            <div className="flex flex-wrap justify-center gap-4">
              {activeTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ActivePage;
