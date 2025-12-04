import Link, {LinkProps as LP} from 'next/link'
import React from 'react'
import { MdArrowForward } from 'react-icons/md'


type LinkProps = LP & React.RefAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode | undefined;
}

export function ArrowLink(props: LinkProps) {
    return (
        <Link {...props} className={`group uppercase font-semibold sm:text-lg text-base pl-12 pr-4 h-10 sm:h-12 w-fit relative flex items-center`}>
            <span className="absolute -z-10 w-10 sm:w-12 rounded-3xl group-hover:w-full h-full left-0 bg-blue-600 transition-all flex items-center pl-3"><MdArrowForward className="text-lg sm:text-2xl" /></span>
            <span className="ml-0 sm:ml-2">{props.children}</span>
        </Link>
    )
}

export function ArrowFilledLink(props: LinkProps) {
    return (
        <Link {...props} className={`group uppercase font-semibold sm:text-lg text-base px-3 py-2 pr-4 w-fit relative flex items-center`}>
            <span className="absolute -z-10 rounded-[34px] w-full h-full left-0 dark:bg-[#15131a] bg-slate-200 dark:group-hover:bg-white group-hover:bg-[#15131a] transition-all flex items-center pl-3"/>
            <span className="dark:group-hover:text-[#15131a] group-hover:text-white flex flex-row items-center gap-2">
                <span className='bg-blue-600 p-3 rounded-full'><MdArrowForward className="text-lg sm:text-2xl" /></span>
                {props.children}</span>
        </Link>
    )
}
