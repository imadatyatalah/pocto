import type { NextPage, GetStaticPaths, InferGetStaticPropsType } from "next";

import { allBlogs, allAuthors } from "contentlayer/generated";

import type { Author } from "contentlayer/generated";

import { BlogPostData, sortPostsByDate } from "@/lib/blogPost";
import AuthorPage from "@/modules/author/AuthorPage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

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

export const getStaticProps = async ({ params }) => {
  const author = allAuthors.find(
    (author) => author.authorname === params.author
  );

  const posts = allBlogs
    .map((post) => BlogPostData(post))
    .filter((post) => post.author.authorname === params.author);

  const sortedPosts = sortPostsByDate(posts);

  return { props: { author, posts: sortedPosts } };
};

export default Author;
