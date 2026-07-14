import Button from './Button'
const Navbar = ({ title, user, onLogout, theme, setTheme }) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div>
        <span>Hi, {user}</span>
        <button className="theme-btn" onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}>
          {theme === 'light'? '🌙 Dark' : '☀️ Light'}
        </button>
        <Button text="Logout" color="#e74c3c" onClick={onLogout} />
      </div>
    </nav>
  )
}
export default Navbar