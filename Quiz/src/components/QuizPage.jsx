import React from "react";
import { useEffect,useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";
import { useGlobalContext } from "../context/ContextApi";

import { ImCancelCircle } from "react-icons/im";
import  QuizStartHeader from '../components/QuizStartHeader'
import  QuizStartQuestions from '../components/QuizStartQuestions'
import { useNavigate } from "react-router-dom";



function QuizPage( props ) {
  const { quizToStartObject, userObject } = useGlobalContext();
  const { selectQuizToStart } = quizToStartObject;
  const [parentTimer, setParentTimer] = useState(0);
const navigate = useNavigate();

useEffect(() => {
  if (selectQuizToStart === null) {
    navigate('/');
  }
}, [selectQuizToStart, navigate]);

function onUpdateTime(currentTime) {
  setParentTimer(currentTime);
}
  return (
    

    <div className=" quizpage relative poppins flex flex-col px-24 mt-[35px] ">
      {selectQuizToStart === null ? (
        <div className="  h-svh flex flex-col gap-2 items-center justify-center">
          <ImCancelCircle className="text-orange-500 text-[70px]" />
          <h2 className="text-xl font-bold">
            Please Select your quiz first...
          </h2>
          <span className="font-light">
            You will be redirected to the home page
          </span>
        </div>
      ) : (
        <>
          <QuizStartHeader parentTimer={parentTimer} />
          <div className="mt-10 flex items-center justify-center">
            <QuizStartQuestions onUpdateTime={onUpdateTime} />
          </div>
        </>
      )}
    </div>
  );
}

export default QuizPage;




