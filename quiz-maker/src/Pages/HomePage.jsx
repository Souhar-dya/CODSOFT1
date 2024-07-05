import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizId, setQuizId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quizzes");
        if (response.ok) {
          const data = await response.json();
          setQuizzes(data);
        } else {
          console.error("Error fetching quizzes:", response.statusText);
        }
      } catch (err) {
        console.error("Error fetching quizzes:", err);
      }
    };

    fetchQuizzes();
  }, []);

  const handleQuizIdChange = (e) => {
    setQuizId(e.target.value);
  };

  const handleTakeQuiz = () => {
    navigate(`/take-quiz/${quizId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">
          Welcome to Online Quiz Maker
        </h1>
        <p className="mb-8 text-center text-gray-700">
          Create and take quizzes on various topics.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link to="/create-quiz">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Quiz
            </button>
          </Link>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Take a Quiz</h3>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter Quiz ID"
              value={quizId}
              required
              onChange={handleQuizIdChange}
              className="border border-gray-400 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleTakeQuiz}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Take Quiz
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Available Quizzes
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quizzes.map((quiz) => (
              <li key={quiz._id} className="mb-4">
                <Link to={`/take-quiz/${quiz._id}`}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                    {quiz.title}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
