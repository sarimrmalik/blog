import Head from "next/head";

export default function hardware() {
  return (
    <div className="ml-5 mt-5 mr-5 mx-auto max-w-2xl text-gray-500 font-redhat text-sm">
      <Head>
        <title>Hardware | Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-black">Hardware</div>
      <div className="mt-2">
        I did my undergrad in Mechanical Engineering but I went through college
        focusing on grades. On paper, I might be considered a "good" student but
        I know that I am not a good engineer. Today, my theoretical knowledge of
        hardware-related subjects is subpar and I lack the confidence to build
        an end-to-end hardware project. Closer to my graduation, I made the plan
        to revise my undergrad education without the pressure of grades and
        optimize it for application.
      </div>

      <div className="mt-2">
        As a first pass, I thought going through the literature would make sense
        but I quickly realized I'd walk out the other side feeling the same way.
        My biggest concern with the state of my knowledge was the lack of
        practical knowledge. Thus, I decided to take on small, specialized
        projects to make up.
      </div>
      <div className="mt-2">
        In this section you'll find me documenting projects I am currently
        working on or plan on undertaking. Currently, I want to build a simple
        control system, perhaps for a moving vehicle. Heavily inspried by a
        course,{" "}
        <a
          href="https://www.mcgill.ca/study/2021-2022/fr/courses/mech-412"
          target="_blank"
        >
          Control Systems
        </a>
        , that I took in my last semester at{" "}
        <a href="https://www.mcgill.ca/" target="_blank">
          McGill
        </a>
        . Eventually I want to take on more challenging projects. One of my life
        goals is to build a state-of-the-art tech lab of sorts somewhere at the
        intersection of the{" "}
        <a href="https://en.wikipedia.org/wiki/Batcave" target="_blank">
          Batcave
        </a>
        ,{" "}
        <a href="https://en.wikipedia.org/wiki/Stark_Tower" target="_blank">
          Stark Tower
        </a>
        , and Casey Neistat's{" "}
        <a href="https://www.youtube.com/watch?v=vb60rrtTddQ" target="_blank">
          NYC studio
        </a>
        . That would be sick.
      </div>
    </div>
  );
}
