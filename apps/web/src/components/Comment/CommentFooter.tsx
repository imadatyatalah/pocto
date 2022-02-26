import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Box, Text, Flex } from "@pocto/core";

import { FilledHeartIcon, OutlinedHeartIcon } from "@/icons/HeartIcon";
import { StyledIconWrapper } from "./styles/CommentFooter.styles";
import { useToggleCommentLike } from "@/mutations/index";

interface Props {
  isCULikedComment: boolean;
  commentId: string;
  likesCount: number;
}

const CommentFooter = ({ isCULikedComment, commentId, likesCount }: Props) => {
  const { mutate: toggleLike } = useToggleCommentLike(commentId);

  const handleToggleLike = () => toggleLike();

  return (
    <Flex as="footer" align="center" css={{ ml: 57.5, mt: 10 }}>
      <Box css={{ mr: 40 }}>
        <StyledIconWrapper as="button" onClick={handleToggleLike}>
          <AccessibleIcon label="Like">
            {isCULikedComment ? <FilledHeartIcon /> : <OutlinedHeartIcon />}
          </AccessibleIcon>

          {likesCount ? <Text as="span">{likesCount}</Text> : null}
        </StyledIconWrapper>
      </Box>
    </Flex>
  );
};

export default CommentFooter;
