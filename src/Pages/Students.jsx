import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StudentCard from "../components/StudentCard";
import Loading from "../components/Loading";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res => {
        setStudents(res.data);
        setLoading(false);
      })
     .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if(loading) return <Loading />;

  return (
    <div>
      <h2>All Students</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
export default Students;