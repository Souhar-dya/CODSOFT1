import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuizCreator from "../components/QuizCreator";

const CreateQuizPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <QuizCreator />
      </main>
      <Footer />
    </div>
  );
};

export default CreateQuizPage;
