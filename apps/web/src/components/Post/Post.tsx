import { useEffect, useState } from "react";

import { Box, Flex } from "@pocto/core";
import { CLIENT_ROUTES } from "shared/routes";

import { PostStyles } from "./styles/Post.styles";
import LoginDialog from "../LoginDialog/LoginDialog";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useUser from "@/stores/useUser";

import type { TPost } from "@/types/index";

interface Props {
  post: TPost;
}

const Post = ({ post }: Props) => {
  const [isCULikedPost, setIsCULikedPost] = useState(false);

  const currentUser = useUser((state) => state.user);

  useEffect(() => {
    /**
     * Check is current user already liked current post
     */
    setIsCULikedPost(
      !!post.likes?.find(({ userId }) => userId === currentUser?.id)
    );
  }, [currentUser?.id, post.likes]);

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
          isCULikedPost={isCULikedPost}
          postId={post.id}
          commentsCount={post._count.comments}
          likesCount={post._count.likes}
          postLink={postLink}
          currentUser={currentUser}
        />
      </Box>
    </Flex>
  );
};

export default Post;
