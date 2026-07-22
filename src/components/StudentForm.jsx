import { useState } from "react";
import axios from "axios";

const StudentForm = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({ name: "", email: "", rollNo: "", course: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/students", formData);
    setFormData({ name: "", email: "", rollNo: "", course: "" });
    onStudentAdded(); // list refresh kosam
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} required />
      <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;