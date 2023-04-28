import { Inter } from "next/font/google";
import Link from "next/link";
import Posts from "./components/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Khang</span>.
        </span>
      </p>
      <Posts />
    </main>

    // <main className={inter.className}>
    //   <h1 className="text-white">Hello World!</h1>
    //   <Link href="/users" className="text-white">
    //     Go to Users Page
    //   </Link>
    // </main>
  );
}
