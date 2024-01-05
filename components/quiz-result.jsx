import Link from "next/link";

const QuizResult = ({ result, questions, dict }) => {
    return (
        <div className="flex flex-col gap-y-3 p-4 dark:text-white">
            <h3 className="text-3xl font-semibold">{dict['quiz'].result}</h3>
            <h3 className="text-xl font-medium mt-6">{dict['quiz'].resultScoreMsg1} {(result.score / 25) * 100}% {dict['quiz'].resultScroreMsg2}</h3>
            <p className="text-sm font-medium text-zinc-300">{dict['quiz'].quizCount}: {questions.length}</p>
            <p className="text-sm font-medium text-zinc-300">{dict['quiz'].quizScore}: {result.score}</p>
            <p className="text-sm font-medium text-zinc-300">{dict['quiz'].quizCorrect}: {result.correctAnswers}</p>
            <p className="text-sm font-medium text-zinc-300">{dict['quiz'].quizWrong}: {result.wrongAnswers}</p>
            <Link href={`/`} className="dark:bg-indigo-500 block text-center dark:text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700">
                {dict['quiz'].quizRestart}
            </Link>
        </div>
    )
}

export default QuizResult