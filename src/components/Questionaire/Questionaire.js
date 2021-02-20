import React from "react";

const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  
  return (
    <div className='flex flex-col'>
      <div className={`bg-white text-purple-500 p-10 rounded-lg shadow-md`}>
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer, idx) => {
          const textColor = showAnswers ? 
          answer === correct_answer 
          ? 'text-green-300'
           : 'text-red-300' 
           : 'text-purple-500';
          return (
          <button
          key={idx}
            className={`bg-white ${textColor} p-4 
              font-semibold rounded shadow`}
            onClick={() => handleAnswer
              (answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
          );
        })}
      </div>
      {showAnswers && (
      <button 
        onClick={handleNextQuestion}
        className = {`ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6`}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questionaire;
