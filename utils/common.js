import Link from "next/link";
import styles from "../utils/post.module.css";
import React, { Fragment } from "react";

// Parse dates from a variety of formats to a more readable format
export const parsedDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

// Render text dynamically
export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={i}
        className={[
          bold ? "font-bold" : "",
          code ? "font-mono bg-gray-200 py-1 px-2 rounded-md text-red-700" : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? (
          <Link href={text.link.url}>{text.content}</Link>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

// Render blocks dynamically
export const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="font-secondary">
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <div className="text-3xl font-bold font-primary mb-3">
          <Text text={value.rich_text} />
        </div>
      );
    case "heading_2":
      return (
        <div className="text-2xl font-semibold font-primary mb-2">
          <Text text={value.rich_text} />
        </div>
      );
    case "heading_3":
      return (
        <div className="text-xl font-semibold font-primary mb-1">
          <Text text={value.rich_text} />
        </div>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li className="font-secondary pl-4">
          <Text text={value.rich_text} />
        </li>
      );
    case "to_do":
      return (
        <div className="pl-3">
          <label htmlFor={id} className="font-secondary space-x-2.5">
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary className="font-secondary font-semibold hover:bg-gray-100 py-1 pl-1.5 cursor-pointer">
            <Text text={value.rich_text} />
          </summary>
          <div className="pl-6">
            {value.children?.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </div>
        </details>
      );
    case "child_page":
      return <p className="text-red-600">404 Error</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <div className="pt-4 pb-8">
          <div className="rounded-lg transition duration-1000 hover:scale-105 hover:backdrop-glow">
            <img src={src} alt={caption} width="100%" className="rounded-lg" />
          </div>
          <p className="text-gray-500 text-sm pt-2">{caption}</p>
        </div>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className="bg-gray-100 p-2 rounded-lg">
          <code className="flex p-2 font-mono text-gray-600" key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
        </a>
      );
    default:
      return `404 Error (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};
