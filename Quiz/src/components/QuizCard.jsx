import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ContextApi";
import QuizData from "./QuizData";

function successRate(singleQuiz) {
  let correctQuestions = 0;
  let totalAttempts = 0;

  singleQuiz.quizQuestions.forEach((question) => {
    totalAttempts += question.statistics.totalAttempts || 0;
    correctQuestions += question.statistics.correctQuestions || 0;
  });

  const successRate = totalAttempts > 0 ? Math.ceil((correctQuestions / totalAttempts) * 100) : 0;
  return successRate;
}

const QuizCard = ({ singleQuiz }) => {
  const {
    quizToStartObject,
    dropDownToggleObject,
    threeDotsPositionsObject,
    selectedQuizObject,
  } = useGlobalContext();
  const { setSelectQuizToStart } = quizToStartObject;

  const { quizTitle, quizQuestions, icon } = singleQuiz;
  const totalQuestions = quizQuestions.length;
  const globalSuccessRate = successRate(singleQuiz);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="relative bg-orange-500 flex items-center justify-center h-40 w-64">
          <div className="text-white">{icon}</div>
          <div className="absolute top-2 right-2 text-white hover:cursor-pointer">
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold">{quizTitle}</h2>
      <div className="mb-4">
        <p className="text-gray-600">{totalQuestions} Question(s)</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-orange-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-600 ml-2">Success rate: {globalSuccessRate}%</p>
        </div>
        <Link to="/quizpage">
          <button
           onClick={() => {
            setSelectQuizToStart(singleQuiz);
          }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;








// 'use client';
// import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import Image from 'next/image';
// // import {
// //   faCode,
// //   faEllipsis,
// //   faPlay,
// //   faQuestion,
// // } from '@fortawesome/free-solid-svg-icons';
// // import Link from 'next/link';
// import useGlobalContext from '../context/ContextApi';
// // import { icon } from '@fortawesome/fontawesome-svg-core';
// // import convertToFaIcons from '../convertToFaIcons';

// function successRate(singleQuiz) {
//   let correctQuestions = 0;
//   let totalAttemptes = 0;
//   let successRate = 0;

//   singleQuiz.quizQuestions.forEach((question) => {
//     totalAttemptes += question.statistics.totalAttempts;
//     correctQuestions += question.statistics.correctAttempts;
//   });

//   successRate = Math.ceil((correctQuestions / totalAttemptes) * 100);
//   return successRate;
// }

// function QuizCard({ singleQuiz }) {
//   const {
//     quizToStartObject,
//     dropDownToggleObject,
//     threeDotsPositionsObject,
//     selectedQuizObject,
//   } = useGlobalContext();
//   const { setDropDownToggle } = dropDownToggleObject;
//   //
//   const { setSelectQuizToStart } = quizToStartObject;
//   const { setThreeDotsPositions } = threeDotsPositionsObject;
//   const { selectedQuiz, setSelectedQuiz } = selectedQuizObject;
//   //
//   const { quizTitle, quizQuestions, icon } = singleQuiz;

//   const totalQuestions = quizQuestions.length;
//   const globalSuccessRate = successRate(singleQuiz);
//   //

//   function openDropDownMenu(event) {
//     const xPos = event.clientX;
//     const yPos = event.clientY;

//     setThreeDotsPositions({ x: xPos, y: yPos });

//     if (event) {
//       event.stopPropagation();
//     }

//     setDropDownToggle(true);
//     setSelectedQuiz(singleQuiz);
//   }

//   return (
//     <div className="rounded-[10px] flex flex-col gap-2 border border-gray-300 bg-white p-4">
//       {/* Image Container */}
//       <div className="relative bg-green-700 w-full h-32 flex justify-center items-center  rounded-md ">
//         {/* More Options Icon */}
//         <div className="absolute cursor-pointer top-3 right-3">
//           <FontAwesomeIcon
//             className="text-white"
//             height={13}
//             width={13}
//             icon={faEllipsis}
//             onClick={openDropDownMenu}
//           />
//         </div>
//         {/* Quiz Icon */}
//         <FontAwesomeIcon
//           className="text-white text-3xl"
//           width={120}
//           height={120}
//           icon={convertToFaIcons(icon)}
//         />
//       </div>
//       {/* Title Area */}
//       <h3 className="font-bold ">{quizTitle}</h3>
//       {/* Questions */}
//       <p className="text-sm font-light">{totalQuestions} question(s)</p>
//       {/* Footer Area */}
//       <div className="flex gap-3">
//         {/* success rate area */}
//         <div className="flex gap-1 items-center">
//           <Image src="/target-777.png" width={20} height={10} alt="" />
//           <span className=" text-[12px]">
//             Success rate: {globalSuccessRate}%
//           </span>
//         </div>
//         <div
//           onClick={() => {
//             setSelectQuizToStart(singleQuiz);
//           }}
//           className="rounded-full w-7 h-7 bg-green-700 flex items-center justify-center cursor-pointer"
//         >
//           <Link href="/quiz-start">
//             <FontAwesomeIcon
//               className="text-white"
//               width={15}
//               height={15}
//               icon={faPlay}
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizCard;
