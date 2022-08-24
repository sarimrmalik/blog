import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Card = ({ title, description, url }) => {
  return (
    <a className="opacity-100 hover:opacity-100" href={url}>
      <div className="flex flex-col relative group bg-gray-50 hover:bg-gray-100 transition-colors duration-500 ease-in-out w-full h-fit xl:h-40 justify-center p-5 rounded-xl">
        <button className="absolute right-0 top-0 btn opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <ArrowTopRightIcon className="icon" />
        </button>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col text-center xl:gap-y-4">
            <h2 className="text-2xl xl:text-4xl font-garamond">{title}</h2>
            <p className="xl:text-lg 2xl:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
