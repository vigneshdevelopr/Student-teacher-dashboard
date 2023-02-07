import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Base from "./Base/Base";
import AddStudents from "./component/addstudents";
import AddTeachers from "./component/addteachers";
import EditStudents from "./component/editstudents";
import StudentsList from "./component/studentslist";
import TeachersList from "./component/teacherslist";
import Welcome from "./component/welcome";
import { StudentsData } from "./Data/studentsdata";
import { TeachersData } from "./Data/teachersdata";
import AddingfrPage from "./windowpage/AddingfrPage";

function App() {
  const [studentData, setStudents] = useState(StudentsData);
  const [teachersData, setTeachers] = useState(TeachersData);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/login">
          <StudentsList StudentDatas={studentData} setStudentss={setStudents} />
        </Route>
        <Route path="/loginteach">
          <AddTeachers Teacherslistt={teachersData} setTeacher={setTeachers} />
        </Route>

        <Route path="/loginteacherdata">
          <TeachersList Teacherslistt={teachersData} setTeacher={setTeachers} />
        </Route>

        <Route path="/addstud">
          <AddStudents Studlistt={studentData} setStudent={setStudents} />
        </Route>

        <Route path="/addpagefront">
          <AddingfrPage />
        </Route>
        <Route path="/studedit">
          <EditStudents 
          Studlistt={studentData} setStudent={setStudents}
          />
        </Route>
        <Route path="**">
          <Base 
          title = "you miss your way">

          </Base>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
