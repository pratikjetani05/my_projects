import React, { useEffect } from 'react';
import Navbar from './Navbar';
import QuizArea from './QuizArea';
import QuizPage from './QuizPage';
import { useGlobalContext } from '../context/ContextApi';

const Home = () => {
    const { quizTostartObject } = useGlobalContext();
    

    useEffect(() => {
        if (quizTostartObject && quizTostartObject.setSelectQuizToStart) {
            quizTostartObject.setSelectQuizToStart(null);
        }
    }, [quizTostartObject]);

    return (
        <div>
            <Navbar />
            <QuizArea />
            {/* <QuizPage /> */}
        </div>
    );
};

export default Home;
