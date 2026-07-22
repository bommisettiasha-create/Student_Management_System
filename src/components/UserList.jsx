import { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ onRefresh }) => {
  const [students, setStudents] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const fetchStudents = () => {
    setLoading(true);
    axios.get("http://localhost:5000/api/students")
    .then(res => setStudents(res.data || []))
    .catch(err => setStudents([]))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchStudents();
  }, [onRefresh]);

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure to delete?")){
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    }
  };

  const handleEdit = (student) => {
    setEditId(student._id);
    setEditData(student);
  };

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:5000/api/students/${id}`, editData);
    setEditId(null);
    fetchStudents();
  };

  if (loading) return <p>Loading...</p>

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Student List</h2>
      {students.length === 0? <p>No students found. Add one!</p> :
        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead><tr><th>Name</th><th>Email</th><th>Roll No</th><th>Course</th><th>Actions</th></tr></thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                {editId === student._id? (
                  <>
                    <td><input value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} /></td>
                    <td><input value={editData.email} onChange={e => setEditData({...editData, email: e.target.value})} /></td>
                    <td><input value={editData.rollNo} onChange={e => setEditData({...editData, rollNo: e.target.value})} /></td>
                    <td><input value={editData.course} onChange={e => setEditData({...editData, course: e.target.value})} /></td>
                    <td><button onClick={() => handleUpdate(student._id)}>Save</button> <button onClick={() => setEditId(null)}>Cancel</button></td>
                  </>
                ) : (
                  <>
                    <td>{student.name}</td><td>{student.email}</td><td>{student.rollNo}</td><td>{student.course}</td>
                    <td><button onClick={() => handleEdit(student)}>Edit</button> <button onClick={() => handleDelete(student._id)} style={{background: "red", color: "white"}}>Delete</button></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default UserList;