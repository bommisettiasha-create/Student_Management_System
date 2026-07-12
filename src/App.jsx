import { useState } from 'react'
import Login from './components/Login'
import UserList from './components/UserList'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Assignment 2 data - dummy students
  const registeredUsers = [
    { id: 1, name: 'Rahul Kumar', email: 'rahul@test.com', roll: '101' },
    { id: 2, name: 'Priya Sharma', email: 'priya@test.com', roll: '102' },
    { id: 3, name: 'Amit Singh', email: 'amit@test.com', roll: '103' }
  ];

  return (
    <div>
      {isLoggedIn ? (
        <UserList users={registeredUsers} />
      ) : (
        <Login onLoginSuccess={setIsLoggedIn} />
      )}
    </div>
  )
}
export default App