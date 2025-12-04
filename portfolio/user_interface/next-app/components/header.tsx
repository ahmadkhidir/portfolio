import Link from "next/link";
import { ArrowLink } from "@/components/link";


function MainHeader() {
    return (
        <header className="main-header py-10 px-4 flex flex-row items-center justify-between">
            <Link href="/" className={`text-2xl font-bold [font-family:var(--font-roboto)]`}>vanguard</Link>
            <nav className="space-x-8 sm:block hidden">
                <Link href="/projects" className={`uppercase font-extralight text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black transition-all`}>Projects</Link>
                <span className={`text-gray-600 text-lg`}>/</span>
                <Link href="/articles" className={`uppercase font-extralight text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black transition-all`}>Articles</Link>
            </nav>
            <nav>
                <ArrowLink href="/contact">Hire Me</ArrowLink>
            </nav>
            
            {/* <nav className="fixed">
            </nav> */}
        </header>
    )
}

export default MainHeader