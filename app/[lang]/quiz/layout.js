import { getLangs } from "../langs"
import Quiz from "./page"

const Layout = async ({ params }) => {
    const dict = await getLangs(params.lang);
    return (
        <div>
            <Quiz dict={dict} lang={params.lang}/>
        </div>
    )
}

export default Layout