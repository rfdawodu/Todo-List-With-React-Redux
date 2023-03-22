import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/TodoSlice";
import { deleteTodo } from "../features/TodoSlice";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="todo-item">
      <div className="check">
        <input type="checkbox" checked={done} onChange={handleCheck} />
      </div>
      <p className={done ? "done" : ""}>{name}</p>

      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
