import React from "react";

function TodosList({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Dynamic Todos</h1>
      <p>ID:{params.todos}</p>
     
    </div>
  );
}

export default TodosList;
