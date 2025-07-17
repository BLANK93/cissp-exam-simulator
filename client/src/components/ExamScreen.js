import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import ExamQuestion from './ExamQuestion';
import { submitExam } from '../api/examAPI';

function ExamScreen({ examState, setExamState, setExamResults, user }) {
  const navigate = useNavigate();
  const { examSessionId, questions, startTime, duration, userAnswers, currentQuestionIndex } = examState;

  useEffect(() => {
    if (!examSessionId || !questions || questions.length === 0) {
      navigate('/');
    }
  }, [examSessionId, questions, navigate]);

  const handleAnswerChange = (questionId, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setExamState(prevState => ({ ...prevState, userAnswers: newAnswers }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setExamState(prevState => ({ ...prevState, currentQuestionIndex: prevState.currentQuestionIndex + 1 }));
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setExamState(prevState => ({ ...prevState, currentQuestionIndex: prevState.currentQuestionIndex - 1 }));
    }
  };

  const handleSubmitExam = async () => {
    if (!window.confirm('Are you sure you want to submit the exam?')) {
      return;
    }
    try {
      const formattedAnswers = questions.map((q, index) => ({
        questionId: q._id,
        userAnswer: userAnswers[index] || (q.questionType === 'multi-response' ? [] : '')
      }));
      
      const response = await submitExam(examSessionId, formattedAnswers);
      setExamResults(response.data);
      // Navigate to results page, passing session ID in state (for initial load)
      // ResultsScreen will also try to get ID from URL params for robustness
      navigate(`/results/${examSessionId}`);
    } catch (error) {
      console.error('Error submitting exam:', error);
      alert('Failed to submit exam. Please try again.');
    }
  };

  const handleTimeUp = () => {
    alert('Time is up! Your exam will be submitted automatically.');
    handleSubmitExam();
  };

  if (!questions || questions.length === 0 || !(currentQuestionIndex in questions)) {
    return <p>Loading exam or no exam started. Please navigate to the home page and start an exam.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentSelectedAnswer = userAnswers[currentQuestionIndex] || (currentQuestion.questionType === 'multi-response' ? [] : '');

  return (
    <div className="exam-screen">
      <div className="exam-header">
        <Timer startTime={startTime} duration={duration} onTimeUp={handleTimeUp} />
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>

      {currentQuestion && (
        <>
          <ExamQuestion
            question={currentQuestion}
            index={currentQuestionIndex}
            selectedAnswer={currentSelectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
        </>
      )}

      <div className="exam-navigation">
        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>

        <button onClick={handleSubmitExam} className="end-exam-early-button">
          End Exam
        </button>

        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmitExam} className="submit-button">
            Submit and End Exam
          </button>
        )}
      </div>
    </div>
  );
}

export default ExamScreen;