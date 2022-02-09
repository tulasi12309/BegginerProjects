import React, { useState } from "react";
import "./TodoList.css";
import Todos from "./Todos";
function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index)=> index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Todo Management Application</h3>
            <form className="form" onSubmit={submitHandler}>
              <input
                type="text"
                className="search"
                value={task}
                onChange={changeHandler}
              />
              <input type="submit" className="add" value="Add" />
            </form>
            <Todos todos={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default TodoList;
