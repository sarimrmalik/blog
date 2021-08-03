import Link from "../components/Link";
import Head from "next/head";
import Image from "next/image";

export default function about() {
  return (
    <div className="ml-5 mr-5 mt-5 mx-auto max-w-2xl text-gray-500">
      <Head>
        <title>About | Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-black">About</div>
      <div className="mt-3">Hi friends 👋🏽 </div>
      <div className="mt-2">
        I'm Sarim and I use this space to collect things (articles, quotes,
        projects) that I find interesting. My vision for this space is to
        function as a personal collection that can outlive me. I'd like to build
        a digital identity of sorts that I can use for reflection and leave it
        as a time capsule.
      </div>
      <div className="mt-2">
        For context, I am a mechanical engineering grad from{" "}
        <a href="https://www.mcgill.ca/" target="_blank">
          McGill University
        </a>
        . For the past 5 years I’ve lived in Montreal, Canada and recently moved
        to Toronto where I am currently building {""}
        <a href="https://neat.run/" target="_blank">
          Neat
        </a>{" "}
        with my friends from college. In the past, I've done data-centric roles
        at{" "}
        <a href="https://www.ea.com/" target="_blank">
          Electronic Arts (EA)
        </a>
        ,{" "}
        <a href="https://www.citi.com/" target="_blank">
          Citi
        </a>
        , and{" "}
        <a href="https://www.pwc.ca/en/" target="_blank">
          Pratt & Whitney
        </a>
        .
      </div>
      <div className="mt-2">
        These days I am brainstorming personal projects at the intersection of
        hardware and software. In my spare time, you'll find me cloning projects
        off of Github and reverse-engineering them. Not the most efficient way
        to learn but works really well for me, especially in terms of speed.
        Long term, I'd like to build the muscle memory that some prodigy devs
        have.
      </div>
      <div className="mt-2">
        Feel free to ping me about anything you find interesting here. Always
        happy to chat. If you'd like to reach out, check out the{" "}
        <Link key={"Contact"} href={"/contact"}>
          contact
        </Link>{" "}
        page.
      </div>
      <Image
        alt="Mountains"
        src="/Beijing.jpeg"
        width="500"
        height="375"
        quality={100}
        alt="Picture of author"
        className="flex items-center"
      />
      <div className="text-xs flex">
        <div className="font-bold">Note</div>
        <div className="ml-1">
          Thanks to my friend, Zara Amer, for reviewing drafts of this page.
        </div>
      </div>
    </div>
  );
}
