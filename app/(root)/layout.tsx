import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/core/Navbar";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import About from "@/components/core/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animesh Gupta",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="relative flex w-full flex-col bg-black items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"></p>
          {children}
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] "
            )}
          />
        </div>
        <About />
      </body>
    </html>
  );
}
