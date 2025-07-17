import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { startExam, getAllExamTemplates, getAllCertifications } from '../api/examAPI'; // Ensure getAllCertifications is imported

// Helper function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};

// CISSP Domains (ensure this list matches the one in your AdminPanel and backend logic)
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

function WelcomeScreen({ user, setExamState }) {
  const navigate = useNavigate();

  const [selectedCertification, setSelectedCertification] = useState('CISSP');
  const [examTemplates, setExamTemplates] = useState([]);
  const [certifications, setCertifications] = useState([]); // State for dynamically fetched certifications
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [quickExamDomain, setQuickExamDomain] = useState('All');
  const [customNumQuestions, setCustomNumQuestions] = useState(20);
  const [customDurationMinutes, setCustomDurationMinutes] = useState(30);

  // Fetch exam templates AND certifications on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Certifications
        const certsResponse = await getAllCertifications();
        setCertifications(certsResponse.data);

        // Fetch Exam Templates
        const templatesResponse = await getAllExamTemplates();
        const defaultTemplates = [
          { _id: 'full-exam', name: 'Full CISSP Exam (150 Qs, 3 Hrs)', numQuestions: 150, durationMs: 3 * 60 * 60 * 1000, isWeighted: true, certification: 'CISSP', description: 'Simulate a full CISSP exam with domain weights.' },
          { _id: 'mock-exam', name: 'Mock CISSP Exam (60 Qs, 90 Mins, All Domains)', numQuestions: 60, durationMs: 90 * 60 * 1000, isWeighted: true, certification: 'CISSP', description: 'A shorter, weighted practice exam covering all CISSP domains.' },
        ];
        setExamTemplates([...defaultTemplates, ...templatesResponse.data]);

        // Set initial selected certification if it exists in the fetched list
        if (certsResponse.data.length > 0) {
            if (!certsResponse.data.some(c => c.name === 'CISSP')) {
                setSelectedCertification(certsResponse.data[0].name); 
            }
        } else {
            setSelectedCertification(''); 
            setSelectedTemplateId('');
        }
        
        // Set initial selected template based on initial/default certification
        const initialCert = selectedCertification || (certsResponse.data.length > 0 ? certsResponse.data[0].name : '');
        const defaultTemplateForInitialCert = [...defaultTemplates, ...templatesResponse.data].find(t => t.certification === initialCert);
        setSelectedTemplateId(defaultTemplateForInitialCert ? defaultTemplateForInitialCert._id : (templatesResponse.data.length > 0 ? templatesResponse.data[0]._id : ''));


      } catch (err) {
        console.error('Failed to fetch initial data:', err);
      }
    };
    fetchData();
  }, []);

  const handleStartExam = async () => {
    if (!user) {
      alert('Please log in to start an exam.');
      navigate('/login');
      return;
    }

    let numQuestionsToSend;
    let examDurationToSend;
    let isWeightedToSend;
    let selectedDomainToSend;
    let templateIdToSend = null;

    if (selectedCertification === 'CISSP') {
        const templateToUse = examTemplates.find(template => template._id === selectedTemplateId);

        if (!templateToUse) {
            alert('Please select a valid CISSP exam type to start.');
            return;
        }

        numQuestionsToSend = templateToUse.numQuestions;
        examDurationToSend = templateToUse.durationMs;
        isWeightedToSend = templateToUse.isWeighted;
        selectedDomainToSend = templateToUse.isWeighted ? quickExamDomain : 'All';
        templateIdToSend = templateToUse._id;
    } else { // Non-CISSP (Custom Questions/Duration) Logic
        if (customNumQuestions <= 0 || customDurationMinutes <= 0) {
            alert('Please enter valid positive numbers for questions and duration.');
            return;
        }
        numQuestionsToSend = customNumQuestions;
        examDurationToSend = customDurationMinutes * 60 * 1000;
        isWeightedToSend = false;
        selectedDomainToSend = 'All';
    }

    const examParams = {
      templateId: templateIdToSend,
      numQuestions: numQuestionsToSend,
      examDuration: examDurationToSend,
      isWeighted: isWeightedToSend,
      selectedCertification: selectedCertification,
      selectedDomain: selectedDomainToSend,
    };

    try {
      const response = await startExam(examParams);
      const data = response.data;

      const shuffledQuestions = data.questions.map(q => ({
        ...q,
        options: q.options ? shuffleArray(q.options) : []
      }));

      setExamState({
        examSessionId: data.examSessionId,
        questions: shuffledQuestions,
        startTime: new Date(data.startTime),
        duration: data.duration,
        userAnswers: shuffledQuestions.map(q => q.questionType === 'multi-response' ? [] : ''),
        currentQuestionIndex: 0,
      });
      navigate('/exam');
    } catch (error) {
      console.error('Error starting exam:', error);
      alert('Failed to start exam. Please try again later. Make sure you have enough questions for the selected criteria and certification.');
    }
  };

  // Filter templates displayed based on selected certification
  const filteredTemplates = examTemplates.filter(template =>
    template.certification === selectedCertification ||
    template._id === 'full-exam' ||
    template._id === 'mock-exam'
  );

  return (
    <div className="welcome-screen">
      <div className="welcome-header-section">
        <h1>Welcome to your Exam Simulator!</h1>
        <p>Prepare for your certification with a realistic exam experience.</p>
      </div>

      {user ? (
        <> {/* This fragment groups the logged-in user's content */}
          {/* Certification Selection (NOW DYNAMIC) */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <label htmlFor="certificationSelect" style={{ marginRight: '10px', fontWeight: 'bold' }}>
              Choose Certification:
            </label>
            <select
              id="certificationSelect"
              value={selectedCertification}
              onChange={(e) => {
                setSelectedCertification(e.target.value);
                setQuickExamDomain('All');
                setCustomNumQuestions(20);
                setCustomDurationMinutes(30);
                const defaultTemplateForNewCert = examTemplates.find(t => t.certification === e.target.value);
                setSelectedTemplateId(defaultTemplateForNewCert ? defaultTemplateForNewCert._id : (examTemplates.length > 0 ? examTemplates[0]._id : ''));
              }}
            >
              {certifications.length > 0 ? ( // Use fetched certifications here
                certifications.map(cert => (
                  <option key={cert._id} value={cert.name}>{cert.name}</option>
                ))
              ) : (
                <option value="">No certifications available</option>
              )}
            </select>
          </div>

          {/* --- CONDITIONAL RENDERING FOR EXAM TYPE SELECTION --- */}
          {selectedCertification === 'CISSP' ? (
              // --- CISSP SPECIFIC EXAM TEMPLATES UI ---
              <>
                  <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                      <label htmlFor="examTemplateSelect" style={{ marginRight: '10px', fontWeight: 'bold' }}>Choose Exam Type:</label>
                      <select
                          id="examTemplateSelect"
                          value={selectedTemplateId}
                          onChange={(e) => {
                              setSelectedTemplateId(e.target.value);
                              const template = examTemplates.find(t => t._id === e.target.value);
                              if (template && !template.isWeighted) {
                                  setQuickExamDomain('All');
                              }
                          }}
                      >
                          {filteredTemplates.length > 0 ? (
                            filteredTemplates.map(template => (
                              <option key={template._id} value={template._id}>
                                {template.name}
                                {template.description && ` - ${template.description}`}
                              </option>
                            ))
                          ) : (
                            <option value="">No templates available for this certification</option>
                          )}
                      </select>
                  </div>

                  {/* Conditionally render Domain Selection if the SELECTED TEMPLATE IS WEIGHTED */}
                  {selectedTemplateId && examTemplates.find(t => t._id === selectedTemplateId)?.isWeighted && (
                       <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                          <label htmlFor="quickExamDomain" className="label-bold">
                              Choose Domain (for weighted exams only):
                          </label>
                          <select
                              id="quickExamDomain"
                              value={quickExamDomain}
                              onChange={(e) => setQuickExamDomain(e.target.value)}
                          >
                              <option value="All">All Domains</option>
                              {CISSP_DOMAINS.map(domain => (
                                  <option key={domain} value={domain}>{domain}</option>
                              ))}
                          </select>
                      </div>
                  )}
              </>
          ) : (
              // --- NON-CISSP SPECIFIC CUSTOM INPUTS UI ---
              <div className="custom-exam-inputs-section">
                  <h4 className="section-title">Custom Exam for {selectedCertification}</h4>
                  <div className="input-group-row">
                      <label className="label-inline">
                          Number of Questions:
                          <input
                              type="number"
                              value={customNumQuestions}
                              onChange={(e) => setCustomNumQuestions(Number(e.target.value))}
                              min="1"
                          />
                      </label>
                      <label className="label-inline">
                          Duration (minutes):
                          <input
                              type="number"
                              value={customDurationMinutes}
                              onChange={(e) => setCustomDurationMinutes(Number(e.target.value))}
                              min="1"
                          />
                      </label>
                  </div>
                  <p className="note-text">
                      (Questions will be selected randomly from all available {selectedCertification} questions.)
                  </p>
              </div>
          )}
          
          <button onClick={handleStartExam} className="start-exam-button primary-button">
            Start Exam
          </button>
        </> 
      ) : (
        <p className="login-prompt">Please log in to begin your exam simulation.</p>
      )}
    </div>
  );
}

export default WelcomeScreen;