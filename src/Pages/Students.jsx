import { useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import StudentForm from '../components/StudentForm'
import StudentCard from '../components/StudentCard'
import ConfirmDialog from '../components/ConfirmDialog'
import Button from '../components/Button'

const Students = () => {
  // Module 3: Local Storage Data Management
  const [students, setStudents] = useLocalStorage('students', [
    { id: 1, name: "Ravi Kumar", roll: "22CS001", branch: "CSE", cgpa: 8.5, status: "Placed" },
    { id: 2, name: "Sita Devi", roll: "22IT002", branch: "IT", cgpa: 9.1, status: "Pending" }
  ])

  const [formData, setFormData] = useState({ name: '', roll: '', branch: '', cgpa: '', status: 'Pending' })
  const [editId, setEditId] = useState(null)
  const [showDialog, setShowDialog] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [lastDeleted, setLastDeleted] = useState(null) // Bonus 2: Undo Delete
  const [search, setSearch] = useState('') // Bonus 1: Search

  // Bonus 6: Auto Save Draft in Session Storage
  useEffect(() => {
    const draft = sessionStorage.getItem('studentDraft')
    if (draft) setFormData(JSON.parse(draft))
  }, [])

  useEffect(() => {
    sessionStorage.setItem('studentDraft', JSON.stringify(formData))
  }, [formData])

  // Module 5: Add Record
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name ||!formData.roll ||!formData.branch ||!formData.cgpa) {
      return alert("Please fill all fields")
    }

    if (editId) {
      // Module 6: Update Record
      setStudents(students.map(s => s.id === editId? {...formData, id: editId } : s))
      setEditId(null)
    } else {
      setStudents([...students, {...formData, id: Date.now() }])
    }
    setFormData({ name: '', roll: '', branch: '', cgpa: '', status: 'Pending' })
    sessionStorage.removeItem('studentDraft')
  }

  const handleEdit = (student) => {
    setFormData(student)
    setEditId(student.id)
  }

  // Module 7: Delete Record
  const handleDelete = (id) => {
    const studentToDelete = students.find(s => s.id === id)
    setLastDeleted(studentToDelete) // for undo
    setDeleteId(id)
    setShowDialog(true)
  }

  const confirmDelete = () => {
    setStudents(students.filter(s => s.id!== deleteId))
    setShowDialog(false)
  }

  // Bonus 2: Undo Delete
  const handleUndo = () => {
    if (lastDeleted) {
      setStudents([...students, lastDeleted])
      setLastDeleted(null)
    }
  }

  // Bonus 1: Search & Filter
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.roll.toLowerCase().includes(search.toLowerCase()) ||
    s.branch.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Students Management</h1>

      <input
        type="text"
        placeholder="Search by Name, Roll, Branch..."
        className="search-bar"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <StudentForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} editId={editId} />

      {lastDeleted && <Button text="Undo Delete" color="orange" onClick={handleUndo} />}

      <div className="card-grid">
        {filteredStudents.map(s => (
          <StudentCard key={s.id} student={s} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>

      {showDialog && <ConfirmDialog message="Delete this student?" onConfirm={confirmDelete} onCancel={() => setShowDialog(false)} />}
    </div>
  )
}
export default Students