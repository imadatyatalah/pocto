import { NextSeo } from "next-seo";
import { Heading, Grid } from "@pocto/core";

import type { Author } from "contentlayer/generated";

import BlogPost from "@/components/BlogPost";

import type { TBlogPost } from "@/lib/blogPost";

interface Props {
  author: Author;
  posts: TBlogPost[];
}

const AuthorPage = ({ author, posts }: Props) => {
  return (
    <>
      <NextSeo title={author.name} />

      <section>
        <Heading>{author.name}</Heading>

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

export default AuthorPage;
