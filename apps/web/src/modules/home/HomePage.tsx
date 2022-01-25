import { NextSeo } from "next-seo";
import { Heading } from "ui";

import PostForm from "@/components/PostForm/PostForm";
import Post from "@/components/post/Post";

import type { TPost, TCurrentUser } from "@/types/index";

type Props = {
  posts?: TPost[];
  currentUser?: TCurrentUser;
};

const HomePage = ({ posts, currentUser }: Props) => {
  return (
    <>
      <NextSeo title="Home" />

      <section>
        <Heading as="h1">Home</Heading>

        {currentUser ? <PostForm /> : null}

        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
