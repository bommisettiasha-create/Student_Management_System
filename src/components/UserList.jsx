import EmptyState from './EmptyState';

function UserList({ users }) {
  if (users.length === 0) {
    return <EmptyState />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{textAlign: 'center'}}>Registered Students</h2>

      <h3>Card View</h3>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {users.map((user) => (
          <div key={user.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>Roll: {user.roll}</p>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '30px' }}>Table View</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{background: '#f2f2f2'}}>
            <th>ID</th><th>Name</th><th>Email</th><th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;