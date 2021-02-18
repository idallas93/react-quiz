import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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

  return questions.length > 0 ? (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl"> {questions[0].question}</h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-4">
          {questions[0].correct_answer}
        </button>
        <button className="bg-white w-2/5  p-4 text-purple-800 font-semibold rounded shadow mb-4">
          {questions[0].incorrect_answers[0]}
        </button>
        <button className="bg-white w-2/5  p-4 text-purple-800 font-semibold rounded shadow">
          {questions[0].incorrect_answers[1]}
        </button>
        <button className="bg-white w-2/5  p-4 text-purple-800 font-semibold rounded shadow">
          {questions[0].incorrect_answers[2]}
        </button>
      </div>
    </div>
  )  : (
    <h2 className='text-2xl text-white font-bold'>We are loading</h2>
  );
}


export default HomePage;
