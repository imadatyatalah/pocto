import Link from "next/link";

import { Box, Flex, Text, Heading, Link as StyledLink } from "ui";
import { CLIENT_ROUTES } from "shared/routes";
import dayjs from "dayjs";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const Post = ({ post }: Props) => {
  // LINKS
  const postLink = CLIENT_ROUTES.POST_PAGE(post.id);
  const userLink = CLIENT_ROUTES.USER_PAGE(post.user.username);

  return (
    <Box css={{ margin: "20px 0" }} as="article">
      <header>
        <Flex>
          <div>
            <Link href={userLink} passHref>
              <Heading as="a" size="base">
                Imad Atyat-Alah
              </Heading>
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
      </header>

      <div>
        <Link href={postLink} passHref>
          <Heading as="a" size="xl">
            {post.title}
          </Heading>
        </Link>

        <p>{post.content}</p>
      </div>
    </Box>
  );
};

export default Post;
