import { useParams, useNavigate } from 'react-router-dom'

function Details({ students }) {
  const { id } = useParams() // URL nunchi id tisukovadam
  const navigate = useNavigate()
  const student = students.find(s => s.id == id)

  if(!student) return <h2>Student not found</h2>

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Roll: {student.roll}</p>
      <button onClick={() => navigate(-1)}>Back</button> {/* Back button */}
    </div>
  )
}
export default Details