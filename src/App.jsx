import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import './App.css'

function App() {
  // Module 1: Login Persistence
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true')
  const [user, setUser] = useState(() => localStorage.getItem('user') || '')

  // Module 2: Theme Persistence
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  // Module 4: Session Storage - Last visited page
  const [activePage, setActivePage] = useState(() => sessionStorage.getItem('lastPage') || 'dashboard')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    sessionStorage.setItem('lastPage', activePage)
  }, [activePage])

  const handleLogin = (username) => {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('user', username)
    setIsLoggedIn(true)
    setUser(username)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUser('')
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className={`app-container ${theme}`}>
      <Navbar title="Student Management System" user={user} onLogout={handleLogout} theme={theme} setTheme={setTheme} />
      <div className="main-layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="content">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'students' && <Students />}
        </main>
      </div>
      <Footer year="2026" />
    </div>
  )
}

export default App