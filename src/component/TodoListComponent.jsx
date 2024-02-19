"use client";

import React from "react";
import ButtonComponent from "./ButtonComponent";
import instance from "@/config/axios.config";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

function TodoListComponent({ id }) {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await instance.get("/users");
        console.log(usersData?.data?.users[id]);
        setData(usersData?.data?.users[id]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  const handleClick = () => {
    router.back();
  };
  return (
    <div>
      <ButtonComponent label={"Go Back"} handleClick={handleClick} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "80vh",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: "auto" }}>
          <CardContent sx={{ textAlign: "start", padding: 5 }}>
            <Typography sx={{ marginBottom: "18px" }} variant="h4">
              Details
            </Typography>
            <Divider />
            <Typography sx={{ marginTop: "15px" }}>
              <b> First Name:</b> {data.firstName}
            </Typography>
            <Typography>
              <b>Last Name:</b> {data.lastName}
            </Typography>
            <Typography>
              <b>Age:</b> {data.age}
            </Typography>
            <Typography>
              <b>Gender: </b>
              {data.gender}
            </Typography>
            <Typography>
              <b>Username:</b> {data.username}
            </Typography>
            <Typography>
              <b>Email:</b> {data.email}
            </Typography>
            <Typography>
              <b>Address:</b> {data?.address?.city}
            </Typography>
            <Typography>
              <b>Bank Details:</b> {data?.bank?.cardNumber}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TodoListComponent;
