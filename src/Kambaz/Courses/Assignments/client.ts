import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAssignmentsForCourse = async (courseId: string) => {
    try {
        console.log(`Fetching assignments for course ${courseId} from ${COURSES_API}/${courseId}/assignments`);
        const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
        console.log(`Fetched assignments for course ${courseId}:`, data);
        return data;
    } catch (error) {
        console.error("Error fetching assignments for course:", error);
        return [];
    }
};

export const deleteAssignment = async (assignmentId: string) => {
    try {
        console.log(`Deleting assignment ${assignmentId} from ${ASSIGNMENTS_API}/${assignmentId}`);
        await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
        console.log(`Successfully deleted assignment ${assignmentId}`);
        return true;
    } catch (error) {
        console.error("Error deleting assignment:", error);
        return false;
    }
};

export const createNewAssignment = async (assignment: any) => {
    try {
        console.log(`Creating new assignment:`, assignment);
        console.log(`Sending POST request to ${ASSIGNMENTS_API}/create`);
        const { data } = await axios.post(`${ASSIGNMENTS_API}/create`, assignment);
        console.log(`Created assignment:`, data);
        return data;
    } catch (error) {
        console.error("Error creating assignment:", error);
        throw error;
    }
};

export const updateAssignment = async (assignment: any) => {
    try {
        console.log(`Updating assignment ${assignment._id}:`, assignment);
        console.log(`Sending PUT request to ${ASSIGNMENTS_API}/${assignment._id}`);
        await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
        console.log(`Successfully updated assignment ${assignment._id}`);
        return assignment;
    } catch (error) {
        console.error("Error updating assignment:", error);
        throw error;
    }
};

export const fetchAssignments = async () => {
    try {
        console.log(`Fetching all assignments from ${ASSIGNMENTS_API}`);
        const { data } = await axios.get(ASSIGNMENTS_API);
        console.log(`Fetched all assignments:`, data);
        return data;
    } catch (error) {
        console.error("Error fetching assignments:", error);
        return [];
    }
};