import Button from './Button'
const StudentForm = ({ formData, setFormData, handleSubmit, editId }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{editId? 'Edit Student' : 'Add New Student'}</h3>
      <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value })} />
      <input placeholder="Roll No" value={formData.roll} onChange={e => setFormData({...formData, roll: e.target.value })} />
      <input placeholder="Branch" value={formData.branch} onChange={e => setFormData({...formData, branch: e.target.value })} />
      <input placeholder="CGPA" type="number" step="0.1" value={formData.cgpa} onChange={e => setFormData({...formData, cgpa: e.target.value })} />
      <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value })}>
        <option>Pending</option>
        <option>Placed</option>
      </select>
      <Button text={editId? 'Update Student' : 'Add Student'} color={editId? '#f39c12' : 'green'} />
    </form>
  )
}
export default StudentForm