import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px'}}>
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <Link to={`/student/${student.id}`}>View Details</Link>
    </div>
  );
}
export default StudentCard;