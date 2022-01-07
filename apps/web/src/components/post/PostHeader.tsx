import Link from "next/link";

import { Flex, Text, Link as StyledLink } from "ui";
import dayjs from "dayjs";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
  postLink: string;
  userLink: string;
};

const PostHeader = ({ post, postLink, userLink }: Props) => {
  return (
    <Flex as="header">
      <div>
        <Link href={userLink} passHref>
          <StyledLink css={{ fontWeight: 500, color: "Black" }}>
            Imad Atyat-Alah
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
            @{post.user.username}
          </StyledLink>
        </Link>
      </div>

      <Text as="span" css={{ mx: 4 }}>
        -
      </Text>

      <div>
        <Link href={postLink} passHref>
          <StyledLink css={{ color: "DimGray", fontSize: 14, fontWeight: 500 }}>
            <span title={dayjs(post.createdAt).format("h:mm A MMM D, YYYY")}>
              {dayjs(post.createdAt).format("MMM D, YYYY")}
            </span>
          </StyledLink>
        </Link>
      </div>
    </Flex>
  );
};

export default PostHeader;
