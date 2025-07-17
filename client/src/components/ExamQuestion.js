import React from 'react';

// ExamQuestion component will now receive questionType and handle multi-select
// It also receives 'index' for displaying the question number
function ExamQuestion({ question, index, selectedAnswer, onAnswerChange }) { // <--- 'index' PROP ADDED HERE
  // Ensure selectedAnswer is always an array for easier checking, even for single-choice
  // If selectedAnswer is null/undefined, initialize to an empty array.
  // If it's a string (single choice), wrap it in an array. Otherwise, use it as is (if it's already an array).
    // --- ADD THIS CONSOLE.LOG ---
  console.log("DEBUG: ExamQuestion - incoming question prop:", question);
  // --- END CONSOLE.LOG ---
  const currentSelection = Array.isArray(selectedAnswer) ? selectedAnswer : (selectedAnswer ? [selectedAnswer] : []);

  const handleOptionChange = (e) => {
    const { value, type, checked } = e.target;

    if (type === 'radio') {
      // For single-choice, always pass a single string (the value)
      // When a radio is selected, it's the *only* answer.
      onAnswerChange(question._id, value);
    } else if (type === 'checkbox') {
      // For multi-response, manage an array of selected answers
      const newSelection = checked
        ? [...currentSelection, value] // Add to selection if checked
        : currentSelection.filter(answer => answer !== value); // Remove from selection if unchecked
      onAnswerChange(question._id, newSelection);
    }
  };

  return (
    <div className="question-card">
      {/* Use the 'index' prop for the question number */}
      <h3>Question {index + 1}: {question.text}</h3> 
      <div className="options">
        {question.options.map((option, optIndex) => (
          <label key={optIndex} className="option-label">
            {/* Input type depends on questionType (multi-response -> checkbox, else -> radio) */}
            <input
              type={question.questionType === 'multi-response' ? 'checkbox' : 'radio'}
              name={`question-${question._id}`} // Group inputs by question ID
              value={option}
              // Check if this option is included in the current selection (which is an array)
              checked={currentSelection.includes(option)} 
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ExamQuestion;