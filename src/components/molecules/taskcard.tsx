import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Task } from "./taskform"; // Import Task interface

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  // Function to get the background color based on priority
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

  // Style object for the card with background color based on priority
  const cardStyle = {
    marginBottom: "1rem",
    width: "200px",
    backgroundColor: getPriorityColor(task.priority), // Set background color based on priority
  };

  return (
    <Card variant="outlined" style={cardStyle}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {task.title}
        </Typography>
        <Typography color="textSecondary">{task.description}</Typography>
        <Typography color="textSecondary">#{task.id}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
