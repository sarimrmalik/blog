import { Client } from "@notionhq/client";

// Create client
export const notion = new Client({
  auth: process.env.NOTION_API_KEY ?? "",
});

// Get data from database
export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "Date published",
        direction: "descending",
      },
    ],
  });
  return response.results;
};

// Get data for a page
export const getPage = async (database, slug) => {
  const response = await database.find((page) => {
    return page.properties.Slug.rich_text[0].plain_text === slug;
  });
  return response;
};

// Get blocks info
export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
