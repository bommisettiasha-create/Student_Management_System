import { useState } from "react";
import axios from "axios";

function StudentForm({ onStudentAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", formData);
      alert("Student Added Successfully! ✅");
      setFormData({name: "", email: "", roll: "", course: ""});
      onStudentAdded(); // list refresh cheyadaniki
    } catch (error) {
      alert("Error adding student ❌");
      console.log(error);
    }
  };

  return (
    <div style={{border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginBottom: "20px"}}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          value={formData.name}
          onChange={handleChange} 
          required
          style={{width: "100%", padding: "8px", marginBottom: "10px"}}
        />
        
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange} 
          required
          style={{width: "100%", padding: "8px", marginBottom: "10px"}}
        />
        
        <input 
          type="text" 
          name="roll"
          placeholder="Roll No" 
          value={formData.roll}
          onChange={handleChange} 
          required
          style={{width: "100%", padding: "8px", marginBottom: "10px"}}
        />
        
        <input 
          type="text" 
          name="course"
          placeholder="Course" 
          value={formData.course}
          onChange={handleChange} 
          required
          style={{width: "100%", padding: "8px", marginBottom: "10px"}}
        />
        
        <button type="submit" style={{padding: "10px 20px", background: "#4CAF50", color: "white", border: "none", borderRadius: "4px"}}>
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;