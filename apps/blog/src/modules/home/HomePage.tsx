import { Grid, Heading } from "@pocto/core";
import { NextSeo } from "next-seo";

import type { Blog } from ".contentlayer/types";

import BlogPost from "@/components/BlogPost";

interface Props {
  posts: Pick<
    Blog,
    | "slug"
    | "title"
    | "summary"
    | "publishedAt"
    | "image"
    | "author"
    | "readingTime"
  >[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <>
      <NextSeo title="Home" />

      <section>
        <Heading>Home</Heading>

        <Grid
          columns={{ "@sm": "2", "@lg": "3", "@xl": "4" }}
          gap="4"
          css={{ my: 14 }}
        >
          {posts.map((post) => (
            <BlogPost post={post} key={post.slug} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default HomePage;
