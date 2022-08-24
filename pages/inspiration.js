import Head from "next/head";

export default function inspiration() {
  return (
    <div className="ml-5 mt-5 mr-5 mx-auto max-w-2xl text-gray-500 font-redhat text-sm">
      <Head>
        <title>Inspiration | Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-black">Inspiration</div>
      <div className="mt-2">
        The design for this website is inpired by{" "}
        <a href="https://patrickcollison.com/" target="_blank">
          Patrick Collison
        </a>
        's website. I like to think of this space as a rolling document as I
        figure out my design choices.
      </div>
      {/* <div>
        The Note section at the end of every page is inspired by Paul Graham's
        website format. Having your friends review your work is a great way to
        make that final pass before publishing.
      </div>
      <div>Fabrizio Rinaldi</div> */}
    </div>
  );
}
