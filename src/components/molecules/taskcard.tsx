import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import ConfirmationModal from "../atoms/confirmationModal"; // Import ConfirmationModal
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskCompletion,
} from "../../store/TaskStore/taskslice";
import { Task } from "./taskform";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [showDescription, setShowDescription] = useState(false); // New state for toggling description

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteTask(task.id));
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
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

  useEffect(() => {
    if (task.dueDate) {
      const currentDate = new Date();
      const dueDate = new Date(task.dueDate);
      const differenceInTime = dueDate.getTime() - currentDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysLeft(differenceInDays);
    }
  }, [task.dueDate]);

  const cardStyle = {
    marginBottom: "1rem",
    width: "200px",
    backgroundColor: getPriorityColor(task.priority),
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    overflowY: "auto" as const, // Correctly typing overflowY
    scrollbarColor: "blue darkblue", // Customizing scrollbar color
  };

  const descriptionStyle = {
    flex: "1",
    overflowY: "auto" as const,
    wordWrap: "break-word" as const, // Typing wordWrap correctly
  };

  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardContent>
        {!showDescription ? (
          <>
            <Typography variant="h6" component="h2" gutterBottom>
              {task.title}
            </Typography>
            <Typography color="textSecondary">
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No due date"}
              {daysLeft !== null && ` (${daysLeft} days left)`}
            </Typography>
            <Typography color="textSecondary">#{task.id}</Typography>
            <Checkbox
              checked={task.completed}
              onChange={handleToggleCompletion}
              color="primary"
              inputProps={{ "aria-label": "completed" }}
            />
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
            <button onClick={() => setShowDescription(true)}>
              Show Description
            </button>{" "}
          </>
        ) : (
          <div style={descriptionStyle}>
            <Typography variant="h6" component="h2" gutterBottom>
              Description
            </Typography>
            <Typography>{task.description}</Typography>
            <button onClick={() => setShowDescription(false)}>
              Hide Description
            </button>{" "}
          </div>
        )}
        {showConfirmation && (
          <ConfirmationModal
            message={`Are you sure you want to delete this task "#${task.id}:${task.title}"?`}
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TaskCard;
