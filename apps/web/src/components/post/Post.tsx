import Link from "next/link";

import { Box, Flex, Heading } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import { PostStyles } from "./styles/Post.styles";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

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
          <p>{post.content}</p>
        </Box>

        <PostFooter commentsCount={post._count.comments} postLink={postLink} />
      </Box>
    </Flex>
  );
};

export default Post;
