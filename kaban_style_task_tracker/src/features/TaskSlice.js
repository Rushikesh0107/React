import {createSlice } from '@reduxjs/toolkit';

const initialState = {  
    tasks: [
        {
            id: 1,
            title: "Task 1",
            description: "This is a task"
        }
    ]
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action) {
            if(action.payload.title === "") return alert("Please enter a task")
            state.tasks.push(action.payload);
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        editTask(state, action) {
            const {id, title, description} = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if(existingTask) {
                existingTask.title = title;
                existingTask.description = description;
            }
        }
    }
});

export const {addTask, removeTask, editTask} = taskSlice.actions;

export default taskSlice.reducer;