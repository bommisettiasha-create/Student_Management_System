function UserList({ students, onLogout }) {
  return (
    <div style={{padding: "20px"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1 style={{color: "#667eea"}}>Student Management System</h1>
        <button onClick={onLogout} style={{padding: "8px 15px", background: "#ff4b5c", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"}}>Logout</button>
      </div>

      <h2>Card View</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "15px"}}>
        {students.map((s) => (
          <div key={s.id} style={{border: "1px solid #ddd", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)"}}>
            <h3>{s.name}</h3>
            <p>Email: {s.email}</p>
            <p>Roll: {s.roll}</p>
          </div>
        ))}
      </div>

      <h2 style={{marginTop: "30px"}}>Table View</h2>
      <table style={{width: "100%", borderCollapse: "collapse", marginTop: "10px"}}>
        <thead style={{background: "#667eea", color: "white"}}>
          <tr>
            <th style={{padding: "10px", border: "1px solid #ddd"}}>ID</th>
            <th style={{padding: "10px", border: "1px solid #ddd"}}>Name</th>
            <th style={{padding: "10px", border: "1px solid #ddd"}}>Email</th>
            <th style={{padding: "10px", border: "1px solid #ddd"}}>Roll</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td style={{padding: "10px", border: "1px solid #ddd"}}>{s.id}</td>
              <td style={{padding: "10px", border: "1px solid #ddd"}}>{s.name}</td>
              <td style={{padding: "10px", border: "1px solid #ddd"}}>{s.email}</td>
              <td style={{padding: "10px", border: "1px solid #ddd"}}>{s.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;