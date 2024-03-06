import React, { useState } from "react";
// input data handling

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, settodoList] = useState([]);
  const handleinput = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    settodoList([...todoList, todo]);
    setTodo("");
  };
  // deletehandler

  const deletehandler = (index) => {
    const afterdel = todoList.filter((_, i) => {
      return i !== index;
    });
    console.log(afterdel);
    settodoList(afterdel);
  };

  return (
    <div>
      <div className="card w-100">
        <div className="card-body">
          <input
            type="text"
            className="w-25 p-2"
            name="todos"
            id="todo"
            onChange={handleinput}
            value={todo}
          />
          &nbsp; &nbsp;
          <button className="btn btn-success" onClick={handleSubmit}>
            add
          </button>
        </div>
      </div>
      <div className="listitems">
        {todoList.map((eachitem, index) => {
          return (
            <div
              className="card-body w-25 d-flex justify-content-between mx-auto m-3
               "
              style={{ boxShadow: "2px 3px 4px grey" }}
              key={index}
            >
              <h5>{eachitem}</h5>
              <button
                className="btn btn-danger"
                onClick={() => deletehandler(index)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
