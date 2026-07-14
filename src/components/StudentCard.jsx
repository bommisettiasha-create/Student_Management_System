import Button from './Button'
const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p><b>Roll:</b> {student.roll}</p>
      <p><b>Branch:</b> {student.branch}</p>
      <p><b>CGPA:</b> {student.cgpa}</p>
      <p><b>Status:</b> <span className={student.status === 'Placed'? 'placed' : 'pending'}>{student.status}</span></p>
      <div className="card-actions">
        <Button text="Edit" color="#3498db" onClick={() => onEdit(student)} />
        <Button text="Delete" color="#e74c3c" onClick={() => onDelete(student.id)} />
      </div>
    </div>
  )
}
export default StudentCard