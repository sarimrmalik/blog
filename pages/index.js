import Head from "next/head";
import Image from "next/image";
import projects from "../data/projects";
import Card from "../components/Card";
import Footer from "../components/Footer";
import CursorBlob from "../components/CursorBlob";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-redhat">
        <CursorBlob />
        <div className="flex flex-col p-5 gap-y-5 items-center">
          <Image
            alt="Avatar"
            src="/profile.jpeg"
            width="200"
            height="200"
            quality={100}
            className="rounded-full"
          />
          {/* <h1 className="font-semibold text-xl text-gray-500">Sarim Malik</h1> */}
        </div>

        <div className="flex justify-center">
          <div className="text-gray-400 w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5">
            <div className="mt-2">
              Hey! I'm <b>Sarim</b>. I'm a self-taught developer & mechanical
              engineer. I grew up in Islamabad, did my undergrad in Montreal at{" "}
              <a href="https://www.mcgill.ca/" target="_blank">
                McGill University
              </a>{" "}
              and currently live in Toronto. I love building cool shit and
              vibing with the homies. In the past, I've had stints at companies
              like{" "}
              <a href="https://www.ea.com/" target="_blank">
                EA
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
            <div className="mt-2">Check out some of my public projects.</div>
            <div className="flex flex-col gap-y-5 mt-5">
              {projects.map((project, i) => (
                <div key={i}>
                  <Card
                    title={project.title}
                    description={project.description}
                    url={project.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
