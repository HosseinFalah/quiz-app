const QuizButtons = ({ checked, handleNextQuestion, activeQuestion, questions }) => {
    return checked ? (
        <button 
            className="dark:bg-indigo-600 dark:text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700" 
            onClick={handleNextQuestion}
        >
                {activeQuestion === questions.length - 1 ? 'پایان' : 'بعدی'}
            </button>
        ) : (
            <button 
                className="dark:bg-indigo-400 dark:text-white py-2 rounded-lg disabled:opacity-60" 
                onClick={handleNextQuestion} 
                disabled
            >
                {activeQuestion === questions.length - 1 ? 'پایان' : 'بعدی'}
            </button>
        )
}

export default QuizButtons