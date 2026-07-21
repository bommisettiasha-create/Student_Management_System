   import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Students from './Pages/Students'
import StudentForm from './components/StudentForm'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{padding: '20px', textAlign: 'center'}}>
        <h1>Student Management System</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/add"><button style={{marginLeft: '10px'}}>Add Student</button></Link>
        <hr />
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/add" element={<StudentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}