import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Card = ({ index, title, description, url, image }) => {
  return (
    <div key={index}>
      <a className="opacity-100 hover:opacity-100" href={url}>
        <div className="flex flex-col relative group bg-purple-50 w-full p-5 rounded-xl">
          <button className="absolute right-0 top-0 btn opacity-0 group-hover:opacity-100">
            <ArrowTopRightIcon />
          </button>
          <div className="flex flex-col gap-y-2">
            <img alt="Avatar" src={image} className="rounded-lg w-full h-80" />
            <div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
