import React from 'react';
import { useGlobalContext } from '../context/ContextApi';
import { IoLogoJavascript } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";

const QuizStartHeader = ({ parentTimer  }) => {
    const { quizToStartObject } = useGlobalContext();
    const { selectQuizToStart } = quizToStartObject;
  
    const { quizTitle } = selectQuizToStart;
    const { quizQuestions } = selectQuizToStart;

    return (
        <div className="flex justify-between">
            <div className="flex gap-2 justify-center">
                <div className="bg-orange-600 w-12 h-12 flex items-center justify-center p-2 rounded-md">
                    <IoLogoJavascript className="text-white h-24 w-24" />
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="font-bold text-xl">{quizTitle}</h2>
                    <span className="font-light text-sm">
                        {quizQuestions.length} Questions
                    </span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <CiStopwatch className="text-orange-500 h-5 w-5" />
                <span>00:00:{parentTimer}</span>
            </div>
        </div>
    );
}

export default QuizStartHeader;
