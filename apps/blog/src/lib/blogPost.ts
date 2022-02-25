import { pick } from "@contentlayer/client";

import type { Blog } from "contentlayer/generated";

export const BlogPostData = (post: Blog) =>
  pick(post, [
    "slug",
    "title",
    "summary",
    "publishedAt",
    "image",
    "author",
    "readingTime",
  ]);

export const sortPostsByDate = (posts: TBlogPost[]) =>
  posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

export type TBlogPost = Pick<
  Blog,
  | "slug"
  | "title"
  | "summary"
  | "publishedAt"
  | "image"
  | "author"
  | "readingTime"
>;
