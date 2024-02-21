"use client";

import Loading from "@/component/Loading";
import TodoComponent from "@/component/TodoComponent";
import instance from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(true);

  //fetching data using useEffect();

  // useEffect(() => {
  //   try {
  //     const getData = async () => {
  //       const data = await instance.get("todos");
  //       setTodos(data.data.todos);
  //       console.log(data.data);
  //       console.log(data.data.todos);
  //       setLoading(false);
  //     };
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // Fetching data using useQuery...............
  const { data, isLoading, status } = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      console.log(data);
      return instance.get("/todos");
    },
  });

  useEffect(() => {
    if (status == "success") {
      setTodos(data?.data?.todos);
    }
  }, [data]);
  console.log(data?.data);

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
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Loading />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Todos;
