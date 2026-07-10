import { useState } from 'react'
import Login from './Pages/Login'  // idhi add cheyi
import Register from './pages/Register'  // idhi add cheyi

function App() {
  const [page, setPage] = useState('home')

  return (
    <div style={{textAlign: 'center', padding: '50px', fontFamily: 'Arial'}}>
      <h1>Student Management System</h1>
      
      <div style={{margin: '20px'}}>
        <button onClick={() => setPage('login')} style={{padding: '10px 20px', margin: '10px', cursor: 'pointer'}}>Login</button>
        <button onClick={() => setPage('register')} style={{padding: '10px 20px', margin: '10px', cursor: 'pointer'}}>Register</button>
      </div>

      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
      {page === 'home' && <p>Please Login or Register</p>}
    </div>
  )
}
export default App