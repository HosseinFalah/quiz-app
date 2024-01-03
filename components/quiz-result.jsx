import Link from "next/link";

const QuizResult = ({ result, questions }) => {
    return (
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
    )
}

export default QuizResult