import Link from "next/link";

import { styled } from "ui/stitches.config";
import { Box, Flex } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import CommentHeader from "./CommentHeader";

type Props = {
  comment: any;
};

const StyledImage = styled("img", {
  rounded: "100%",
});

const Comment = ({ comment }: Props) => {
  const userLink = CLIENT_ROUTES.USER_PAGE(comment.user.username);

  return (
    <Flex css={{ margin: "20px 0" }} as="article">
      <Box css={{ size: 45, background: "#757bc8", rounded: "100%", mr: 10 }}>
        <Link href={userLink}>
          <a>
            <StyledImage
              src="https://avatars.githubusercontent.com/u/70093484?s=400&u=3ca81f91aeb92005a4b5bb3bac464ac9a2493bf8&v=4"
              alt=""
            />
          </a>
        </Link>
      </Box>

      <Box>
        <CommentHeader comment={comment} commentLink="/" userLink={userLink} />

        <div>
          <p>{comment.content}</p>
        </div>
      </Box>
    </Flex>
  );
};

export default Comment;
