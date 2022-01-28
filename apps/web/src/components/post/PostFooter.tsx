import Link from "next/link";

import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Box, Text, Flex } from "ui";

import { FilledHeartIcon, OutlinedHeartIcon } from "@/icons/HeartIcon";
import { StyledIconWrapper } from "./styles/Post.styles";
import { useToggleLike } from "@/mutations/index";
import ChatIcon from "@/icons/ChatIcon";

type Props = {
  isCULikedPost: boolean;
  postId: string;
  postLink: string;
  commentsCount: number;
  likesCount: number;
};

const PostFooter = ({
  isCULikedPost,
  postId,
  postLink,
  commentsCount,
  likesCount,
}: Props) => {
  const { mutate: toggleLike } = useToggleLike(postId);

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
