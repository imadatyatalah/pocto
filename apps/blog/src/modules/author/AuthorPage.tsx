import { NextSeo } from "next-seo";
import { Heading, Grid } from "ui";

import type { Author } from ".contentlayer/types";

import BlogPost from "@/components/BlogPost";

type Props = {
  author: Author;
  posts: any;
};

const AuthorPage = ({ author, posts }: Props) => {
  return (
    <>
      <NextSeo title={author.name} />

      <section>
        <Heading as="h1">{author.name}</Heading>

        <Grid
          columns={{ "@sm": "2", "@lg": "3", "@xl": "4" }}
          gap="4"
          css={{ my: 14 }}
        >
          {posts.map((post) => (
            <BlogPost {...post} key={post.slug} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default AuthorPage;
