import { redirect } from "next/navigation";

const fullname = "hosseinfalah";

export const GET = async () => {
    redirect(`http://localhost:3000/api/username/${fullname}`)
}