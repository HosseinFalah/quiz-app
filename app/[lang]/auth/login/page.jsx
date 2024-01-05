"use client";

import Link from "next/link";

import { useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
    const router = useRouter();
    const [error, setError] = useState('');

    const username = useRef("");
    const password = useRef("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/fa/quiz';

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const result = await signIn('credentials', {
                username: username.current,
                password: password.current,
                redirect: false,
                callbackUrl
            });

            console.log(result);

            if (!result?.error) {
                router.push(callbackUrl)
            } else {
                setError('نام کاربری یا کلمه عبور اشتباه می باشد دلبندم 😊');
            }
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className="min-h-screen bg-indigo-900 flex items-center justify-center">
            <div className="xl:max-w-screen-xl m-auto px-4 xl:px-0 w-full">
                <div className="">
                    <form 
                        className="max-w-2xl bg-zinc-700 drop-shadow-2xl rounded-2xl p-6 m-auto" 
                        autoComplete="off"
                        onSubmit={handleSubmit}>
                        {error && (
                            <p className="text-center bg-red-500 text-white font-semibold py-4 mb-6 rounded">{error}</p>
                        )}
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-2xl xl:text-3xl font-semibold text-white">ورود</h2>
                            <Link href={`/auth/register`} className="font-medium text-white">حساب کاربری ندارید؟ <span className="text-primary font-semibold">ثبت نام</span></Link>
                        </div>
                        <div className="flex flex-col gap-y-4 pt-5">
                            <label htmlFor="username" className="text-white font-semibold text-lg">نام کاربری:</label>
                            <input 
                                type="text" 
                                id="username" 
                                className="bg-zinc-600 text-white rounded-lg focus:outline-none p-2.5" 
                                ref={username}
                                onChange={e => (username.current = e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-y-4 pt-5">
                            <label htmlFor="password" className="text-white font-semibold text-lg">کلمه عبور:</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="bg-zinc-600 text-white rounded-lg focus:outline-none p-2.5" 
                                ref={password}
                                onChange={e => (password.current = e.target.value)}
                            />
                        </div>
                        <div className="grid gap-y-4 mt-10">
                            <button type="submit" className="dark:bg-indigo-600 dark:text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700">ورود</button>
                            <Link href={`/`} className="dark:bg-indigo-600 text-center dark:text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-700">فراموشی رمز عبور</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login