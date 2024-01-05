import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-indigo-900 gap-y-5">
            <h1 className="text-3xl font-bold text-red-500">Page is Not Found!😢</h1>
            <p className="text-white text-lg font-medium">Could not find requested resource</p>
            <Link 
                href="/" 
                className="bg-gradient-to-l to-red-400 from-red-600 transition-all duration-300 ease-in-out py-3 px-8 rounded-lg text-white">
                    Return Home
            </Link>
        </div>
    )
}

export default NotFound