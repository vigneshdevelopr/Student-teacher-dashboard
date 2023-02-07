import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

function AddTeachers({ Teacherslistt, setTeacher }) {
  const [id1, setId1] = useState("");
  const [avatar1, setAvatar1] = useState("");
  const [name1, setName1] = useState("");
  const [Department1, setDepartment1] = useState("");
  const [Qualification1, setQualification1] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [age1, setAge1] = useState("");
  const [Experience1, setExperience1] = useState("");
  const history = useHistory();

  const AddTeachersData = () => {
    const newData1 = {
      id1,
      avatar1,
      name1,
      Department1,
      Qualification1,
      mobile1,
      age1,
      Experience1,
    };
    console.log(newData1);

    setTeacher([...Teacherslistt, newData1]);
    history.push("/loginteacherdata");
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
                onChange={(event) => setId1(event.target.value)}
                value={id1}
                label="Enter Id"
              />
              <TextField
                required
                id="outlined-required"
                onChange={(event) => setAvatar1(event.target.value)}
                value={avatar1}
                label="Enter Avatar url"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setName1(event.target.value)}
                value={name1}
                label="Enter Name"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setDepartment1(event.target.value)}
                value={Department1}
                label="Enter department"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setQualification1(event.target.value)}
                value={Qualification1}
                label="Enter Qualification"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setMobile1(event.target.value)}
                value={mobile1}
                label="Enter Mobile number"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setAge1(event.target.value)}
                value={age1}
                label="Enter your age"
              />
              <TextField
                required
                id="outlined"
                onChange={(event) => setExperience1(event.target.value)}
                value={Experience1}
                label="Enter Experience"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                id="btn-section"
                onClick={AddTeachersData}
                variant="contained"
              >
                Add Teachers
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

export default AddTeachers;
