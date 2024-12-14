import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/ContextApi";
import toast from "react-hot-toast";

const QuizStartQuestions = ( {onUpdateTime}) => {
  const time = 30;
  const { quizToStartObject, allQuizzes, setAllQuizzes, userObject } =
    useGlobalContext();
  const { selectQuizToStart } = quizToStartObject;
  const { quizQuestions } = selectQuizToStart;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [indexOfQuizSelected, setIndexOfQuizSelected] = useState(null);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const [timer, setTimer] = useState(time);
  let interval;

  function startTimer() {
    clearInterval(interval);
    setTimer(time);

    interval = setInterval(() => {
      setTimer((currentTime) => {
        onUpdateTime(currentTime);
        if (currentTime === 0) {
          clearInterval(interval);
          return 0;
        }
        return currentTime - 1;
      });
    }, 1000);
  }
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, [currentQuestionIndex]);

  useEffect(()=>{
    if(timer === 0){
      if(currentQuestionIndex !== quizQuestions.length - 1){
        setTimeout(() =>{
          setCurrentQuestionIndex((current) => {
            return current +1;
          });
        },1000);
      }
    }
  },[timer])

  useEffect(() => {
    const quizIndexFound = allQuizzes.findIndex(
      (quiz) => quiz._id === selectQuizToStart._id
    );
    setIndexOfQuizSelected(quizIndexFound);
  }, []);

  useEffect(() => {
    if (isQuizEnded) {
      // renitialize all answers to -1
      quizQuestions.forEach((quizQuestion) => {
        quizQuestion.answeredResult = -1;
      });
      console.log("quiz has ended..");
    }
  }, [isQuizEnded]);

  function moveToTheNextQuestion() {
    if (currentQuestionIndex == quizQuestions.length - 1) {
      return;
    }

    setCurrentQuestionIndex((current) => current + 1);
  }

  function selectChoiceFunction(choiceIndexClicked) {
    setSelectedChoice(choiceIndexClicked);

    const currentAllQuizzes = [...allQuizzes];

    currentAllQuizzes[indexOfQuizSelected].quizQuestions[
      currentQuestionIndex
    ].answeredResult = choiceIndexClicked;

    setAllQuizzes(currentAllQuizzes);
  }

  function moveToTheNextQuestion() {
    if (
      allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex]
        .answeredResult === -1
    ) {
      toast.error("please select an answer");
      return;
    }

    allQuizzes[indexOfQuizSelected].quizQuestions[
      currentQuestionIndex
    ].statistics.totalAttempts += 1;

    if (
      allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex]
        .answeredResult !==
      allQuizzes[indexOfQuizSelected].quizQuestions[currentQuestionIndex]
        .correctAnswer
    ) {
      allQuizzes[indexOfQuizSelected].quizQuestions[
        currentQuestionIndex
      ].statistics.incorrectAttempts += 1;
      toast.error("Incorrect Answer!");
    }

    allQuizzes[indexOfQuizSelected].quizQuestions[
      currentQuestionIndex
    ].statistics.correctAttempts += 1;

    console.log("Awesome!");

    if (currentQuestionIndex === quizQuestions.length - 1) {
      setIsQuizEnded(true);
    }

    setCurrentQuestionIndex((current) => current + 1);
    setSelectedChoice(null);
  }

  return (
    <div className="flex flex-col items-start rounded-md m-9 w-9/12">
      <div className="flex justify-start items-center gap-2">
        <div className="bg-orange-600 flex justify-center items-center rounded-md w-11 h-11">
          {currentQuestionIndex + 1}
        </div>
        <p>{quizQuestions[currentQuestionIndex].mainQuestion}</p>
      </div>
      {/* Answer questions */}
      <div className="mt-7 flex flex-col gap-2 w-full">
        {quizQuestions[currentQuestionIndex].choices.map(
          (choice, indexChoice) => (
            <div
              key={indexChoice}
              onClick={() => {
                selectChoiceFunction(indexChoice);
              }}
              className={`p-3 ml-11 w-10/12 border border-orange-500 rounded-md
               hover:bg-orange-600 hover:text-white transition-all select-none ${
                 selectedChoice === indexChoice
                   ? "bg-orange-500 text-white"
                   : "bg-white"
               }`}
            >
              {choice}
            </div>
          )
        )}
      </div>
      <div className="flex justify-end w-10/12 mt-7">
        <button
          onClick={() => {
            moveToTheNextQuestion();
          }}
          className={`p-2 px-5 text-[15px] text-white rounded-md bg-orange-500 hover:bg-orange-700 mr-[70px] ${
            isQuizEnded ? "opacity-60" : "opacity-100"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuizStartQuestions;
