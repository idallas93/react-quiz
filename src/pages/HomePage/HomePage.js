import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import { Questionaire } from '../../components/Questionaire'

function HomePage() {
  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setQuestions(data.results);
      });
  }, []);

  // console.log("test log", questions[0].questions)
  const handleAnswer = (answer) => {
    // check for the answer
  }
  return questions.length > 0 ? (
    <div className="container">
     <Questionaire data={questions[0]} handleAnswer={handleAnswer}/>
    </div>
  )  : (
    <h2 className='text-2xl text-white font-bold'>We are loading</h2>
  );
}


export default HomePage;
