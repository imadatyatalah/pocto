import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";

import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/BlogLayout";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

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

export const getStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  return { props: { post } };
};

export default BlogPost;
