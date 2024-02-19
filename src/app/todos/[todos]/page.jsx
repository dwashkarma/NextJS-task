"use client";

import instance from "@/config/axios.config";
import React, { useEffect, useState } from "react";

function TodosList({ params }) {
  const [data, setData] = useState([]);
  console.log(params);
  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await instance.get("/users");
        console.log(usersData?.data?.users[params.todos]);
        setData(usersData?.data?.users[params.todos]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params]);
  return (
    <div>
      <h1>Dynamic Todos</h1>
      <p>ID:{data.id}</p>
      <p>FirstName:{data.firstName}</p>
      <p>LastName:{data.lastName}</p>
    </div>
  );
}

export default TodosList;
