import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1>Hello World!</h1>
      <Link href="/users">Go to Users Page</Link>
    </main>
  );
}
