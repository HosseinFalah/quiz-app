import { cookies } from "next/headers";

export const GET = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    console.log(token.value);

    return new Response(`Token: => ${token && token.value}`, { 
        status: 200, 
        headers: { "Set-Cookie": `token=${token}` }
    });
}