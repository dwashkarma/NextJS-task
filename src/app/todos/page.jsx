"use client";

import TodoComponent from "@/component/TodoComponent";
import TodoListComponent from "@/component/TodoListComponent";
import instance from "@/config/axios.config";
import { Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await instance.get("todos");
        setTodos(data.data.todos);
        console.log(data.data.todos);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "45px",
        }}
      >
        Todos
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        {todos.map((i, index) => {
          return (
            <TodoComponent
              key={index}
              id={i.id}
              todo={i.todo}
              completed={i.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
