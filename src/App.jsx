import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5003/api/students';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // Module 6
  const [error, setError] = useState(null); // Module 7
  const [formData, setFormData] = useState({ name: '', email: '', course: 'CSE', marks: '' });

  // Module 4: Fetch Data on page load
  useEffect(() => {
    fetchStudents();
  }, []);

  // Module 2: Axios GET
  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(API_URL);
      setStudents(res.data.data || []);
    } catch (err) {
      setError('Backend is not running or Network Error'); // Module 7
    } finally {
      setLoading(false);
    }
  };

  // Module 2: Axios POST
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      setFormData({ name: '', email: '', course: 'CSE', marks: '' });
      fetchStudents();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add student');
    }
  };

  // Module 2: Axios DELETE
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    } catch (err) {
      setError('Failed to delete student');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <form onSubmit={handleAddStudent} className="form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <select name="course" value={formData.course} onChange={handleChange}>
          <option>CSE</option><option>ECE</option><option>MECH</option><option>EEE</option>
        </select>
        <input name="marks" type="number" placeholder="Marks" value={formData.marks} onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>

      {error && <p className="error">{error}</p>}

      {/* Module 6: Loading State */}
      {loading ? (
        <p>Loading students...</p>
      ) : (
        students.length === 0 ? (
          <p>No students found. Add one!</p> // Empty State
        ) : (
          <table className="table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Course</th><th>Marks</th><th>Action</th></tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s._id}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.course}</td>
                  <td>{s.marks}</td>
                  <td><button onClick={() => handleDelete(s._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
}
export default App;