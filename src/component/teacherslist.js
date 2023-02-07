import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Base from "../Base/Base";

function TeachersList({ Teacherslistt, setTeacher }) {
  //Deletestudents
  const deleteData = (dataId) => {
    const deleteDatas = Teacherslistt.filter((students, id) => id !== dataId);
    setTeacher(deleteDatas);
  };

  return (
    <Base>
      <div id="student-card">
        {Teacherslistt.map((datas, id) => (
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
                Qualification:{datas.Qualification}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mobil:{datas.Mobile}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age: {datas.Age}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience: {datas.Experience}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                id:{datas.id}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
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

export default TeachersList;
