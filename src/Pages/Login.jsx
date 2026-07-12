import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLoggedIn(true)
    navigate('/dashboard') // Login ayyaka redirect
  }

  return (
    <div style={{width: '300px', margin: 'auto'}}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login