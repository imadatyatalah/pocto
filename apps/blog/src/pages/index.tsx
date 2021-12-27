import type { NextPage, InferGetStaticPropsType } from "next";

import { NextSeo } from "next-seo";
import { pick } from "@contentlayer/client";
import { allBlogs } from ".contentlayer/data";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <NextSeo title="Home" />

      <section></section>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image"])
  );

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts: sortedPosts } };
};

export default Home;
