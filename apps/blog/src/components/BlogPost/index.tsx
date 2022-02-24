import Image from "next/image";
import Link from "next/link";

import { Heading, Box, Flex, Text } from "@pocto/core";
import { useHover } from "@pocto/hooks";
import { gray, grayDark } from "@radix-ui/colors";
import { styled } from "@pocto/core/stitches.config";
import { BLOG_ROUTES } from "shared/routes";

import BlogPostFooter from "./BlogPostFooter";

import type { TBlogPost } from "@/lib/blogPost";

const StyledImage = styled(Image, {
  borderRadius: "0.5rem",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

interface Props {
  post: TBlogPost;
}

const BlogPost = ({ post }: Props) => {
  const { hovered, ref } = useHover();

  const {
    author: { authorname },
    slug,
    image,
    title,
    summary,
    publishedAt,
    readingTime,
  } = post;

  // LINKS
  const authorLink = BLOG_ROUTES.AUTHOR_PAGE(authorname);
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
        authorname={authorname}
        authorLink={authorLink}
        publishedAt={publishedAt}
        readingTime={readingTime.text}
      />
    </Box>
  );
};

export default BlogPost;
