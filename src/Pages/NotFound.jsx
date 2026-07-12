import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Return to Home</Link>
    </div>
  )
}
export default NotFound