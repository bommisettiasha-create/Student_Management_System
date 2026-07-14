// Sidebar.jsx
const Sidebar = ({ activePage, setActivePage }) => (
  <aside className="sidebar">
    <h3>Menu</h3>
    <button className={activePage === 'dashboard'? 'active' : ''} onClick={() => setActivePage('dashboard')}>📊 Dashboard</button>
    <button className={activePage === 'students'? 'active' : ''} onClick={() => setActivePage('students')}>👨‍🎓 Students</button>
  </aside>
)
export default Sidebar

