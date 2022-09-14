import React from "react";

let colors = ["border-blue-500", "border-indigo-500", "border-purple-500"];

const Card = ({ i, title, description, url, users }) => {
  return (
    <div
      className={`flex flex-col p-3 border-4 ${colors[i]} h-full rounded-lg space-y-5 justify-between`}
    >
      <p>{description}</p>
      <div>
        <p className="text-xs">{`${users} users`}</p>
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
    </div>
  );
};

export default Card;
