import { Box, Flex } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import { CommentStyles } from "./styles/Comment.styles";
import CommentHeader from "./CommentHeader";
import CommentFooter from "./CommentFooter";
import useUser from "@/stores/useUser";

import type { TComment } from "@/types/index";

type Props = {
  comment: TComment;
};

const Comment = ({ comment }: Props) => {
  const currentUser = useUser((state) => state.user);

  /**
   * Check is current user already liked current comment
   */
  const isCULikedComment = comment.likes?.find(
    ({ userId }) => userId === currentUser?.id
  );

  // LINKS
  const userLink = CLIENT_ROUTES.USER_PAGE(comment.user.username);

  return (
    <Flex css={CommentStyles} as="article">
      <Box css={{ width: "100%" }}>
        <CommentHeader comment={comment} commentLink="/" userLink={userLink} />

        <Box css={{ ml: 55 }}>
          <p>{comment.content}</p>
        </Box>

        <CommentFooter
          isCULikedComment={!!isCULikedComment}
          commentId={comment.id}
          likesCount={comment._count.likes}
        />
      </Box>
    </Flex>
  );
};

export default Comment;
