    import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
export const getStudents = (params) => API.get('/students', { params });
export const addStudent = (data) => API.post('/students', data);