import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState('name');
  const [order, setOrder] = useState('asc');

  // FETCH DATA FROM API
  const fetchStudents = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`http://localhost:5000/api/students`, {
        params: { search, page, limit, sort, order }
      });
      setStudents(res.data.students);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      setError('Failed to fetch students. Server down or Network issue.');
    } finally {
      setLoading(false);
    }
  };

  // Re-run when search, page, sort, order changes
  useEffect(() => {
    fetchStudents();
  }, [search, page, sort, order]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Records</h2>

      {/* SEARCH + SORT CONTROLS */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search name, email, course..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          style={{ padding: '8px', width: '300px' }}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="course">Sort by Course</option>
          <option value="createdAt">Sort by Date</option>
        </select>

        <button onClick={() => setOrder(order === 'asc'? 'desc' : 'asc')}>
          {order === 'asc'? '↑ Asc' : '↓ Desc'}
        </button>
      </div>

      {/* LOADING STATE */}
      {loading && <p>Loading students...</p>}

      {/* ERROR STATE */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* EMPTY STATE */}
      {!loading && students.length === 0 && <p>No students found.</p>}

      {/* DATA TABLE */}
      {!loading && students.length > 0 && (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Roll No</th><th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s._id}>
                <td>{s.name}</td><td>{s.email}</td><td>{s.rollNo}</td><td>{s.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* PAGINATION CONTROLS */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}