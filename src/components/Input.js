import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/TodoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log("Adding todo: ", input);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Input;
