import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { pick } from "@contentlayer/client";
import { allBlogs, allAuthors } from ".contentlayer/data";

import AuthorPage from "@/modules/author/AuthorPage";

import type { Author } from ".contentlayer/types";

type Props = {
  author: Author;
  posts: any;
};

const Author: NextPage<Props> = ({ author, posts }) => {
  return <AuthorPage author={author} posts={posts} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allAuthors.map((author) => ({
      params: { author: author.authorname },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const author = allAuthors.find(
    (author) => author.authorname === params.author
  );

  const posts = allBlogs
    .map((post) =>
      pick(post, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "image",
        "author",
        "readingTime",
      ])
    )
    .filter((post) => post.author.authorname === params.author);

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { author, posts: sortedPosts } };
};

export default Author;
