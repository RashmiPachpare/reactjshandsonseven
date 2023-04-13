import { createSlice } from "@reduxjs/toolkit";
import Student from '../Data.jsx'

export const StudentSlice = createSlice({
    name: 'StudentData',
    initialState: Student,
    reducers: {
        studentAdded: (state, action) => {
            state.push(action.payload);
        },
        studentUpdated: (state, action) => {

            const { id, Name, Age, Course, Batch } = action.payload;

            const existingStudent = state.find(student => student.id == id);
            existingStudent.Name = Name;
            existingStudent.Age = Age;
            existingStudent.Course = Course;
            existingStudent.Batch = Batch;
        }

    }
})

export const { studentAdded, studentUpdated } = StudentSlice.actions

export default StudentSlice.reducer;
