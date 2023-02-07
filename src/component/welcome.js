import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import image from "../image/image.jpg";

function Welcome() {
  const history = useHistory();
  return (
    <Base
      title="Welcome to ABC College Students and Teachers Database"
      description="kindly Click the below button to login"
    >
      <br />
      <Button
        id="login-btn"
        onClick={() => history.push("/login")}
        variant="contained"
      >
        Login to Students DataBase
      </Button>
      <br />
      <Button
        id="login-btn"
        onClick={() => history.push("/loginteacherdata")}
        variant="contained"
      >
        Login to Teachers DataBase
      </Button>
    </Base>
  );
}

export default Welcome;
