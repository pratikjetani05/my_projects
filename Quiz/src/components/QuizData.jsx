import React from "react";
import { IoLogoJavascript } from "react-icons/io5";

const QuizData = [
  {
    id: 1,
    icon: [IoLogoJavascript],
    quizTitle: "Javascript Quiz",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What si the purpose of Java script?",
        choices: [
          "A. To style Html elements",
          "B. To ad interactivity to web pages",
          "C. To define the structure of a web pages",
          "D. To perform server-side oprations",
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 3,
          correctAttempts: 2,
          incorrectAttempts: 1,
        },
      },
      {
        id: 2,
        mainQuestion: "What is the use  of Java script?",
        choices: [
          "A. To style Html elements",
          "B. To ad interactivity to web pages",
          "C. To define the structure of a web pages",
          "D. To perform server-side oprations",
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 3,
          correctAttempts: 2,
          incorrectAttempts: 1,
        },
      },
      
    ],
  },
  {
    id: 2,
    icon: IoLogoJavascript,
    quizTitle: "React Quiz",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What is the purpose of React Js?",
        choices: [
          "A. To style Html elements",
          "B. To ad interactivity to web pages",
          "C. To define the structure of a web pages",
          "D. To perform server-side oprations",
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 3,
          correctAttempts: 2,
          incorrectAttempts: 1,
        },
      },
      {
        id: 2,
        mainQuestion: "What is the use of React?",
        choices: [
          "A. To style Html elements",
          "B. To ad interactivity to web pages",
          "C. To define the structure of a web pages",
          "D. To perform server-side oprations",
        ],
        correctAnswer: 1,
        answeredResult: -1,
        statistics: {
          totalAttempts: 3,
          correctAttempts: 2,
          incorrectAttempts: 1,
        },
      },
      
    ],
  },
];

export default QuizData;
