"use client";

import { useState } from "react";
import Link from "next/link";

import { quiz } from "../constants/data";

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
    const { answers, correctAnswer } = questions[activeQuestion];


    return (
        <main className="min-h-screen bg-indigo-900">
            <div className="lg:max-w-screen-lg m-auto">
                <h1 className="dark:text-white text-3xl font-bold pt-10">صفحه آزمون</h1>
                <div className="dark:bg-zinc-700 drop-shadow-2xl rounded-xl mt-10">
                    {!showResult ? (
                        <div className="p-4">
                            <h3 className="dark:text-white text-2xl font-medium">{questions[activeQuestion].question}</h3>
                            <ul className="mt-4">
                                {
                                    answers.map((answer, index) => (
                                        <li 
                                            key={index} 
                                            onClick={() => {}} 
                                            className={`${selectedAnswerIndex === index ? 
                                                'border border-zinc-500 rounded p-2 my-4' 
                                                :
                                                'border border-zinc-500 rounded p-2 my-4 transition-all duration-300 ease-in-out hover:bg-zinc-500'}`}
                                        >
                                            <p className="dark:text-white">{answer}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="grid">
                                {
                                    checked ? (
                                        <button 
                                            className="dark:bg-indigo-500 dark:text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700" 
                                            onClick={() => {}}
                                        >
                                                {activeQuestion === questions.length - 1 ? 'پایان' : 'بعدی'}
                                            </button>
                                        ) : (
                                            <button 
                                                className="dark:bg-indigo-500 dark:text-white py-2 rounded-lg disabled:opacity-70" 
                                                onClick={() => {}} 
                                                disabled
                                            >
                                                {activeQuestion === questions.length - 1 ? 'پایان' : 'بعدی'}
                                            </button>
                                        )
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-y-3 p-4 dark:text-white">
                            <h3 className="text-3xl font-semibold">نمایش نتایج</h3>
                            <h3 className="text-xl font-medium mt-6">به {(result.score / 25) * 100}% سوالات جواب داده شده</h3>
                            <p className="text-sm font-medium text-zinc-300">کل سوالات: {questions.length}</p>
                            <p className="text-sm font-medium text-zinc-300">کل امتیاز: {result.score}</p>
                            <p className="text-sm font-medium text-zinc-300">سوالات درست: {result.correctAnswers}</p>
                            <p className="text-sm font-medium text-zinc-300">سوالات غلط: {result.wrongAnswers}</p>
                            <Link href={`/`} className="dark:bg-indigo-500 block text-center dark:text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700">
                                شروع مجدد آزمون
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Quiz;