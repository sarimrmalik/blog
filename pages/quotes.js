import Head from "next/head";

export default function quotes() {
  return (
    <div className="ml-5 mt-5 mr-5 mx-auto max-w-2xl text-gray-500 font-body text-sm">
      <Head>
        <title>Quotes | Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-black">Quotes</div>
      <div>
        <div className="mt-2">
          A calm and modest life brings more happiness than the constant pursuit
          of success combined with constant restlessness.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Albert_Einstein"
            target="_blank"
            className="italic text-gray-400"
          >
            Albert Einstein
          </a>
        </div>
        <div className="mt-2">
          You will continue to suffer if you have an emotional reaction to
          everything that is said to you. True power is sitting back and
          observing things with logic... Breathe in and allow things to pass.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Warren_Buffett"
            target="_blank"
            className="italic text-gray-400"
          >
            Warren Buffet
          </a>
        </div>
        <div className="mt-2">
          Engineers ... are not superhuman. They make mistakes in their
          assumptions, in their calculations, in their conclusions. That they
          make mistakes is forgivable; that they catch them is imperative. Thus
          it is the essence of modern engineering not only to be able to check
          one's own work but also to have one's work checked and to be able to
          check the work of others.”{" "}
          <a
            href="https://en.wikipedia.org/wiki/Henry_Petroski"
            target="_blank"
            className="italic text-gray-400"
          >
            Henry Petroski
          </a>
        </div>
        <div className="mt-2">
          Your mistake is that you’re writing to be read.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Naval_Ravikant"
            target="_blank"
            className="italic text-gray-400"
          >
            Naval Ravikant
          </a>
        </div>
        <div className="mt-2">
          Listen to understand, instead of listening to respond.{" "}
          <a target="_blank" className="italic text-gray-400">
            Anonymous
          </a>
        </div>
      </div>
    </div>
  );
}
