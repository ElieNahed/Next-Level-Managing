// taskslice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../components/molecules/taskform'; // Import Task interface

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
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
