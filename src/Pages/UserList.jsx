function UserList({ users, onLogout }) {
  return (
    <div style={{padding: '30px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Student List</h1>
        <button onClick={onLogout}>Logout</button>
      </div>
      
      <table border="1" style={{width: '100%', marginTop: '20px'}}>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user => (
            <tr key={user.id}>
              <td>{user.roll}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList