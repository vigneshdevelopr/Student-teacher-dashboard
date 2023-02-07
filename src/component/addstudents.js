import React, { useState } from "react";
import Base from "../Base/Base";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

function AddStudents({ Studlistt, setStudent }) {
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Batch, setBatch] = useState("");
  const [mobile, setMobile] = useState("");
  const [Achievements, setAchievements] = useState("");
  const [Remarks, setRemarks] = useState("");
  const history = useHistory();

  const AddstudData = () => {
    const newData = {
      id,
      avatar,
      name,
      Department,
      Batch,
      mobile,
      Achievements,
      Remarks,
    };
    console.log(newData);

    setStudent([...Studlistt, newData]);
    history.push("/login");
  };

  return (
    <Base>
      <div className="addform">
        <div className="input-section">
          <Box
            id="addstud-sec"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                onChange={(event) => setId(event.target.value)}
                value={id}
                label="Enter Id"
              />
              <TextField
                required
                id="outlined-required"
                onChange={(event) => setAvatar(event.target.value)}
                value={avatar}
                label="Enter Avatar url"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setName(event.target.value)}
                value={name}
                label="Enter Name"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setDepartment(event.target.value)}
                value={Department}
                label="Enter department"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setBatch(event.target.value)}
                value={Batch}
                label="Enter Batch"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setMobile(event.target.value)}
                value={mobile}
                label="Enter Mobile number"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setAchievements(event.target.value)}
                value={Achievements}
                label="Enter Achievements"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setRemarks(event.target.value)}
                value={Remarks}
                label="Remarks"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                id="btn-section"
                onClick={AddstudData}
                variant="contained"
              >
                Add Student
              </Button>

              {/* {showUpdate ?
              <Button
                onClick={updateProduct}
                variant="contained"
                color="success"
              >
                Update Product
              </Button>
              : ""} */}
            </div>
          </Box>
        </div>
      </div>
    </Base>
  );
}

export default AddStudents;
