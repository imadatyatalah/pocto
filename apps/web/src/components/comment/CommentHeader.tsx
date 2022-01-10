import Link from "next/link";

import { Flex, Text, Link as StyledLink } from "ui";
import dayjs from "dayjs";

type Props = {
  comment: any;
  commentLink: string;
  userLink: string;
};

const CommentHeader = ({ comment, commentLink, userLink }: Props) => {
  return (
    <Flex as="header">
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
      </div>

      <Text as="span" css={{ mx: 4 }}>
        -
      </Text>

      <div>
        <Link href={commentLink} passHref>
          <StyledLink css={{ color: "DimGray", fontSize: 14, fontWeight: 500 }}>
            <span title={dayjs(comment.createdAt).format("h:mm A MMM D, YYYY")}>
              {dayjs(comment.createdAt).format("MMM D, YYYY")}
            </span>
          </StyledLink>
        </Link>
      </div>
    </Flex>
  );
};

export default CommentHeader;
