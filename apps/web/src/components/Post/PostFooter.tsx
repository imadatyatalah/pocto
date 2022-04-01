import { useState } from "react";
import Link from "next/link";

import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import {
  Box,
  Text,
  Flex,
  ChatIcon,
  FilledHeartIcon,
  OutlinedHeartIcon,
} from "@pocto/core";

import { StyledIconWrapper } from "./styles/PostFooter.styles";
import { useTogglePostLike } from "@/mutations/index";
import LoginDialog from "../LoginDialog/LoginDialog";

import type { TCurrentUser } from "@/types/index";

interface Props {
  isCULikedPost: boolean;
  postId: string;
  postLink: string;
  commentsCount: number;
  likesCount: number;
  currentUser: TCurrentUser;
}

const PostFooter = ({
  isCULikedPost,
  postId,
  postLink,
  commentsCount,
  likesCount,
  currentUser,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: toggleLike } = useTogglePostLike(postId);

  /**
   * if current user is logged-in run `toggleLike()`
   * else set setIsOpen to true (which will show LoginDialog component)
   */
  const handleToggleLike = () => {
    currentUser ? toggleLike() : setIsOpen(true);
  };

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

      <LoginDialog isOpen={isOpen} setIsOpen={setIsOpen} />

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
