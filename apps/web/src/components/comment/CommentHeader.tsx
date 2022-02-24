import Link from "next/link";

import { Flex, Box, Link as StyledLink } from "@pocto/core";
import dayjs from "dayjs";

import type { TComment } from "@/types/index";
import CommentMenu from "./CommentMenu";
import Avatar from "../Avatar";

interface Props {
  comment: TComment;
  commentLink: string;
  userLink: string;
}

const CommentHeader = ({ comment, commentLink, userLink }: Props) => {
  return (
    <Flex as="header" align="start" justify="between">
      <Flex>
        <Box
          css={{ size: 45, background: "$primary1", rounded: "100%", mr: 10 }}
        >
          <Link href={userLink}>
            <a>
              <Avatar />
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
