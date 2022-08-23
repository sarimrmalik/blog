import React from "react";
import Link from "next/link";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col font-redhat w-full py-5 gap-y-5 text-gray-400 text-xs text-center align-baseline">
      <div className="flex justify-center gap-x-5">
        <button className="btn">
          <Link href="mailto:sarimrasheed@gmail.com">
            <EnvelopeClosedIcon />
          </Link>
        </button>
        <button className="btn">
          <Link href="https://twitter.com/sarimrmalik">
            <TwitterLogoIcon />
          </Link>
        </button>
        <button className="btn">
          <Link href="https://www.linkedin.com/in/sarimmalik/">
            <LinkedInLogoIcon />
          </Link>
        </button>
      </div>
    </footer>
  );
}
