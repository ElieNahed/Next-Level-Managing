// store/TaskStore/taskslice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../components/molecules/taskform';

interface TaskState {
  tasks: Task[];
  idCounter: number;
}

const initialState: TaskState = {
  tasks: [],
  idCounter: 1,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      const newTask = action.payload;
      newTask.id = state.idCounter;
      state.tasks.push(newTask);
      state.idCounter++;
    },
    deleteTask(state, action: PayloadAction<number>) {
      const taskIdToDelete = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskIdToDelete);
    },
    toggleTaskCompletion(state, action: PayloadAction<number>) {
      const taskIdToToggle = action.payload;
      const taskToToggle = state.tasks.find(task => task.id === taskIdToToggle);
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;

export default taskSlice.reducer;
