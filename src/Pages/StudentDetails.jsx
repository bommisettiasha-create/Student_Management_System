import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then(res => {
        setStudent(res.data);
        setLoading(false);
      })
     .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if(loading) return <Loading />;
  if(!student) return <p>Student not found</p>;

  return (
    <div>
      <Link to="/students">← Back to Students</Link>
      <h2>{student.name}</h2>
      <p><b>Username:</b> {student.username}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Phone:</b> {student.phone}</p>
      <p><b>Website:</b> {student.website}</p>
      <p><b>Company:</b> {student.company?.name}</p>
      <p><b>Address:</b> {student.address?.street}, {student.address?.city}</p>
    </div>
  );
}
export default StudentDetails;