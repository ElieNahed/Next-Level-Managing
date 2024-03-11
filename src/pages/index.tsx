import React, { useState } from "react";
import Navbar from "@/components/organisms/navbar";
import TaskForm, { Task } from "@/components/molecules/taskform";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primary min-h-screen flex justify-center items-center">
        <div className="bg-white bg-opacity-25 p-8 rounded-lg">
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center ">
              <TaskForm />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
