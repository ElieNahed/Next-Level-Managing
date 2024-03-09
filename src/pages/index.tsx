import React, { useState } from "react";
import Navbar from "@/components/organisms/navbar";
import TaskForm, { Task } from "@/components/molecules/taskform";
import { useDispatch, useSelector } from "react-redux";
import { showAlert, hideAlert } from "../store/AlertStore/alertSlice";
import Alert from "../components/atoms/Alert"; // Import the Alert component

const Home = () => {
  const dispatch = useDispatch();
  const { show, message, color } = useSelector((state: any) => state.alert);

  const handleShowAlert = () => {
    dispatch(
      showAlert({ message: "This is a custom message!", color: "#068FFF" })
    );
  };

  const handleCloseAlert = () => {
    dispatch(hideAlert());
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Render the Alert component conditionally */}
        {show && (
          <Alert text={message} color={color} onClose={handleCloseAlert} />
        )}
        <div className="relative flex place-items-center ">
          <TaskForm />
        </div>
        <button onClick={handleShowAlert}>Show Alert</button>
      </main>
    </>
  );
};

export default Home;
