import { Box, Flex } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import { CommentStyles } from "./styles/Comment.styles";
import CommentHeader from "./CommentHeader";

import type { TComment } from "@/types/index";

type Props = {
  comment: TComment;
};

const Comment = ({ comment }: Props) => {
  const userLink = CLIENT_ROUTES.USER_PAGE(comment.user.username);

  return (
    <Flex css={CommentStyles} as="article">
      <Box css={{ width: "100%" }}>
        <CommentHeader comment={comment} commentLink="/" userLink={userLink} />

        <Box css={{ ml: 55 }}>
          <p>{comment.content}</p>
        </Box>
      </Box>
    </Flex>
  );
};

export default Comment;
