"use client";

import React from "react";
import ButtonComponent from "./ButtonComponent";
import instance from "@/config/axios.config";
import { useEffect, useState } from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { useMutation } from "@tanstack/react-query";
// import useApi from "@/hook/useApi";

function TodoListComponent({ id }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //Calling  Custom Hooks.............
  // const { data } = useApi(id, "/users");

  //fetching data using UseEffect();.............
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const usersData = await instance.get("/users");
  //       console.log(usersData?.data?.users[id]);
  //       setData(usersData?.data?.users[id]);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [id]);
  // console.log("data", data);

  //fetching data using useMutate();
  const { data, mutate } = useMutation({
    mutationFn: () => {
      console.log(data);
      return instance.get(`/users/${id}`);
    },
    onSuccess: (data) => {
      console.log(data?.data);
      setUser(data?.data);
      setLoading(false);
    },
  });

  const handleClick = () => {
    router.back();
  };
  return (
    <>
      <div>
        <ButtonComponent label={"Go Back"} handleClick={handleClick} />
        <div style={{ textAlign: "center" }}>
          <button onClick={() => mutate()}>Fetch data</button>
        </div>
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "10rem" }}>
            <Loading />
          </div>
        ) : (
          <div>
            <h1 style={{ textAlign: "center", color: "green" }}>
              User Details
            </h1>
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
                    <b> First Name:</b> {user.firstName}
                  </Typography>
                  <Typography>
                    <b>Last Name:</b> {user.lastName}
                  </Typography>
                  <Typography>
                    <b>Age:</b> {user.age}
                  </Typography>
                  <Typography>
                    <b>Gender: </b>
                    {user.gender}
                  </Typography>
                  <Typography>
                    <b>Username:</b> {user.username}
                  </Typography>
                  <Typography>
                    <b>Email:</b> {user.email}
                  </Typography>
                  <Typography>
                    <b>Address:</b> {user?.address?.city}
                  </Typography>
                  <Typography>
                    <b>Bank Details:</b> {user?.bank?.cardNumber}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoListComponent;
