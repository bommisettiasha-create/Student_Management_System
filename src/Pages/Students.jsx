import { useState } from "react";
import StudentForm from "../components/StudentForm";
import UserList from "../components/UserList";

const Students = () => {
  const [refresh, setRefresh] = useState(false);
  const handleStudentAdded = () => setRefresh(!refresh); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System - CRUD</h1>
      <StudentForm onStudentAdded={handleStudentAdded} />
      <UserList key={refresh} onRefresh={refresh} /> 
    </div>
  );
};

export default Students;