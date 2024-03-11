import React, { useState } from "react";
import TaskCard from "../../../components/molecules/taskcard";
import Navbar from "@/components/organisms/navbar";
import VideoDetails from "@/components/organisms/videoDetails";
import { Task } from "@/components/molecules/taskform";

const DetailsPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Navbar />
      <div className="bg-primary min-h-screen flex justify-center items-center">
        <div className="bg-white bg-opacity-25 p-8 rounded-lg">
          <VideoDetails />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
