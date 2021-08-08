import React from "react";

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-400 text-xs text-center align-baseline">
      Made in{" "}
      <a
        href="https://nextjs.org/"
        className="text-gray-300 hover:text-gray-100"
        target="_blank"
      >
        Next.js
      </a>
      , deployed on {""}
      <a
        href="https://vercel.com/"
        className="text-gray-300 hover:text-gray-100"
        target="_blank"
      >
        Vercel
      </a>
    </footer>
  );
}
