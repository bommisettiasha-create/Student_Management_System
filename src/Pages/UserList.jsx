{students.map((s) => (
  <div key={s.id} style={{border: "1px solid #ddd", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", margin: "10px", background: "white"}}>
    <h3 style={{color: "#667eea"}}>{s.name}</h3>
    <p>Email: {s.email}</p>
    <p>Roll: {s.roll}</p>
  </div>
))}