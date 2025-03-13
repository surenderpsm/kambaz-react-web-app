import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer.ts";
import accountReducer from "./Account/reducer.ts";
import assignmentReducer from "./Courses/Assignments/reducer.ts";
import enrollmentReducer from "./Courses/People/reducer.ts";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    enrollmentReducer
  },
});
export default store;