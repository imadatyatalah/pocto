import { NextSeo } from "next-seo";

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
        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
