import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{display: 'flex', gap: '20px', padding: '15px', background: '#333'}}>
      <Link to="/" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Home</Link>
      <Link to="/students" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Students</Link>
    </nav>
  );
}
export default Navbar;