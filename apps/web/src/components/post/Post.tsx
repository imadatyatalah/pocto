import Link from "next/link";

import { styled } from "@stitches/react";
import { Box, Flex, Text, Heading, Link as StyledLink } from "ui";
import { CLIENT_ROUTES } from "shared/routes";
import dayjs from "dayjs";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const StyledImage = styled("img", {
  borderRadius: "100%",
});

const Post = ({ post }: Props) => {
  // LINKS
  const postLink = CLIENT_ROUTES.POST_PAGE(post.id);
  const userLink = CLIENT_ROUTES.USER_PAGE(post.user.username);

  return (
    <Flex css={{ margin: "20px 0" }} as="article">
      <Box
        css={{
          height: 47.5,
          width: 47.5,
          background: "#757bc8",
          borderRadius: "100%",
          marginRight: 10,
        }}
      >
        {/* TODO: Use user's image instead */}
        <StyledImage
          src="https://avatars.githubusercontent.com/u/70093484?s=400&u=3ca81f91aeb92005a4b5bb3bac464ac9a2493bf8&v=4"
          alt=""
        />
      </Box>

      <Box>
        <Flex as="header">
          <div>
            <Link href={userLink} passHref>
              <StyledLink css={{ fontWeight: 500, color: "Black" }}>
                Imad Atyat-Alah
              </StyledLink>
            </Link>

            <Link href={userLink} passHref>
              <StyledLink
                css={{
                  color: "DimGray",
                  fontSize: 14,
                  fontWeight: 500,
                  marginLeft: 4,
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                @{post.user.username}
              </StyledLink>
            </Link>
          </div>

          <Text as="span" css={{ margin: "0 4px" }}>
            -
          </Text>

          <div>
            <Link href={postLink} passHref>
              <StyledLink
                css={{ color: "DimGray", fontSize: 14, fontWeight: 500 }}
              >
                <span>{dayjs(post.createdAt).format("MMM D, YYYY")}</span>
              </StyledLink>
            </Link>
          </div>
        </Flex>

        <div>
          <Link href={postLink} passHref>
            <Heading as="a" size="xl">
              {post.title}
            </Heading>
          </Link>

          <p>{post.content}</p>
        </div>
      </Box>
    </Flex>
  );
};

export default Post;
