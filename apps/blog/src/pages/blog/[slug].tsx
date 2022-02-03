import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";

import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/BlogLayout";

import type { Blog } from ".contentlayer/types";

type Props = { post: Blog };

const BlogPost: NextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component components={{ ...MDXComponents }} />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  return { props: { post } };
};

export default BlogPost;
