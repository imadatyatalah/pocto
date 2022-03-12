import Link from "next/link";

import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Box, Text, Flex } from "@pocto/core";

import { FilledHeartIcon, OutlinedHeartIcon } from "@/icons/HeartIcon";
import { StyledIconWrapper } from "./styles/PostFooter.styles";
import { useTogglePostLike } from "@/mutations/index";
import ChatIcon from "@/icons/ChatIcon";

interface Props {
  isCULikedPost: boolean;
  postId: string;
  postLink: string;
  commentsCount: number;
  likesCount: number;
}

const PostFooter = ({
  isCULikedPost,
  postId,
  postLink,
  commentsCount,
  likesCount,
}: Props) => {
  const { mutate: toggleLike } = useTogglePostLike(postId);

  const handleToggleLike = () => toggleLike();

  return (
    <Flex as="footer" align="center" css={{ ml: 57.5, mt: 10 }}>
      <Box css={{ mr: 40 }}>
        <Link href={postLink} passHref>
          <StyledIconWrapper as="a">
            <AccessibleIcon label="Comment">
              <ChatIcon />
            </AccessibleIcon>

            {commentsCount ? <Text as="span">{commentsCount}</Text> : null}
          </StyledIconWrapper>
        </Link>
      </Box>

      <Box css={{ mr: 40 }}>
        <StyledIconWrapper as="button" onClick={handleToggleLike}>
          <AccessibleIcon label="Like">
            {isCULikedPost ? <FilledHeartIcon /> : <OutlinedHeartIcon />}
          </AccessibleIcon>

          {likesCount ? <Text as="span">{likesCount}</Text> : null}
        </StyledIconWrapper>
      </Box>
    </Flex>
  );
};

export default PostFooter;