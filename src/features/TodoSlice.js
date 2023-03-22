import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      const todoItem = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      if (todoItem) {
        todoItem.done = !todoItem.done;
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;

export default TodoSlice.reducer;
