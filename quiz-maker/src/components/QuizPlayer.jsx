import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const QuizPlayer = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/quizzes/${id}`);
        if (response.ok) {
          const data = await response.json();
          setQuiz(data);
        } else {
          console.error("Error fetching quiz:", response.statusText);
        }
      } catch (err) {
        console.error("Error fetching quiz:", err);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    const correctAnswer = quiz.questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/quizzes/${id}/score`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: "user123", score }),
        }
      );

      if (response.ok) {
        console.log("Score saved successfully");
      } else {
        if (response.status === 401) {
          navigate("/login");
        } else {
          console.error("Error saving score:", response.statusText);
        }
      }
    } catch (err) {
      console.error("Error saving score:", err);
    }
  };

  if (!quiz) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        {quiz.title}
      </h2>
      {currentQuestion < quiz.questions.length ? (
        <>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Question {currentQuestion + 1}
            </h3>
            <p className="mb-4">{quiz.questions[currentQuestion].text}</p>
            <div className="mb-4">
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                      className="form-radio h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {currentQuestion === quiz.questions.length - 1
                ? "Submit"
                : "Next Question"}
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-4 text-xl font-semibold">Your score: {score}</p>
          <button
            onClick={handleSubmitQuiz}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Score
          </button>
        </>
      )}
    </div>
  );
};

export default QuizPlayer;
