import React, { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../utils/notion";
import { Text, renderBlock, parsedDate } from "../utils/common";
import Footer from "../components/Footer";

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }

  // Create readable names for props
  const title = page.properties.Title.title ?? null;
  const date = page.properties["Date published"].date.start ?? null;
  const slug = page.properties["Slug"].rich_text[0].plain_text ?? null;
  const formattedDate = parsedDate(date ?? "");

  return (
    <div>
      <Head>
        <title>{`Blog — ${title[0].plain_text}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={"Hey! I'm Sarim. This is my personal website."}
        />
        <meta
          property="og:image"
          content="https://sarimmalik.com/preview.png"
        />
      </Head>

      <div className="max-w-3xl min-h-screen px-4 mx-auto pt-16 sm:pt-32 font-ibm">
        {/* Title and published date */}
        <div className="space-y-4">
          <h1>
            <Text text={title} />
          </h1>
          <h3>{formattedDate}</h3>

          {/* Sections */}
          <section className="space-y-3">
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID);
  return {
    paths: database.map((page) => ({
      params: { slug: page.properties.Slug.rich_text[0].plain_text },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  if (!process.env.NOTION_DATABASE_ID) {
    return {
      notFound: true,
    };
  }

  const { slug } = context.params;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const database = await getDatabase(process.env.NOTION_DATABASE_ID);
  const page = await getPage(database, slug);
  const blocks = await getBlocks(page.id);

  // Retrieve block children for nested blocks (one level deep)
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 10,
  };
};
