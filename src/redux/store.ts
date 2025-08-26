import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
  },
});

// RootState = type of the whole Redux state
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch = type of dispatch function
export type AppDispatch = typeof store.dispatch;

