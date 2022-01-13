import Link from "next/link";

import { Box, Flex, Heading } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

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
    <Flex css={{ my: 20 }} as="article">
      <Box>
        <PostHeader post={post} postLink={postLink} userLink={userLink} />

        <Box css={{ ml: 57.5 }}>
          <Link href={postLink} passHref>
            <Heading as="a" size="xl">
              {post.title}
            </Heading>
          </Link>

          <p>{post.content}</p>
        </Box>
      </Box>
    </Flex>
  );
};

export default Post;
