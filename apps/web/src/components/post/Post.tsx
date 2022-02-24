import { Box, Flex } from "@pocto/core";
import { CLIENT_ROUTES } from "shared/routes";

import { PostStyles } from "./styles/Post.styles";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useUser from "@/stores/useUser";

import type { TPost } from "@/types/index";

interface Props {
  post: TPost;
}

const Post = ({ post }: Props) => {
  const currentUser = useUser((state) => state.user);

  /**
   * Check is current user already liked current post
   */
  const isCULikedPost = post.likes?.find(
    ({ userId }) => userId === currentUser?.id
  );

  // LINKS
  const postLink = CLIENT_ROUTES.POST_PAGE(post.id);
  const userLink = CLIENT_ROUTES.USER_PAGE(post.user.username);

  return (
    <Flex as="article" css={PostStyles}>
      <Box css={{ width: "$full" }}>
        <PostHeader post={post} postLink={postLink} userLink={userLink} />

        <Box css={{ ml: 57.5 }}>
          <p>{post.content}</p>
        </Box>

        <PostFooter
          isCULikedPost={!!isCULikedPost}
          postId={post.id}
          commentsCount={post._count.comments}
          likesCount={post._count.likes}
          postLink={postLink}
        />
      </Box>
    </Flex>
  );
};

export default Post;
