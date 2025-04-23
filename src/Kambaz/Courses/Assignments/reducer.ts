import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    unlock: string;
    due: string;
    points: string | number;
}

interface AssignmentState {
    assignments: Assignment[];
    assignment: Assignment;
}

const initialState: AssignmentState = {
    assignments: [],
    assignment: {
        _id: "",
        title: "",
        course: "",
        description: "",
        unlock: "",
        due: "",
        points: 0
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [...state.assignments, action.payload];
            
            state.assignment = {
                _id: "",
                title: "",
                course: "",
                description: "",
                unlock: "",
                due: "",
                points: 0
            }
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (a) => a._id !== action.payload
            );
        },
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a
            );
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        }
    },
});

export const { addAssignment, deleteAssignment, setAssignment, setAssignments, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;