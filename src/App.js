import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/TodoSlice";

export default function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="input-container">
        <h1>Todo List App</h1>
        <Input />
        <div className="container">
          <div>
            {todoList.map((item) => (
              <ul>
                <li>
                  <TodoItem
                    key={item.id}
                    name={item.item}
                    done={item.done}
                    id={item.id}
                  />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
