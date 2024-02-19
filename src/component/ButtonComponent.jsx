import { Button } from "@mui/material";
import React from "react";

function ButtonComponent({ handleClick ,label}) {
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
}

export default ButtonComponent;
