"use client";

import { useCallback, useState } from "react";

import { quiz } from "../constants/data";
import { QuizAnswers, QuizButtons, QuizResult } from "@/components";

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });
    
    const { questions } = quiz;
    const { answers, correctAnswer }  = questions[activeQuestion]
    // Select And Check

    const handleAnswerSelected = useCallback((answer, index) => {
        setChecked(true);
        setSelectedAnswerIndex(index);
        
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    }, [answers])

    // Calculate Score and Increment to next question
    const handleNextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult(prev => selectedAnswer ? 
            {...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1}
            : 
            {...prev, wrongAnswers: prev.wrongAnswers + 1}
        );

        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev +  1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }

        setChecked(false);
    }

    return (
        <main className="min-h-screen bg-indigo-900">
            <div className="lg:max-w-screen-lg m-auto px-4 lg:px-0">
                <h1 className="dark:text-white text-3xl font-bold pt-10">صفحه آزمون</h1>
                <div className="mt-8">
                    {!showResult ? (
                        <h2 className="text-xl font-medium text-white">آزمون: {activeQuestion + 1} از {questions.length}</h2>
                    ) : null}
                </div>
                <div className="dark:bg-zinc-700 drop-shadow-2xl rounded-xl mt-10">
                    {!showResult ? (
                        <div className="p-4">
                            <h3 className="dark:text-white text-2xl font-medium">{questions[activeQuestion].question}</h3>
                                <ul className="mt-4">
                                    <QuizAnswers 
                                        answers={answers}
                                        handleAnswerSelected={handleAnswerSelected}
                                        selectedAnswerIndex={selectedAnswerIndex}
                                    />
                                </ul>
                            <div className="grid">
                                <QuizButtons 
                                    activeQuestion={activeQuestion}
                                    checked={checked}
                                    handleNextQuestion={handleNextQuestion}
                                    questions={questions}
                                />
                            </div>
                        </div>
                    ) : (
                        <QuizResult 
                            result={result}
                            questions={questions} 
                        />
                    )}
                </div>
            </div>
        </main>
    )
}

export default Quiz;