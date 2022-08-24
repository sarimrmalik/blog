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
    <footer className="flex flex-col 2xl:fixed 2xl:bottom-0 font-redhat w-full py-5 gap-y-5 text-gray-400 text-xs text-center align-baseline">
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
    </footer>
  );
}
