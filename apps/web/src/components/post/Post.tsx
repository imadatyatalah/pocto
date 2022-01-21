import Link from "next/link";

import { Box, Flex, Heading, Text } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import { PostStyles, StyledLinkIcon } from "./styles/Post.styles";
import ChatIcon from "@/icons/ChatIcon";
import PostHeader from "./PostHeader";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const Post = ({ post }: Props) => {
  // LINKS
  const postLink = CLIENT_ROUTES.POST_PAGE(post.id);
  const userLink = CLIENT_ROUTES.USER_PAGE(post.user.username);

  return (
    <Flex css={PostStyles} as="article">
      <Box css={{ width: "100%" }}>
        <PostHeader post={post} postLink={postLink} userLink={userLink} />

        <Box css={{ ml: 57.5 }}>
          <Link href={postLink} passHref>
            <Heading as="a" size="xl">
              {post.title}
            </Heading>
          </Link>

          <p>{post.content}</p>
        </Box>

        <Box as="footer" css={{ ml: 57.5, mt: 10 }}>
          <Box>
            <Link href={postLink} passHref>
              <StyledLinkIcon>
                <ChatIcon />

                <Text as="span" css={{ ml: 4 }}>
                  {post._count.comments !== 0 ? post._count.comments : null}
                </Text>
              </StyledLinkIcon>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Post;
