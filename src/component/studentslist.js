import React, { useState } from "react";
import { StudentsData } from "../Data/studentsdata";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

function StudentsList({ StudentDatas, setStudentss }) {
  const history = useHistory();
  const[editID, setEditID]= useState();

  //Deletestudents
  const deleteData = (dataId) => {
    const deleteDatas = StudentDatas.filter((students, id) => id !== dataId);
    setStudentss(deleteDatas);
  };

  //select the students

  const editandselectstud = (idx) => {
    const selectstud = StudentDatas.find((datas) => datas.id === idx);

    console.log(selectstud);
  };

  

  return (
    <Base>
      <div id="student-card">
        {StudentDatas.map((datas, id) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={datas.avatar}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {datas.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department:{datas.Department}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch:{datas.Batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mobile:{datas.Mobile}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Achievements:{datas.Achievements}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Remarks:{datas.Remarks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                id:{datas.id}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => editandselectstud(datas.id)}>
                Edit
              </Button>
              <Button size="small" onClick={() => deleteData(id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Base>
  );
}

export default StudentsList;
