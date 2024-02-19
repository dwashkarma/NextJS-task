"use client";

import TodoListComponent from "@/component/TodoListComponent";
import React from "react";

function TodosList({ params }) {
  console.log(params);

  return (
    <div>
      <TodoListComponent id={params.todos} />
    </div>
  );
}

export default TodosList;
