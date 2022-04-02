import { Grid, Heading } from "@pocto/core";
import { NextSeo } from "next-seo";

import BlogPost from "@/components/BlogPost";

import type { TBlogPost } from "@/lib/blogPost";

interface Props {
  posts: TBlogPost[];
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
