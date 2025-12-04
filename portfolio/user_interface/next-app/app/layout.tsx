import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Manrope, Smooch_Sans } from "next/font/google";
import "swiper/css";
import "./globals.css";
import MainHeader from "@/components/header";
import MainFooter from "@/components/footer";
import ScrollAnimation from "@/components/scroll-animation";
import { OverlayNav } from "@/components/overlay";
import { ContextProvider } from "./provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Smooch_Sans({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Ahmad Khidir",
  description: "Welcome to Ahmad Khidir's Portfolio! A Software Engineer passionate about building scalable, efficient solutions that spark innovation and deliver real impact.",
  keywords: ["Ahmad Khidir", "Full Stack Developer", "Software Engineer", "AI/ML", "Mobile Developer", "React", "Next.js", "TypeScript", "FastAPI", "Django", "Node.js"],
  authors: [{ name: "Ahmad Khidir" }],
  creator: "Ahmad Khidir",
  openGraph: {
    title: "Ahmad Khidir - Software Engineer",
    description: "Welcome to Ahmad Khidir's Portfolio! A Software Engineer passionate about building scalable, efficient solutions that spark innovation and deliver real impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${manrope.variable} ${anton.variable} ${roboto.variable} antialiased *:overflow-x-hidden`}
      >
        <div
          className="absolute -z-10 sm:w-[600px] w-[300px] sm:h-[600px] h-[300px] sm:left-[calc(50%-300px)] left-[calc(50%-150px)] -translate-y-1/3 bg-[radial-gradient(circle,#2563eb33,transparent_70%)] rounded-full" />
          <ContextProvider>
            <MainHeader />
            {children}
            <MainFooter />
            <OverlayNav />
            {/* <ScrollAnimation /> */}
          </ContextProvider>
      </body>
    </html>
  );
}
