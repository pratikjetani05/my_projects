import React from "react";
import QuizCard from "./QuizCard";
import { IoLogoJavascript } from "react-icons/io5";
import PlaceHolder from "./PlaceHolder";
import { useGlobalContext } from "../context/ContextApi";

const QuizArea = (props) => {
  const { allQuizzes } = useGlobalContext();
  return (
    <div className=" mx-12 mt-10">
      {allQuizzes.length == 0 ? (
        <PlaceHolder />
      ) : (
        <div>
          <h2 className="text-xl font-bold">My Quizzes</h2>
          <div className="mt-6 flex gap-2 flex-wrap">
            {
              allQuizzes.map((singleQuiz,quizIndex) =>(
                    <div key={quizIndex}>
                         <QuizCard singleQuiz={singleQuiz}/>   
                    </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizArea;
