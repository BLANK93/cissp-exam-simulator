import axios from 'axios';

// Create an Axios instance with a base URL and interceptors for authorization
const API = axios.create({
  baseURL: '/api', // Proxy handles routing to http://localhost:5000
});

// Request interceptor to attach the token to every outgoing request
API.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- Auth API ---
// Note: For register and login, we don't use the interceptor initially as they don't require a token
export const registerUser = (userData) => axios.post(`${API.defaults.baseURL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API.defaults.baseURL}/auth/login`, userData);

// --- Exam API ---
export const startExam = (examParams) => API.post('/exam/start', examParams); // Token handled by interceptor
export const submitExam = (examSessionId, userAnswers) =>
  API.post('/exam/submit', { examSessionId, userAnswers }); // Token handled by interceptor
export const getExamResults = (examSessionId) =>
  API.get(`/exam/results/${examSessionId}`); // Token handled by interceptor

// --- Fetch user's exam history ---
export const getExamHistory = () => API.get('/exam/history'); // Token handled by interceptor
export const getUserHistoryAsAdmin = (userId) => API.get(`/admin/users/${userId}/history`); // Token handled by interceptor

// --- Admin API (Question Management) ---
export const addQuestion = (questionData) =>
  API.post('/admin/questions', questionData); // Token handled by interceptor
export const getAllQuestions = () =>
  API.get('/admin/questions'); // Token handled by interceptor
export const updateQuestion = (id, questionData) =>
  API.put(`/admin/questions/${id}`, questionData); // Token handled by interceptor
export const deleteQuestion = (id) =>
  API.delete(`/admin/questions/${id}`); // Token handled by interceptor

// --- User Management API for Admin Panel ---
export const getAllUsers = () => API.get('/admin/users'); // Token handled by interceptor
export const updateUserRole = (id, roleData) => API.put(`/admin/users/${id}/role`, roleData); // roleData should be { role: 'user' | 'admin' }
export const deleteUser = (id) => API.delete(`/admin/users/${id}`); // Token handled by interceptor
export const importQuestions = (questionsArray) => API.post('/admin/questions/import', questionsArray);

// --- Exam Template Management API (Admin only) ---
// <--- ENSURE THESE ARE EXPORTED --->
export const createExamTemplate = (templateData) => API.post('/admin/exam-templates', templateData);
export const getAllExamTemplates = () => API.get('/admin/exam-templates');
export const updateExamTemplate = (id, templateData) => API.put(`/admin/exam-templates/${id}`, templateData);
export const deleteExamTemplate = (id) => API.delete(`/admin/exam-templates/${id}`);
// <--- END EXPORT ENSURANCE --->
// --- NEW: Certification Management API (Admin only) ---
export const createCertification = (certData) => API.post('/admin/certifications', certData);
export const getAllCertifications = () => API.get('/admin/certifications');
export const updateCertification = (id, certData) => API.put(`/admin/certifications/${id}`, certData);
export const deleteCertification = (id) => API.delete(`/admin/certifications/${id}`);
// --- END NEW ---
export default API;