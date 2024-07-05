import React, { useState } from "react";

const QuizCreator = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], answer: "" },
  ]);

  const handleTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].text = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newQuiz = { title: quizTitle, questions };
      const response = await fetch("/api/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuiz),
      });

      if (response.ok) {
        const createdQuiz = await response.json();
        console.log("Quiz created:", createdQuiz);
        // Reset form or show success message
      } else {
        console.error("Error creating quiz:", response.statusText);
      }
    } catch (err) {
      console.error("Error creating quiz:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Create Quiz
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="quizTitle"
            className="block text-lg font-medium text-gray-700"
          >
            Quiz Title:
          </label>
          <input
            type="text"
            id="quizTitle"
            value={quizTitle}
            onChange={handleTitleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Question {index + 1}</h3>
            <div className="mb-4">
              <label
                htmlFor={`question-${index}`}
                className="block text-lg font-medium text-gray-700"
              >
                Question:
              </label>
              <input
                type="text"
                id={`question-${index}`}
                value={question.text}
                onChange={(e) => handleQuestionChange(index, e)}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Options:
              </label>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mt-1 flex">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, optionIndex, e)}
                    required
                    className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label
                htmlFor={`answer-${index}`}
                className="block text-lg font-medium text-gray-700"
              >
                Correct Answer:
              </label>
              <select
                id={`answer-${index}`}
                value={question.answer}
                onChange={(e) => handleAnswerChange(index, e)}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Answer</option>
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    Option {optionIndex + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Question
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Create Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizCreator;
