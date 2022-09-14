import React from "react";
import Link from "next/link";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:fixed bottom-0 bg-white dark:bg-black bg-opacity-90 font-ibm w-full py-3 2xl:py-5 text-center">
      <div className="flex justify-center gap-x-5">
        <button className="btn">
          <Link href="mailto:sarimrasheed@gmail.com">
            <EnvelopeClosedIcon className="icon" />
          </Link>
        </button>
        <button className="btn">
          <Link href="https://twitter.com/sarimrmalik">
            <TwitterLogoIcon className="icon" />
          </Link>
        </button>
        <button className="btn">
          <Link href="https:/github.com/sarimrmalik">
            <GitHubLogoIcon className="icon" />
          </Link>
        </button>
        <button className="btn">
          <Link href="https://www.linkedin.com/in/sarimmalik/">
            <LinkedInLogoIcon className="icon" />
          </Link>
        </button>
      </div>
      <p className="text-sm">
        The design of this website is inspired by{" "}
        <a className="text-sm" href="https://leerob.io/">
          Lee Robinson's
        </a>
        .
      </p>
    </footer>
  );
}
