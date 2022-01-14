import Link from "next/link";

import { Flex, Box, Link as StyledLink } from "ui";
import { styled } from "ui/stitches.config";
import dayjs from "dayjs";

import type { TComment } from "@/types/index";
import CommentMenu from "./CommentMenu";

type Props = {
  comment: TComment;
  commentLink: string;
  userLink: string;
};

const StyledImage = styled("img", {
  rounded: "100%",
});

const CommentHeader = ({ comment, commentLink, userLink }: Props) => {
  return (
    <Flex as="header" align="center" justify="between">
      <Flex>
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

        <div>
          <Link href={userLink} passHref>
            <StyledLink css={{ fontWeight: 500, color: "Black" }}>
              {comment.user.name}
            </StyledLink>
          </Link>

          <Link href={userLink} passHref>
            <StyledLink
              css={{
                color: "DimGray",
                fontSize: 14,
                fontWeight: 500,
                ml: 4,
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              @{comment.user.username}
            </StyledLink>
          </Link>

          <div>
            <Link href={commentLink} passHref>
              <StyledLink
                css={{ color: "DimGray", fontSize: 14, fontWeight: 500 }}
              >
                <span
                  title={dayjs(comment.createdAt).format("h:mm A MMM D, YYYY")}
                >
                  {dayjs(comment.createdAt).format("MMM D, YYYY")}
                </span>
              </StyledLink>
            </Link>
          </div>
        </div>
      </Flex>

      <CommentMenu postId={comment.postId} comment={comment} />
    </Flex>
  );
};

export default CommentHeader;
