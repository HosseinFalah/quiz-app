"use client";

import Link from "next/link";
import Image from "next/image";

import irFlag from "@/assets/ir.svg";
import usFlag from "@/assets/us.svg";
import { usePathname } from "next/navigation";

const locales = ['en-us', 'en', 'fa-ir', 'fa'];

const LocalSwitcher = () => {
    const pathName = usePathname();

    const redirectedPathName = (locale) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    }

    return (
        <div>
            <ul className="mx-auto inline-block">
                <li className="flex flex-row">
                    <Link href={redirectedPathName('en-us')}>
                        <Image 
                            src={usFlag}
                            className="m-2"
                            width={30}
                            height={30}
                            alt={"us flag"}
                        />
                    </Link>
                    <Link href={redirectedPathName('fa-ir')}>
                        <Image 
                            src={irFlag}
                            className="m-2"
                            width={30}
                            height={30}
                            alt={"ir flag"}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LocalSwitcher