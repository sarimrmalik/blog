import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import projects from "../data/projects";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { getDatabase } from "../utils/notion";
import { parsedDate } from "../utils/common";
import { MoonIcon } from "@radix-ui/react-icons";
import { useGlobalContext } from "../utils/context";

export default function Home({ blogs }) {
  const { darkMode, setDarkMode } = useGlobalContext();
  const router = useRouter();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content="Hey! I'm Sarim." />
        <meta
          property="og:image"
          content="https://sarimmalik.com/preview.png"
        />
      </Head>

      <main
        className={`max-w-screen min-h-screen dark:bg-black overflow-x-clip font-ibm`}
      >
        <header className="absolute top-0 right-0 p-10">
          <button
            className="btn-primary"
            onClick={() => setDarkMode((val) => !val)}
          >
            <MoonIcon className="icon" />
          </button>
        </header>
        <div className="flex justify-center py-20">
          <div className="text-gray-400 max-w-2xl p-5">
            <div className="flex flex-col space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row justify-between">
              <div className="mt-2 w-full text-gray-700">
                <h1 className="pb-4">Sarim Malik</h1>
                <p>
                  I'm a mechanical engineer, software developer, and aspiring
                  designer. I grew up in Islamabad and currently live in
                  Toronto. In the past, I've worked at{" "}
                  <a href="https://www.ea.com/" target="_blank">
                    EA
                  </a>
                  ,{" "}
                  <a href="https://www.citi.com/" target="_blank">
                    Citi
                  </a>
                  , and{" "}
                  <a href="https://www.pwc.ca/en/" target="_blank">
                    Pratt &amp; Whitney
                  </a>{" "}
                  in data-centric roles. Currently, I am building{" "}
                  <a href="https://neat.run/" target="_blank">
                    Neat
                  </a>
                  .
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  alt="Avatar"
                  src="/profile.jpeg"
                  width="200"
                  height="200"
                  quality={100}
                  className="rounded-full filter saturate-0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-5 mt-5">
              <h2>Featured Projects</h2>
              <div className="flex flex-col sm:grid sm:grid-cols-3 sm:divide-x gap-3 border-none">
                {projects.map((project, i) => (
                  <div key={i} className="border-none">
                    <Card
                      i={i}
                      title={project.title}
                      description={project.description}
                      url={project.url}
                      users={project.users}
                    />
                  </div>
                ))}
              </div>

              <h2>Notes</h2>
              <div className="flex flex-col space-y-2">
                {blogs.map((blog, i) => (
                  <div key={i} className="flex w-full justify-between py-2">
                    <div className="flex gap-8">
                      <p className="opacity-60">{`0${i + 1}`}</p>
                      <button
                        className="text-blue-500 hover:text-blue-600 hover:underline text-lg"
                        onClick={() => router.push(`/${blog.slug}`)}
                      >
                        {blog.title}
                      </button>
                    </div>

                    <p className="invisible sm:visible">
                      {parsedDate(blog.date ?? "")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Fetch data for all blog entries from database
export async function getStaticProps() {
  if (!process.env.NOTION_DATABASE_ID) {
    return {
      notFound: true,
    };
  }

  const response = await getDatabase(process.env.NOTION_DATABASE_ID);
  if (!response) {
    return {
      notFound: true,
    };
  }

  // Parse to useful properties
  const blogs = response.map((blog) => {
    return {
      id: blog.id,
      title: blog.properties.Title.title[0].plain_text,
      date: blog.properties["Date published"].date.start,
      slug: blog.properties["Slug"].rich_text[0].plain_text,
    };
  });

  return {
    props: {
      blogs: blogs,
    },
    revalidate: 10,
  };
}
