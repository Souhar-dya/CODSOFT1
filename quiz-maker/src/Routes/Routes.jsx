// src/routes/routes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QuizPlayer from "../components/QuizPlayer";
import CreateQuizPage from "../Pages/CreateQuizPage";
import HomePage from "../Pages/HomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/take-quiz/:id" element={<QuizPlayer />} />
        <Route path="/create-quiz" element={<CreateQuizPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
