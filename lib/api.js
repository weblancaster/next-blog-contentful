const BLOG_POST_GRAPHQL_FIELDS = `
sys {
  id
}
image {
  url
}
post,
description,
date,
title,
slug
`;

async function fetchGraphQL(query, preview = false) {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const data = await response.json();

    if (data.errors) {
      console.error(data.errors);
      throw new Error("Failed to fetch API", data.errors);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

function extractBlogPost(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
}

function extractBlogPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items;
}

export async function getPreviewBlogPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractBlogPost(entry);
}

export async function getAllBlogPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractBlogPostEntries(entries);
}

export async function getAllBlogPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractBlogPostEntries(entries);
}

export async function getBlogPostAndMoreBlogPosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    post: extractBlogPost(entry),
    morePosts: extractBlogPostEntries(entries),
  };
}

export async function getAboutMe(preview = false) {
  const entries = await fetchGraphQL(
    `query {
      aboutCollection {
        items {
          content
        }
      }
    }`,
    preview
  );

  return entries?.data?.aboutCollection?.items;
}
