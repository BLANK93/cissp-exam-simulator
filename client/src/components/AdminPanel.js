import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo for pagination
import { useNavigate } from 'react-router-dom';
import {
  addQuestion,
  getAllQuestions,
  updateQuestion,
  deleteQuestion,
  getAllUsers,
  updateUserRole,
  deleteUser,
  importQuestions,
  createExamTemplate,
  getAllExamTemplates,
  updateExamTemplate,
  deleteExamTemplate,
  createCertification,
  getAllCertifications,
  updateCertification,
  deleteCertification
} from '../api/examAPI';

// Initial state for a new question, reflecting the schema changes
const initialQuestionState = {
  text: '',
  options: ['', '', '', ''],
  correctAnswer: [],
  explanation: '',
  domain: 'Security and Risk Management',
  certification: 'CISSP', // Default certification
  difficulty: 'Medium',
  questionType: 'single-choice',
  isActive: true,
};

// Initial state for a new exam template
const initialExamTemplateState = {
  name: '',
  description: '',
  numQuestions: 20,
  durationMs: 30 * 60 * 1000, // 30 mins in ms
  isWeighted: true,
  certification: 'CISSP'
};

// Initial state for a new certification
const initialCertificationState = {
  name: '',
  description: ''
};

// Define the CISSP Domains explicitly for the frontend dropdown
const CISSP_DOMAINS = [
  'Security and Risk Management',
  'Asset Security',
  'Security Architecture and Engineering',
  'Communication and Network Security',
  'Identity and Access Management',
  'Security Assessment and Testing',
  'Security Operations',
  'Software Development Security',
];

// Define Difficulty Levels
const DIFFICULTY_LEVELS = ['All', 'Easy', 'Medium', 'Hard'];

// Define Question Types
const QUESTION_TYPES = ['All', 'single-choice', 'multi-response'];

// Define Questions Per Page Options
const QUESTIONS_PER_PAGE_OPTIONS = [10, 20, 50, 100];

// This list is fetched dynamically now.
// const AVAILABLE_CERTIFICATIONS = ['All', 'CISSP', 'CISM', 'CompTIA Security+'];


function AdminPanel({ user }) {
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);
  const [examTemplates, setExamTemplates] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestionState);
  const [currentTemplate, setCurrentTemplate] = useState(initialExamTemplateState);
  const [currentCertification, setCurrentCertification] = useState(initialCertificationState);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingTemplate, setIsEditingTemplate] = useState(false);
  const [isEditingCertification, setIsEditingCertification] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('questions');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddTemplateForm, setShowAddTemplateForm] = useState(false);
  const [showAddCertificationForm, setShowAddCertificationForm] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importJson, setImportJson] = useState(''); // State for textarea content (or file content)
  const [importFile, setImportFile] = useState(null); // <--- NEW STATE FOR SELECTED FILE
  const navigate = useNavigate();

  // State for filtering and search (questions)
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDomain, setFilterDomain] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterActive, setFilterActive] = useState('All');
  const [filterCertification, setFilterCertification] = useState('All');

  // State for pagination (questions)
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(QUESTIONS_PER_PAGE_OPTIONS[0]);

  useEffect(() => {
    fetchQuestions();
    fetchUsers();
    fetchExamTemplates();
    fetchCertifications();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await getAllQuestions();
      setQuestions(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch questions.');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch users.');
    }
  };

  const fetchExamTemplates = async () => {
    try {
      const response = await getAllExamTemplates();
      setExamTemplates(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch exam templates.');
    }
  };

  const fetchCertifications = async () => {
    try {
      const response = await getAllCertifications();
      setCertifications(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch certifications.');
    }
  };

  // Handlers for Question Management Form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentQuestion(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = e.target.value;
    setCurrentQuestion(prevState => ({
      ...prevState,
      options: newOptions
    }));
  };

  const handleCorrectAnswerSelection = (e) => {
    const { value, checked } = e.target;
    if (currentQuestion.questionType === 'single-choice') {
      setCurrentQuestion(prev => ({ ...prev, correctAnswer: [value] }));
    } else { // 'multi-response'
      setCurrentQuestion(prev => ({
        ...prev,
        correctAnswer: checked ? [...prev.correctAnswer, value] : prev.correctAnswer.filter(ans => ans !== value)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const filledOptions = currentQuestion.options.filter(opt => opt.trim() !== '');
    if (filledOptions.length < 2) { setError('Please provide at least two options.'); return; }
    if (currentQuestion.correctAnswer.length === 0) { setError('Please select at least one correct answer.'); return; }
    if (currentQuestion.questionType === 'single-choice' && currentQuestion.correctAnswer.length !== 1) { setError('Single-choice questions must have exactly one correct answer selected.'); return; }

    try {
      if (isEditing) {
        await updateQuestion(currentQuestion._id, currentQuestion);
        setMessage('Question updated successfully!');
      } else {
        await addQuestion(currentQuestion);
        setMessage('Question added successfully!');
      }
      handleClearForm();
      fetchQuestions();
      setCurrentPage(1);
      setShowAddForm(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed.');
    }
  };

  const handleEdit = (question) => {
    setCurrentQuestion({
      ...question, options: question.options || ['', '', '', ''],
      correctAnswer: question.correctAnswer || [],
      questionType: question.questionType || 'single-choice',
      certification: question.certification || 'CISSP',
    });
    setIsEditing(true);
    setMessage('');
    setError('');
    setActiveTab('questions');
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this question?')) { return; }
    setMessage(''); setError('');
    try {
      await deleteQuestion(id);
      setMessage('Question deleted successfully!');
      fetchQuestions();
      setCurrentPage(1);
    } catch (err) {
      setError(err.response?.data?.message || 'Deletion failed.');
    }
  };

  const handleClearForm = () => {
    setCurrentQuestion(initialQuestionState);
    setIsEditing(false);
    setMessage('');
    setError('');
    setShowAddForm(false);
  };

  // Handlers for User Management
  const handleRoleChange = async (userId, newRole) => {
    if (!window.confirm(`Are you sure you want to change this user's role to ${newRole}?`)) { return; }
    setMessage(''); setError('');
    try {
      await updateUserRole(userId, { role: newRole });
      setMessage(`User role updated to ${newRole} successfully!`);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user role.');
    }
  };

  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Are you sure you want to delete user "${username}"? This action cannot be undone.`)) { return; }
    setMessage(''); setError('');
    try {
      await deleteUser(userId);
      setMessage(`User "${username}" deleted successfully!`);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete user.');
    }
  };

  // Handlers for Question Import Modal
  const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          setImportFile(file);
          const reader = new FileReader();
          reader.onload = (event) => { setImportJson(event.target.result); };
          reader.onerror = (event) => { setError('Failed to read file: ' + event.target.error.message); setImportFile(null); setImportJson(''); };
          reader.readAsText(file);
      } else {
          setImportFile(null); setImportJson('');
      }
  };

  const handleImportSubmit = async () => {
      setMessage(''); setError('');
      const dataToParse = importJson; 
      if (!dataToParse.trim()) { setError('Import failed: Please provide JSON content or select a file.'); return; }
      try {
          const parsedJson = JSON.parse(dataToParse);
          if (!Array.isArray(parsedJson)) { setError('Import failed: The provided content is not a valid JSON array.'); return; }
          const response = await importQuestions(parsedJson);
          setMessage(response.data.message);
          setError(response.data.details.errors.length > 0 ? `Import errors: ${response.data.details.errors.map(e => e.question + ': ' + e.reason).join('; ')}` : '');
          
          setImportJson(''); setImportFile(null); setShowImportModal(false);
          fetchQuestions(); setCurrentPage(1);
      } catch (err) {
          console.error('Error parsing or importing JSON:', err);
          setError(`Import failed: Invalid JSON format or API error. Details: ${err.message || err.response?.data?.message || 'Unknown error'}`);
      }
  };

  // Handlers for Exam Template Management
  const handleTemplateChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentTemplate(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : (name === 'numQuestions' || name === 'durationMs' ? Number(value) : value)
    }));
  };

  const handleTemplateSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!currentTemplate.name.trim() || currentTemplate.numQuestions <= 0 || currentTemplate.durationMs <= 0 || !currentTemplate.certification) {
      setError('Please fill all required fields correctly.');
      return;
    }

    try {
      if (isEditingTemplate) {
        await updateExamTemplate(currentTemplate._id, currentTemplate);
        setMessage('Exam template updated successfully!');
      } else {
        await createExamTemplate(currentTemplate);
        setMessage('Exam template created successfully!');
      }
      handleClearTemplateForm();
      fetchExamTemplates();
      setShowAddTemplateForm(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Template operation failed.');
    }
  };

  const handleEditTemplate = (template) => {
    setCurrentTemplate({
      ...template,
      durationMs: template.durationMs / (60 * 1000) // Convert ms to minutes for display in form
    });
    setIsEditingTemplate(true);
    setMessage('');
    setError('');
    setActiveTab('templates'); // Switch to templates tab
    setShowAddTemplateForm(true); // Show the form
  };

  const handleDeleteTemplate = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete exam template "${name}"? This cannot be undone.`)) { return; }
    setMessage(''); setError('');
    try {
      await deleteExamTemplate(id);
      setMessage(`Exam template "${name}" deleted successfully!`);
      fetchExamTemplates();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete template.');
    }
  };

  const handleClearTemplateForm = () => {
    setCurrentTemplate(initialExamTemplateState);
    setIsEditingTemplate(false);
    setMessage('');
    setError('');
    setShowAddTemplateForm(false);
  };

  // Handlers for Certification Management
  const handleCertChange = (e) => {
    const { name, value } = e.target;
    setCurrentCertification(prevState => ({
      ...prevState,
      [name]: value // 'name' for certification is simply 'name'
    }));
  };

  const handleCertSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!currentCertification.name.trim()) {
      setError('Certification name cannot be empty.');
      return;
    }

    try {
      if (isEditingCertification) {
        await updateCertification(currentCertification._id, currentCertification);
        setMessage('Certification updated successfully!');
      } else {
        await createCertification(currentCertification);
        setMessage('Certification created successfully!');
      }
      handleClearCertForm();
      fetchCertifications(); // Re-fetch certifications to update lists
      setShowAddCertificationForm(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Certification operation failed.');
    }
  };

  const handleEditCert = (cert) => {
    setCurrentCertification(cert);
    setIsEditingCertification(true);
    setMessage('');
    setError('');
    setActiveTab('certifications'); // Switch to certifications tab
    setShowAddCertificationForm(true); // Show the form
  };

  const handleDeleteCert = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete certification "${name}"? This will affect questions and templates linked to it.`)) { return; }
    setMessage(''); setError('');
    try {
      await deleteCertification(id);
      setMessage(`Certification "${name}" deleted successfully!`);
      fetchCertifications(); // Re-fetch certifications
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete certification.');
    }
  };

  const handleClearCertForm = () => {
    setCurrentCertification(initialCertificationState);
    setIsEditingCertification(false);
    setMessage('');
    setError('');
    setShowAddCertificationForm(false);
  };


  // Filtering and Search Logic (Questions)
  const filteredQuestions = useMemo(() => {
    return questions.filter(question => {
      const matchesSearch = searchTerm === '' ||
        question.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (question.explanation && question.explanation.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDomain = filterDomain === 'All' || question.domain === filterDomain;
      const matchesType = filterType === 'All' || question.questionType === filterType;
      const matchesDifficulty = filterDifficulty === 'All' || question.difficulty === filterDifficulty;
      const matchesActive = filterActive === 'All' ||
        (filterActive === 'Yes' && question.isActive) ||
        (filterActive === 'No' && !question.isActive);
      const matchesCertification = filterCertification === 'All' || question.certification === filterCertification;

      return matchesSearch && matchesDomain && matchesType && matchesDifficulty && matchesActive && matchesCertification;
    });
  }, [questions, searchTerm, filterDomain, filterType, filterDifficulty, filterActive, filterCertification]);

  // Pagination Logic (Questions)
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleQuestionsPerPageChange = (e) => {
    setQuestionsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Refined page number generation for display
  const maxPageButtons = 15; // Max number of page buttons to show (e.g., 1 2 3 ... 10)
  const pageNumbers = useMemo(() => {
    const pages = [];
    if (totalPages <= maxPageButtons + 2) { // If few pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
      const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) { pages.push('...'); }
      }
      for (let i = startPage; i <= endPage; i++) { pages.push(i); }
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) { pages.push('...'); }
        pages.push(totalPages);
      }
    }
    return pages;
  }, [totalPages, currentPage, maxPageButtons]);

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Management</h2>

      {/* Tab Navigation */}
      <div className="admin-tabs">
          <button
              onClick={() => setActiveTab('questions')}
              className={`tab-button ${activeTab === 'questions' ? 'active' : ''}`}
          >
              Manage Questions
          </button>
          <button
              onClick={() => setActiveTab('users')}
              className={`tab-button ${activeTab === 'users' ? 'active' : ''}`}
          >
              Manage Users
          </button>
          <button
              onClick={() => setActiveTab('templates')}
              className={`tab-button ${activeTab === 'templates' ? 'active' : ''}`}
          >
              Manage Exam Templates
          </button>
          <button
              onClick={() => setActiveTab('certifications')}
              className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
          >
              Manage Certifications
          </button>
      </div>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Conditional Rendering for Questions Tab */}
      {activeTab === 'questions' && (
        <>
          <h3 style={{ marginBottom: '20px' }}>Question Bank Management</h3>
          {/* Add/Hide Form Button and Import Button */}
          <div style={{ textAlign: 'center', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button onClick={() => setShowAddForm(!showAddForm)} className="add-hide-form-button">
              {showAddForm ? 'Hide Form' : 'Add New Question'}
            </button>
            <button onClick={() => setShowImportModal(true)} className="add-hide-form-button" style={{ backgroundColor: '#6c757d' }}>
              Import Questions (JSON)
            </button>
          </div>

          {/* Conditional Rendering for the Add/Edit Question Form */}
          {showAddForm && (
            <form onSubmit={handleSubmit} className="question-form">
              <h3>{isEditing ? 'Edit Question' : 'Add New Question'}</h3>
              <div className="form-group">
                <label>Question Text:</label>
                <textarea
                  name="text"
                  value={currentQuestion.text}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>Options (provide at least 2):</label>
                {currentQuestion.options.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e)}
                    placeholder={`Option ${index + 1}`}
                    required={index < 2}
                  />
                ))}
              </div>

              <div className="form-group">
                  <label>Question Type:</label>
                  <select
                      name="questionType"
                      value={currentQuestion.questionType}
                      onChange={handleChange}
                      required
                  >
                      <option value="single-choice">Single Choice</option>
                      <option value="multi-response">Multiple Response</option>
                  </select>
              </div>

              <div className="form-group">
                  <label>Correct Answer(s) (Select {currentQuestion.questionType === 'single-choice' ? 'one' : 'one or more'}):</label>
                  {currentQuestion.options.map((option, index) => (
                      option.trim() && (
                          <div key={index} style={{ marginBottom: '5px' }}>
                              <label>
                                  <input
                                      type={currentQuestion.questionType === 'single-choice' ? 'radio' : 'checkbox'}
                                      name="correctAnswerSelection"
                                      value={option}
                                      checked={currentQuestion.correctAnswer.includes(option)}
                                      onChange={handleCorrectAnswerSelection}
                                      style={{ marginRight: '8px' }}
                                  />
                                  {option}
                              </label>
                          </div>
                      )
                  ))}
              </div>

              <div className="form-group">
                <label>Explanation:</label>
                <textarea
                  name="explanation"
                  value={currentQuestion.explanation}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Certification selection dropdown (now dynamic) */}
              <div className="form-group">
                  <label>Certification:</label>
                  <select
                      name="certification"
                      value={currentQuestion.certification}
                      onChange={handleChange}
                      required
                  >
                      {/* Only show actual cert names from fetched data */}
                      {certifications.length > 0 ? (
                        certifications.map(cert => (
                          <option key={cert._id} value={cert.name}>{cert.name}</option>
                        ))
                      ) : (
                        <option value="">No certifications available</option>
                      )}
                  </select>
              </div>

              {/* Domain is conditional based on certification */}
              {currentQuestion.certification === 'CISSP' && ( // Only show domain if certification is CISSP
                <div className="form-group">
                    <label>Domain:</label>
                    <select name="domain" value={currentQuestion.domain} onChange={handleChange} required>
                        {CISSP_DOMAINS.map(domain => (
                            <option key={domain} value={domain}>{domain}</option>
                        ))}
                    </select>
                </div>
              )}

              <div className="form-group">
                <label>Difficulty:</label>
                <select name="difficulty" value={currentQuestion.difficulty} onChange={handleChange} required>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={currentQuestion.isActive}
                    onChange={handleChange}
                  />
                  Is Active
                </label>
              </div>

              <button type="submit">{isEditing ? 'Update Question' : 'Add Question'}</button>
              {isEditing && <button type="button" onClick={handleClearForm} className="clear-button">Cancel Edit</button>}
            </form>
          )}

          <h3>Existing Questions</h3>
          {/* Filter and Search UI */}
          <div className="filter-and-search-controls" style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'flex-end' }}>
            <div style={{ flex: '1 1 200px' }}>
              <label>Search:</label>
              <input
                type="text"
                placeholder="Search text, domain, explanation..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>

            {/* Certification Filter (now dynamic) */}
            <div style={{ flex: '0 0 auto' }}>
              <label>Certification:</label>
              <select value={filterCertification} onChange={(e) => { setFilterCertification(e.target.value); setCurrentPage(1); }} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <option value="All">All Certs</option>
                {certifications.map(cert => ( /* Use fetched certifications */
                  <option key={cert._id} value={cert.name}>{cert.name}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: '0 0 auto' }}>
              <label>Domain:</label>
              <select value={filterDomain} onChange={(e) => { setFilterDomain(e.target.value); setCurrentPage(1); }} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <option value="All">All Domains</option>
                {/* Only show domains if CISSP cert is selected or All certs */}
                {(filterCertification === 'CISSP' || filterCertification === 'All') && CISSP_DOMAINS.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: '0 0 auto' }}>
              <label>Type:</label>
              <select value={filterType} onChange={(e) => { setFilterType(e.target.value); setCurrentPage(1); }} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                {QUESTION_TYPES.map(type => (
                  <option key={type} value={type}>{type === 'All' ? 'All Types' : type}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: '0 0 auto' }}>
              <label>Difficulty:</label>
              <select value={filterDifficulty} onChange={(e) => { setFilterDifficulty(e.target.value); setCurrentPage(1); }} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                {DIFFICULTY_LEVELS.map(level => (
                  <option key={level} value={level}>{level === 'All' ? 'All Difficulties' : level}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: '0 0 auto' }}>
              <label>Active Status:</label>
              <select value={filterActive} onChange={(e) => { setFilterActive(e.target.value); setCurrentPage(1); }} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <option value="All">All Statuses</option>
                <option value="Yes">Active</option>
                <option value="No">Inactive</option>
              </select>
            </div>
          </div>

          <table className="questions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Certification</th>
                <th>Domain</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentQuestions.map((q, index) => (
                <tr key={q._id}>
                  <td>{indexOfFirstQuestion + index + 1}</td>
                  <td>{q.text.substring(0, 50)}...</td>
                  <td>{q.certification}</td>
                  <td>{q.domain}</td>
                  <td>{q.questionType}</td>
                  <td>{q.difficulty}</td>
                  <td>{q.isActive ? 'Yes' : 'No'}</td>
                  <td>
                    <button onClick={() => handleEdit(q)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(q._id)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
            {/* Questions per page dropdown */}
            <div>
              <label>Questions per page:</label>
              <select value={questionsPerPage} onChange={handleQuestionsPerPageChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd', marginLeft: '8px' }}>
                {QUESTIONS_PER_PAGE_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Page navigation buttons */}
            <div style={{ display: 'flex', gap: '5px' }}>
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              {pageNumbers.map((number, idx) => ( // Use idx for ellipsis key to prevent key collision if multiple '...'
              <button
                key={number === '...' ? `ellipsis-${idx}` : number} // <--- Use idx for ellipsis key
                onClick={number !== '...' ? () => paginate(number) : undefined} // <--- MODIFIED onClick
                className={currentPage === number ? 'active' : ''}
                style={{
                  background: currentPage === number ? '#3498db' : '#f2f2f2',
                  color: currentPage === number ? 'white' : '#333',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  cursor: number === '...' ? 'default' : 'pointer' // Default cursor for ellipsis
                }}
                disabled={number === '...'}
              >
                {number}
              </button>
            ))}
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* Conditional Rendering for Users Tab */}
      {activeTab === 'users' && (
        <>
          <h3 style={{ marginTop: '40px' }}>User Management</h3>
          <table className="users-table questions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(userItem => (
                <tr key={userItem._id}>
                  <td>{userItem._id.substring(0, 6)}...</td>
                  <td>{userItem.username}</td>
                  <td>{userItem.role}</td>
                  <td>
                    {userItem.role === 'user' ? (
                      <button onClick={() => handleRoleChange(userItem._id, 'admin')} className="edit-button">
                        Make Admin
                      </button>
                    ) : (
                      userItem._id !== user._id && (
                        <button onClick={() => handleRoleChange(userItem._id, 'user')} className="delete-button">
                          Make User
                        </button>
                      )
                    )}
                    <button onClick={() => navigate(`/admin/users/${userItem._id}/history`)} className="edit-button" style={{ marginLeft: '5px' }}>
                      View History
                    </button>
                    {userItem._id !== user._id && (
                      <button onClick={() => handleDeleteUser(userItem._id, userItem.username)} className="delete-button" style={{ marginLeft: '5px' }}>
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Conditional Rendering for Exam Templates Tab */}
      {activeTab === 'templates' && (
        <>
          <h3 style={{ marginBottom: '20px' }}>Exam Template Management</h3>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button onClick={() => setShowAddTemplateForm(!showAddTemplateForm)} className="add-hide-form-button">
              {showAddTemplateForm ? 'Hide Template Form' : 'Create New Template'}
            </button>
          </div>

          {showAddTemplateForm && (
            <form onSubmit={handleTemplateSubmit} className="question-form">
              <h3>{isEditingTemplate ? 'Edit Exam Template' : 'Create New Exam Template'}</h3>
              <div className="form-group">
                <label>Template Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentTemplate.name}
                  onChange={handleTemplateChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={currentTemplate.description}
                  onChange={handleTemplateChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Number of Questions:</label>
                <input
                  type="number"
                  name="numQuestions"
                  value={currentTemplate.numQuestions}
                  onChange={handleTemplateChange}
                  required
                  min="1"
                />
              </div>
              <div className="form-group">
                <label>Duration (minutes):</label>
                <input
                  type="number"
                  name="durationMs"
                  value={currentTemplate.durationMs / (60 * 1000)} /* Convert ms to minutes for input */
                  onChange={handleTemplateChange}
                  required
                  min="1"
                />
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="isWeighted"
                    checked={currentTemplate.isWeighted}
                    onChange={handleTemplateChange}
                  />
                  Questions are Domain Weighted
                </label>
              </div>
              <div className="form-group">
                <label>Certification:</label>
                <select
                  name="certification"
                  value={currentTemplate.certification}
                  onChange={handleTemplateChange}
                  required
                >
                  {certifications.map(cert => ( /* Use fetched certifications for template form */
                    <option key={cert._id} value={cert.name}>{cert.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit">{isEditingTemplate ? 'Update Template' : 'Create Template'}</button>
              {isEditingTemplate && <button type="button" onClick={handleClearTemplateForm} className="clear-button">Cancel Edit</button>}
            </form>
          )}

          <h3 style={{ marginTop: '30px' }}>Existing Exam Templates</h3>
          <table className="questions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Certification</th>
                <th>Questions</th>
                <th>Duration (Mins)</th>
                <th>Weighted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {examTemplates.map(template => (
                <tr key={template._id}>
                  <td>{template._id.substring(0, 6)}...</td>
                  <td>{template.name}</td>
                  <td>{template.certification}</td>
                  <td>{template.numQuestions}</td>
                  <td>{template.durationMs / (60 * 1000)}</td>
                  <td>{template.isWeighted ? 'Yes' : 'No'}</td>
                  <td>
                    <button onClick={() => handleEditTemplate(template)} className="edit-button">Edit</button>
                    <button onClick={() => handleDeleteTemplate(template._id, template.name)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* --- NEW TAB: Manage Certifications --- */}
      {activeTab === 'certifications' && (
        <>
          <h3 style={{ marginBottom: '20px' }}>Certification Management</h3>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button onClick={() => setShowAddCertificationForm(!showAddCertificationForm)} className="add-hide-form-button">
              {showAddCertificationForm ? 'Hide Certification Form' : 'Add New Certification'}
            </button>
          </div>

          {showAddCertificationForm && (
            <form onSubmit={handleCertSubmit} className="question-form">
              <h3>{isEditingCertification ? 'Edit Certification' : 'Add New Certification'}</h3>
              <div className="form-group">
                <label>Certification Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentCertification.name}
                  onChange={handleCertChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description (Optional):</label>
                <textarea
                  name="description"
                  value={currentCertification.description}
                  onChange={handleCertChange}
                ></textarea>
              </div>
              <button type="submit">{isEditingCertification ? 'Update Certification' : 'Add Certification'}</button>
              {isEditingCertification && <button type="button" onClick={handleClearCertForm} className="clear-button">Cancel Edit</button>}
            </form>
          )}

          <h3 style={{ marginTop: '30px' }}>Existing Certifications</h3>
          <table className="questions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map(cert => (
                <tr key={cert._id}>
                  <td>{cert._id.substring(0, 6)}...</td>
                  <td>{cert.name}</td>
                  <td>{cert.description.substring(0, 50)}...</td>
                  <td>
                    <button onClick={() => handleEditCert(cert)} className="edit-button">Edit</button>
                    <button onClick={() => handleDeleteCert(cert._id, cert.name)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Import Questions Modal (Remains unchanged) */}
      {showImportModal && (
          <div style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1000
          }}>
              <div style={{
                  backgroundColor: 'white', padding: '30px', borderRadius: '8px', maxWidth: '600px', width: '90%',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                  <h3>Import Questions from JSON File or Paste Text</h3>
                  
                  {/* FILE INPUT */}
                  <div style={{ marginBottom: '15px' }}>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select JSON File:</label>
                      <input
                          type="file"
                          accept=".json"
                          onChange={handleFileChange}
                          style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
                      />
                      {importFile && <p style={{ fontSize: '0.9em', color: '#555', marginTop: '5px' }}>Selected file: <strong>{importFile.name}</strong></p>}
                  </div>

                  <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>OR</p>

                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Paste JSON Array Text:</label>
                  <textarea
                      value={importJson}
                      onChange={(e) => {
                          setImportJson(e.target.value);
                          setImportFile(null);
                      }}
                      placeholder='[{"text": "Q1", "options": ["A", "B"], "correctAnswer": ["A"], ...}, {"text": "Q2", ...}]'
                      rows="10"
                      style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px' }}
                  ></textarea>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                      <button onClick={() => { setShowImportModal(false); setImportJson(''); setImportFile(null); }} style={{ backgroundColor: '#6c757d', color: 'white' }}>
                          Cancel
                      </button>
                      <button onClick={handleImportSubmit} style={{ backgroundColor: '#28a745', color: 'white' }}>
                          Import
                      </button>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
}

export default AdminPanel;