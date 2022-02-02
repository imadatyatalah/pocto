import { Heading, Box } from "ui";
import { NextSeo } from "next-seo";

import PostForm from "@/components/PostForm/PostForm";
import Post from "@/components/post/Post";
import HeroSection from "./HeroSection";

import type { TPost, TCurrentUser } from "@/types/index";

type Props = {
  posts?: TPost[];
  currentUser?: TCurrentUser;
};

const HomePage = ({ posts, currentUser }: Props) => {
  return (
    <>
      <NextSeo title="Home" />

      <Box as="section">
        {!currentUser ? <HeroSection /> : null}

        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            "@lg": { display: "grid", gridTemplateColumns: "1fr 0.5fr" },
          }}
        >
          <Box css={{ width: "$full" }}>
            <Heading as="h2">Home</Heading>

            {currentUser ? <PostForm /> : null}

            {posts?.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </Box>

          <Box
            css={{
              display: "none",
              "@lg": { display: "block" },
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
