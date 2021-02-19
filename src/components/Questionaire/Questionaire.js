import React from "react";

const Button = ({ answer }) => {
  return (
    <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">
      {answer}
    </button>
  );
};

const Questionaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div>
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        <Button
          className={correct_answer === shuffledAnswer[0] ? 'bg-green-300' : ''}
          onClick={() => handleAnswer(shuffledAnswer[0])}
          answer={shuffledAnswer[0]}
        />
        <Button
         className={correct_answer === shuffledAnswer[1] ? 'bg-green-300' : ''}
          onClick={() => handleAnswer(shuffledAnswer[1])}
          answer={shuffledAnswer[1]}
        />
        <Button
         className={correct_answer === shuffledAnswer[2] ? 'bg-green-300' : ''}
          onClick={() => handleAnswer(shuffledAnswer[2])}
          answer={shuffledAnswer[2]}
        />
        <Button
         className={correct_answer === shuffledAnswer[3] ? 'bg-green-300' : ''}
          onClick={() => handleAnswer(shuffledAnswer[3])}
          answer={shuffledAnswer[3]}
        />
      </div>
    </div>
  );
};

export default Questionaire;
