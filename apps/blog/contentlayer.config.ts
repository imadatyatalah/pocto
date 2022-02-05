import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { ComputedFields } from "contentlayer/source-files";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },

  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
    author: { type: "reference", of: Author, embedDocument: true },
  },
  computedFields,
}));

const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: "authors/*.md",
  bodyType: "none",
  fields: {
    name: { type: "string", required: true },
    authorname: { type: "string", required: true },
    bio: { type: "string", required: true },
    twitterUrl: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Author],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
