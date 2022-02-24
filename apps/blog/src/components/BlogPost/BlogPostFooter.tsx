import Link from "next/link";

import { Box, Flex, Text, Link as StyledLink } from "@pocto/core";
import { styled } from "@pocto/core/stitches.config";
import dayjs from "dayjs";

const StyledAvatar = styled("img", {
  rounded: "100%",
});

const Avatar = () => {
  return (
    <StyledAvatar
      src="https://avatars.githubusercontent.com/u/70093484?s=400&u=3ca81f91aeb92005a4b5bb3bac464ac9a2493bf8&v=4"
      alt=""
    />
  );
};

interface Props {
  authorLink: string;
  authorname: string;
  readingTime: string;
  publishedAt: string;
}

const BlogPostFooter = ({
  authorLink,
  authorname,
  readingTime,
  publishedAt,
}: Props) => {
  return (
    <Flex as="footer" css={{ pb: 10, px: 16 }}>
      <Box css={{ size: 45, background: "$primary1", rounded: "100%", mr: 10 }}>
        <Link href={authorLink}>
          <a>
            <Avatar />
          </a>
        </Link>
      </Box>

      <div>
        <Link href={authorLink} passHref>
          <StyledLink css={{ fontWeight: 500, color: "Black" }}>
            {authorname}
          </StyledLink>
        </Link>

        <div>
          <Text css={{ color: "DimGray", fontSize: 14, fontWeight: 500 }}>
            <span title={dayjs(publishedAt).format("h:mm A MMM D, YYYY")}>
              {dayjs(publishedAt).format("MMM D, YYYY")}
            </span>

            <Text as="span" css={{ mx: 5 }}>
              &bull;
            </Text>

            <span>{readingTime}</span>
          </Text>
        </div>
      </div>
    </Flex>
  );
};

export default BlogPostFooter;
