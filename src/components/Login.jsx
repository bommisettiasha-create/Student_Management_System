import { useState } from "react";

function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div style={{maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"}}>
      <h2 style={{color: "#667eea", textAlign: "center"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc"}}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc"}}
          required
        />
        <button style={{background: "linear-gradient(90deg, #667eea, #764ba2)", color: "white", padding: "12px", border: "none", borderRadius: "8px", width: "100%", fontSize: "16px", cursor: "pointer"}}>
          Login
        </button>
      </form>
      <p style={{textAlign: "center", marginTop: "15px"}}>
        Account ledu? <span onClick={onSwitch} style={{color: "#667eea", cursor: "pointer"}}>Register</span>
      </p>
    </div>
  );
}
export default Login;