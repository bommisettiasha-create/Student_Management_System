function Login() {
  return (
    <div style={{border: '1px solid gray', padding: '20px', width: '300px', margin: 'auto'}}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" style={{display: 'block', width: '100%', margin: '10px 0', padding: '8px'}} />
      <input type="password" placeholder="Password" style={{display: 'block', width: '100%', margin: '10px 0', padding: '8px'}} />
      <button style={{padding: '10px 20px', width: '100%'}}>Login</button>
    </div>
  )
}
export default Login