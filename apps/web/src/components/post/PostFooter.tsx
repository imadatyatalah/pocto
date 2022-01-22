import Link from "next/link";

import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Box, Text } from "ui";

import { StyledLinkIcon } from "./styles/Post.styles";
import ChatIcon from "@/icons/ChatIcon";

type Props = {
  postLink: string;
  commentsCount: number;
};

const PostFooter = ({ postLink, commentsCount }: Props) => {
  return (
    <Box as="footer" css={{ ml: 57.5, mt: 10 }}>
      <Box>
        <Link href={postLink} passHref>
          <StyledLinkIcon>
            <AccessibleIcon label="Comment">
              <ChatIcon />
            </AccessibleIcon>

            <Text as="span" css={{ ml: 4 }}>
              {commentsCount !== 0 ? commentsCount : null}
            </Text>
          </StyledLinkIcon>
        </Link>
      </Box>
    </Box>
  );
};

export default PostFooter;
