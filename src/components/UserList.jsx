import { useEffect, useState } from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';

function UserList() {
  const [students, setStudents] = useState([]); // [] empty array tho start chey
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5003/api/students");
      setStudents(res.data); // backend res.data lo array pampali
    } catch (error) {
      console.log(error);
      setStudents([]); // error vachina kuda [] pettu
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        students.map(student => ( // ippudu crash avvadhu
          <StudentCard key={student._id} student={student} />
        ))
      )}
    </div>
  )
}

export default UserList