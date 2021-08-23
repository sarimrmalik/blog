import Head from "next/head";

import Link from "../components/Link";
import navLinks from "../data/navLinks";
import about from "./about";
import memes from "./memes";
import quotes from "./quotes";
import insight from "./insight";
import inspiration from "./inspiration";
import contact from "./contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-800 font-body">
      <Head>
        <title>Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-auto">
        <div className="pl-5 pt-5 content-center items-center font-bold text-gray-200">
          Sarim Malik
        </div>
        <div className="pl-5 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-medium text-gray-400 hover:text-gray-600 no-underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="pl-5 pt-10 flex">
          <Link
            key={"Contact"}
            href={"/contact"}
            className="font-medium text-gray-400 hover:text-gray-600 no-underline"
          >
            Contact
          </Link>
        </div>

        {/* <div id="container" height="200">
          <div id="navi" className="text-white">
            <div className="pl-5 pt-5 content-center items-center font-bold text-gray-200">
              Sarim Malik
            </div>
          </div>
          <div
            className="flex justify-end items-end p-10 text-white"
            id="infoi"
          >
            <iframe
              src="https://my.spline.design/planetringcopy-729d12c0ba991349fe006729f10cc7c0/"
              frameborder="0"
              height="465px"
              width="470px"
              scrolling="no"
              allowFullScreen
            ></iframe>
            b
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
