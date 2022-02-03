import Image from "next/image";
import Link from "next/link";

import { Heading, Box, Flex, Text, useHover } from "ui";
import { gray, grayDark } from "@radix-ui/colors";
import { styled } from "ui/stitches.config";
import { BLOG_ROUTES } from "shared/routes";

import type { Blog } from ".contentlayer/types";

import BlogPostFooter from "./BlogPostFooter";

const StyledImage = styled(Image, {
  borderRadius: "0.5rem",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

type Props = Pick<
  Blog,
  | "slug"
  | "title"
  | "summary"
  | "publishedAt"
  | "image"
  | "author"
  | "readingTime"
>;

const BlogPost = ({
  author,
  slug,
  image,
  title,
  summary,
  publishedAt,
  readingTime,
}: Props) => {
  const { hovered, ref } = useHover();

  // LINKS
  const authorLink = BLOG_ROUTES.AUTHOR_PAGE(author.authorname);
  const postLink = BLOG_ROUTES.POST_PAGE(slug);

  return (
    <Box
      as="article"
      ref={ref}
      css={{
        border: `1px solid ${gray.gray8}`,
        rounded: "0.5rem",
      }}
    >
      <Link href={postLink}>
        <a>
          <Flex as="header">
            <StyledImage src={image} width="1202" height="628" />
          </Flex>

          <Box css={{ py: 10, px: 16 }}>
            <Heading
              css={{
                fontWeight: 700,
                textDecoration: hovered && "underline",
                textDecorationColor: hovered && "$primary1",
              }}
            >
              {title}
            </Heading>

            <Text css={{ fontSize: 18, color: grayDark.gray8, pt: 4 }}>
              {summary}
            </Text>
          </Box>
        </a>
      </Link>

      <BlogPostFooter
        author={author}
        authorLink={authorLink}
        publishedAt={publishedAt}
        readingTime={readingTime.text}
      />
    </Box>
  );
};

export default BlogPost;
