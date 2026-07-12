import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{padding: '15px', background: '#333', color: 'white'}}>
      <Link to="/" style={{color: 'white', marginRight: '15px'}}>Home</Link>
      <Link to="/about" style={{color: 'white', marginRight: '15px'}}>About</Link>
      <Link to="/dashboard" style={{color: 'white', marginRight: '15px'}}>Dashboard</Link>
      <Link to="/login" style={{color: 'white'}}>Login</Link>
    </nav>
  )
}
export default Navbar