import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/ContextApi";
import QuizCard from "./components/QuizCard";
import QuizPage from "./components/QuizPage";
import QuizData from "./components/QuizData";
import Home from "./components/Home";

function App() {
  const sampleQuiz = QuizData[0];
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/quizcard" element={<QuizCard singleQuiz={sampleQuiz}/>} />
          <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
