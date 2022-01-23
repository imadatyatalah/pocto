import { useState } from "react";

import Link from "next/link";

import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Box, Text, Flex } from "ui";

import { FilledHeartIcon, OutlinedHeartIcon } from "@/icons/HeartIcon";
import { StyledIconWrapper } from "./styles/Post.styles";
import ChatIcon from "@/icons/ChatIcon";

type Props = {
  postLink: string;
  commentsCount: number;
};

const PostFooter = ({ postLink, commentsCount }: Props) => {
  const [isCLicked, setIsClicked] = useState(false);

  return (
    <Flex as="footer" align="center" css={{ ml: 57.5, mt: 10 }}>
      <Box css={{ mr: 40 }}>
        <Link href={postLink} passHref>
          <StyledIconWrapper as="a">
            <AccessibleIcon label="Comment">
              <ChatIcon />
            </AccessibleIcon>

            <Text as="span">{commentsCount !== 0 ? commentsCount : null}</Text>
          </StyledIconWrapper>
        </Link>
      </Box>

      <Box css={{ mr: 40 }}>
        <StyledIconWrapper
          as="button"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <AccessibleIcon label="Like">
            {isCLicked ? <FilledHeartIcon /> : <OutlinedHeartIcon />}
          </AccessibleIcon>
        </StyledIconWrapper>
      </Box>
    </Flex>
  );
};

export default PostFooter;
