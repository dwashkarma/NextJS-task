import { Button } from "@mui/material";
import React from "react";

function ButtonComponent({handleClick}) {
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
}

export default ButtonComponent;
