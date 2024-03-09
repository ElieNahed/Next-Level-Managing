import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomTextField from "../atoms/textfield";
import CustomButton from "../atoms/button";
import { addTask } from "../../store/TaskStore/taskslice";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  creationDate: Date;
  dueDate: Date;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

interface TaskFormProps {
  // No need to pass addTask as a prop anymore
}

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState<
    "Low" | "Medium" | "High" | "Urgent"
  >("Low");
  const [taskIdCounter, setTaskIdCounter] = useState(0); // State to keep track of task IDs

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      !dueDate ||
      !priority
    ) {
      return;
    }
    const newTask: Task = {
      id: (taskIdCounter + 1).toString(), // Incrementing the task ID
      title: title,
      description: description,
      completed: false,
      creationDate: new Date(),
      dueDate: dueDate,
      priority: priority,
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setPriority("Low");
    setTaskIdCounter(taskIdCounter + 1); // Increment the task ID counter
  };

  const isFormValid =
    title.trim() !== "" && description.trim() !== "" && dueDate && priority;

  const handlePriorityChange = (
    selectedPriority: "Low" | "Medium" | "High" | "Urgent"
  ) => {
    setPriority(selectedPriority);
  };

  const getPriorityColor = (priority: "Low" | "Medium" | "High" | "Urgent") => {
    switch (priority) {
      case "Low":
        return "grey";
      case "Medium":
        return "yellow";
      case "High":
        return "orange";
      case "Urgent":
        return "red";
      default:
        return "grey";
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <CustomTextField
          label="Task title"
          value={title}
          onChange={(value) => setTitle(value)}
          required
        />
        <CustomTextField
          label="Task description"
          value={description}
          onChange={(value) => setDescription(value)}
          required
        />
        <CustomTextField
          type="date"
          label="Due date"
          value={dueDate.toISOString().split("T")[0]}
          onChange={(value) => setDueDate(new Date(value))}
          required
        />
        <div>
          <label
            style={{
              backgroundColor: "grey",
              padding: "5px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            <input
              type="radio"
              value="Low"
              checked={priority === "Low"}
              onChange={() => handlePriorityChange("Low")}
            />
            Low
          </label>
          <label
            style={{
              backgroundColor: "yellow",
              padding: "5px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            <input
              type="radio"
              value="Medium"
              checked={priority === "Medium"}
              onChange={() => handlePriorityChange("Medium")}
            />
            Medium
          </label>
          <label
            style={{
              backgroundColor: "orange",
              padding: "5px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            <input
              type="radio"
              value="High"
              checked={priority === "High"}
              onChange={() => handlePriorityChange("High")}
            />
            High
          </label>
          <label
            style={{
              backgroundColor: "red",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <input
              type="radio"
              value="Urgent"
              checked={priority === "Urgent"}
              onChange={() => handlePriorityChange("Urgent")}
            />
            Urgent
          </label>
        </div>
        <CustomButton text="Add Task" disabled={!isFormValid} />
      </form>
      <div
        style={{
          marginTop: "20px",
          backgroundColor: getPriorityColor(priority),
          width: "100px",
          height: "20px",
        }}
      ></div>
    </div>
  );
};

export default TaskForm;
