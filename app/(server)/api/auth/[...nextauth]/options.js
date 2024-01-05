import CredentialsProviders from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export const options = {
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'نام کاربری',
                    type: 'text',
                    placeholder: 'نام کاربری'
                },
                password: {
                    label: 'کلمه عبور',
                    type: 'password',
                    placeholder: 'کلمه عبور'
                }
            },
            async authorize(credentials) {
                const user = {
                    id: 11, 
                    fullname: 'حسین فلاح', 
                    username: "hosseinfalah",
                    password: 'hossein1382'
                }

                if (credentials?.username === user.username && credentials?.password === user.password) {
                    return user;
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: '/app/[lang]/auth/login'
    }
}