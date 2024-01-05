'use client' // Error components must be Client Components
import { useEffect } from "react"

const Error = ({error, reset}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-indigo-900 flex items-center justify-center">
            <div className="lg:max-w-screen-lg m-auto px-4 lg:px-0">
                <h2 className="text-white text-3xl font-medium">مشکلی پیش امده😢</h2>
                <button 
                    onClick={() => reset()} 
                    className="dark:bg-indigo-600 dark:text-white py-2 px-6 mt-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700">
                        دوباره تلاش کن
                </button>
            </div>
        </div>
    )
}

export default Error