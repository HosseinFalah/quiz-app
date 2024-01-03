import { Suspense } from "react";
import Loading from "@/app/quiz/loading";

const QuizAnswers = ({ answers, handleAnswerSelected, selectedAnswerIndex }) => {
    return answers.map((answer, index) => (
            <li 
                key={index} 
                onClick={() => handleAnswerSelected(answer, index)} 
                className={`${selectedAnswerIndex === index ? 
                    'border border-zinc-500 bg-blue-600 rounded p-2 my-4' 
                    :
                    'border border-zinc-500 rounded p-2 my-4 transition-all duration-300 ease-in-out hover:bg-zinc-500'}`}
            >
                <Suspense fallback={<Loading count={1}/>}>
                    <p className="dark:text-white">
                        {answer}
                    </p>
                </Suspense>
            </li>
        )
    )
}

export default QuizAnswers