import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentList from './StudentList';

function App() {
  return (
    <BrowserRouter>
      <div style={{padding: '20px', fontFamily: 'Arial'}}>
        <h1>Student Management System</h1>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<StudentList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;