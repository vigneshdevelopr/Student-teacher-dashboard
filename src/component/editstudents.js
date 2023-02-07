import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Box, TextField } from "@mui/material";
import Base from "../Base/Base";
import { StudentsData } from "../Data/studentsdata";

function EditStudents({Studlistt, setStudent}) {
const[editID, setEditID]=useState("")
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Batch, setBatch] = useState("");
  const [mobile, setMobile] = useState("");
  const [Achievements, setAchievements] = useState("");
  const [Remarks, setRemarks] = useState("");



  //select the need update student.

  const editandselectstud = (idx) => {
    const selectstudent = Studlistt.find((datas) => datas.id === idx);

    console.log(selectstudent);
  };

  return (
    <div>
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
                  onChange={(event) => console.log(event.target.value)}
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
                <Button id="btn-section" variant="contained">
                  Update Student
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default EditStudents;
