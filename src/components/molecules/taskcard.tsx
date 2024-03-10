import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete"; // Import delete icon
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/TaskStore/taskslice"; // Import deleteTask action
import { Task } from "./taskform";
interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Dispatch action to delete the task
    dispatch(deleteTask(task.id));
  };

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
        {/* Delete icon button */}
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
