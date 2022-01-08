import { NextSeo } from "next-seo";
import { Heading } from "ui";

import Post from "@/components/post/Post";

import type { TPost } from "@/types/index";

type Props = {
  posts?: TPost[];
};

const HomePage = ({ posts }: Props) => {
  return (
    <>
      <NextSeo title="Home" />

      <section>
        <Heading as="h1">Home</Heading>

        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
