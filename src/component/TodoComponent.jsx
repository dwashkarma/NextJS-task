import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { useRouter } from "next/navigation";

function TodoComponent({ id, todo, completed }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/todos/${id}`);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "20rem",
        }}
      >
        <CardContent>
          <Typography>{id}</Typography>
          <Typography component={"div"}>{todo}</Typography>
          <Typography component={"div"} color={completed ? "green" : "red"}>
            {completed ? "Completed" : "Not Completed"}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonComponent handleClick={() => handleClick(id)} />
        </CardActions>
      </Card>
    </div>
  );
}

export default TodoComponent;
