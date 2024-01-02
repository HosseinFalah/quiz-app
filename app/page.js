import Link from "next/link";

const Home = () => {
    return (
        <main className="min-h-screen bg-indigo-900">
            <div className="lg:max-w-screen-lg m-auto">
                <h1 className="dark:text-white text-3xl font-bold pt-10">اپلیکیشن Quiz</h1>
                <Link href={`/quiz`} className="dark:bg-indigo-400 block text-center w-full mt-8 py-2.5 
                dark:text-white rounded-lg transition-all duration-300 ease-in-out hover:dark:bg-indigo-500">شروع آزمون</Link>
            </div>
        </main>
    )
}

export default Home;