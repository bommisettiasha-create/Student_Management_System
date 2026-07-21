import { useEffect, useState } from 'react';
import API from './api';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get('/')
      .then(res => setStudents(res.data))
      .catch(() => setError("Backend not running or No data in DB"))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <p>Loading...</p>;
  if(error) return <p style={{color:'red'}}>{error}</p>;
  if(students.length === 0) return <p>No students found. Add data in MongoDB first</p>;

  return (
    <div>
      {students.map(s => (
        <div key={s._id} style={{border:'1px solid gray', margin:'10px', padding:'10px', borderRadius:'8px'}}>
          <h3>{s.name}</h3>
          <p>Roll: {s.roll}</p>
          <p>Course: {s.course}</p>
        </div>
      ))}
    </div>
  )
}