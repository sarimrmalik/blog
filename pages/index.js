import Head from "next/head";
import Link from "../components/Link";
import navLinks from "../data/navLinks";

import about from "./about";
import memes from "./memes";
import quotes from "./quotes";
import insight from "./insight";
import inspiration from "./inspiration";
import contact from "./contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="ml-5 mt-5 content-center items-center font-bold">
          Sarim Malik
        </div>
        <div className="ml-5">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex font-medium text-gray-400 hover:text-gray-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="ml-5 mt-10 flex font-medium text-gray-300 hover:text-gray-600">
          <Link key={"Contact"} href={"/contact"}>
            Contact
          </Link>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
