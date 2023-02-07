import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

function AddingfrPage() {
  const history = useHistory();
  return (
    <Base>
      <Button
        id="login-btn"
        onClick={() => history.push("/addstud")}
        variant="contained"
      >
        Add Students
      </Button>
      <br />
      <Button
        id="login-btn"
        onClick={() => history.push("/loginteach")}
        variant="contained"
      >
        Add Teachers
      </Button>
    </Base>
  );
}

export default AddingfrPage;
