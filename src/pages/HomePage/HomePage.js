import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import { Questionaire } from '../../components/Questionaire'

function HomePage() {
  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0)
 
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setQuestions(data.results);
        console.log('index', data)
      });
  }, []);

  // console.log("test log", questions[0].questions)
  const handleAnswer = (answer) => {
    setCurrentIndex(currentIndex + 1)

    if(answer === questions[currentIndex].correct_answer) {
      // increase the score 
      setScore(score + 1)
    }
    // check for the answer
    // show another question
    //change score if correct 
  }
  return questions.length > 0 ? (
    <div className="container">
     <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer}/>
    </div>
  )  : (
    <h2 className='text-2xl text-purple font-bold'>We are loading</h2>
  );
}


export default HomePage;
