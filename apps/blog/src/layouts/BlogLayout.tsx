import Link from "next/link";

import { Heading, Text, Box, Link as StyledLink } from "@pocto/core";
import { BLOG_ROUTES } from "shared/routes";
import { gray } from "@radix-ui/colors";
import { NextSeo } from "next-seo";
import dayjs from "dayjs";

import type { Blog } from "contentlayer/generated";

interface Props {
  children: React.ReactNode;
  post: Blog;
}

const BlogLayout = ({ children, post }: Props) => {
  const { title, summary, author, publishedAt, readingTime } = post;

  // LINKS
  const authorLink = BLOG_ROUTES.AUTHOR_PAGE(author.authorname);

  return (
    <>
      <NextSeo title={title} description={summary} />

      <article>
        <Box css={{ textAlign: "center" }}>
          <Heading size="3xl">{title}</Heading>

          <Box css={{ mt: 6 }}>
            <Text css={{ color: gray.gray11 }}>
              <Link href={authorLink} passHref>
                <StyledLink>{author.name}</StyledLink>
              </Link>{" "}
              / {dayjs(publishedAt).format("MMMM D, YYYY")} / {readingTime.text}
            </Text>
          </Box>
        </Box>

        <Box css={{ my: 16 }}>{children}</Box>
      </article>
    </>
  );
};

export default BlogLayout;
