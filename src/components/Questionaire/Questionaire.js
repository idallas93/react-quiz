import React from "react";

const Questionaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  console.log(correct_answer);
  return (
    <div>
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        {shuffledAnswer.map((answer) => (
          <button
            className={`${correct_answer 
              === answer ? 'bg-purple-300' : 'bg-white'} p-4 
              text-purple-800 font-semibold rounded shadow`}
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionaire;
