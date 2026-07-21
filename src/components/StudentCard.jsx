import axios from "axios";

function StudentCard({ student, onDelete }) {
  
  const handleDelete = async () => {
    if(window.confirm("Are you sure to delete?")){
      try {
        await axios.delete(`http://localhost:5002/api/students/${student.id}`);
        alert("Deleted Successfully!");
        onDelete(); // list refresh
      } catch (error) {
        alert("Error deleting");
      }
    }
  };

  return (
    <div style={{border: "1px solid #ddd", padding: "15px", marginBottom: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between"}}>
      <div>
        <h3>{student.name}</h3>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Roll:</b> {student.roll}</p>
        <p><b>Course:</b> {student.course}</p>
      </div>
      <button 
        onClick={handleDelete}
        style={{padding: "8px 15px", background: "red", color: "white", border: "none", borderRadius: "4px", height: "40px"}}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;