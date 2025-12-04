import { FaBehance, FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import GetInTouch from "@/components/get-in-touch";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

function MainFooter() {
    const text = "Hey there! I came across your portfolio, and I must say—it's absolutely incredible! Let’s connect!"
    return (
        <footer className="dark:bg-[#101010] bg-slate-200 px-4 py-20 pb-6 mt-16 relative overflow-hidden">
            <div className="max-w-96">
                <div className={`text-2xl font-bold [font-family:var(--font-roboto)]`}>vanguard</div>
                <p className={`font-light text-lg leading-normal mt-4`}>I believe in the power of Development to transform businesses. I Have a Great experience in Development.</p>
                <div className="flex flex-row gap-6 mt-10">
                    <Link href="https://x.com/ahmadkhidir_" target="_blank"><BsTwitterX size={28} /></Link>
                    {/* <Link href=""><FaFacebook size={28} /></Link> */}
                    <Link href="https://www.linkedin.com/in/ahmad-khidir" target="_blank"><FaLinkedin size={28} /></Link>
                    <Link href="https://www.instagram.com/ahmadkhidir__" target="_blank"><FaInstagram size={28} /></Link>
                    <Link href={`https://wa.me/9012716734?text=${text}`} target="_blank"><FaWhatsapp size={28} /></Link>
                    {/* <Link href="#"><FaDribbble size={28} /></Link> */}
                </div>
            </div>
            <GetInTouch />
            <p className={`sm:text-sm text-xs text-center`}>© Copyright 2025 | Design & Developed By <span className="text-blue-600">Ahmad Khidir</span></p>
            <div
                className="absolute sm:w-[600px] w-[300px] sm:h-[600px] h-[300px] sm:left-[calc(50%-300px)] left-[calc(50%-150px)] -translate-y-1/2 bg-[radial-gradient(circle,#2563eb33,transparent_70%)] rounded-full" />
        </footer>
    )
}

export default MainFooter