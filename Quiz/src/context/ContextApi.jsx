import React, { createContext, useContext, useEffect, useState } from 'react';
import QuizData from '../components/QuizData';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [selectQuizToStart, setSelectQuizToStart] = useState(null);

    useEffect(() => {
        setAllQuizzes(QuizData);
    }, []);

    return (
        <GlobalContext.Provider value={{ 
            allQuizzes, 
            setAllQuizzes, 
            quizToStartObject: { selectQuizToStart, setSelectQuizToStart } 
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
