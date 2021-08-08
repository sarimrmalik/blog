import Head from "next/head";

export default function contact() {
  return (
    <div className="ml-5 mt-5 mr-5 mx-auto max-w-2xl text-gray-500 font-body text-sm">
      <Head>
        <title>Contact | Sarim Malik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-black">Contact</div>
      <div className="mt-2">
        <a href="mailto:sarimrasheed@gmail.com" target="_blank">
          Email
        </a>
        ,{" "}
        <a href="https://twitter.com/sarimrmalik" target="_blank">
          Twitter
        </a>
        , and{" "}
        <a href="https://www.linkedin.com/in/sarimmalik/" target="_blank">
          LinkedIn
        </a>
        .{" "}
      </div>
    </div>
  );
}
