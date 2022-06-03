import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskData: [
        {
          id: 0,
          name: "Assignement",
          priority: "high",
          deadline:"2022/5/11"
        },
        {
          id: 1,
          name: "House Work",
          priority: "high",
          deadline:"2022/5/11"
        }
      ],
    editTaskId: null
}
const todoSlice = createSlice({
    name: "todoSlice",
    initialState: initialState,
    reducers: {
        setTasksData(state, action) {
            state.taskData = [...state.taskData, action.payload]
        },
        deleteTaskId(state, action) {
            state.taskData = [...state.taskData].filter(el => el.id !== action.payload)
        },
        setEditTaskId(state, action) {
            state.editTaskId = state.taskData[action.payload]
        },
        editTaskId(state, action) {
            state.taskData = [...state.taskData].filter(el => el.id !== action.payload.id)
            state.taskData = [...state.taskData, action.payload]
        }
    }
})
const { actions, reducer } = todoSlice;
export {actions as TodoActions, reducer as TodoReducer}