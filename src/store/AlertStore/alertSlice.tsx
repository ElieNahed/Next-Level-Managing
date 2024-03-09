// store/alertSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  show: boolean;
  message: string;
  color: string;
}

const initialState: AlertState = {
  show: false,
  message: "",
  color: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{ message: string; color: string }>
    ) => {
      state.show = true;
      state.message = action.payload.message;
      state.color = action.payload.color;
    },
    hideAlert: (state) => {
      state.show = false;
      state.message = "";
      state.color = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
