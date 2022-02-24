import { Heading, Box } from "@pocto/core";
import { useMediaQuery } from "@pocto/hooks";
import { NextSeo } from "next-seo";

import CommunitiesToJoinCard from "@/components/CommunitiesToJoinCard/CommunitiesToJoinCard";
import PostForm from "@/components/PostForm/PostForm";
import Post from "@/components/post/Post";
import HeroSection from "./HeroSection";

import type { TPost } from "@/types/index";

interface Props {
  posts?: TPost[];
  isLoggedIn: boolean;
}

const HomePage = ({ posts, isLoggedIn }: Props) => {
  /**
   * CommunitiesToJoinCard component will be shown only
   * on devices that is 1024px(lg) and larger
   */
  const isLargerThan1024px = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <NextSeo title="Home" />

      <Box as="section">
        {!isLoggedIn ? <HeroSection /> : null}

        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            "@lg": {
              display: "grid",
              gridTemplateColumns: "1fr 0.5fr",
              columnGap: "$4",
            },
          }}
        >
          <Box css={{ width: "$full" }}>
            <Heading>Home</Heading>

            {isLoggedIn ? <PostForm /> : null}

            {posts?.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </Box>

          <Box
            css={{
              display: "none",
              "@lg": { display: "block" },
            }}
          >
            {isLargerThan1024px ? <CommunitiesToJoinCard /> : null}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
