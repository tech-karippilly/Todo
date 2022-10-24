import { createSlice } from '@reduxjs/toolkit'


export const todoReducer = createSlice({
    name: 'todos',
    initialState: [
    ],
    reducers: {
        todoAdd: (state, action) => { state.push(action.payload) },
        deleteTodo: (state, action) => {
            return state.filter((i) => i.id != action.payload)
        },
        showTodo: state => { return state }
    }
})


export const { todoAdd, deleteTodo, showTodo } = todoReducer.actions;

export default todoReducer.reducer