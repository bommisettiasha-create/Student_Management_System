function Register() {
  return (
    <div style={{border: '1px solid gray', padding: '20px', width: '300px', margin: 'auto'}}>
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" style={{display: 'block', width: '100%', margin: '10px 0', padding: '8px'}} />
      <input type="email" placeholder="Email" style={{display: 'block', width: '100%', margin: '10px 0', padding: '8px'}} />
      <input type="password" placeholder="Password" style={{display: 'block', width: '100%', margin: '10px 0', padding: '8px'}} />
      <button style={{padding: '10px 20px', width: '100%'}}>Register</button>
    </div>
  )
}
export default Register