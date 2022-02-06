import Link from "next/link";

import { Flex, Link as StyledLink, Box } from "ui";
import { CLIENT_ROUTES } from "shared/routes";
import dayjs from "dayjs";

import PostMenu from "./PostMenu";
import Avatar from "../Avatar";

import type { TPost } from "@/types/index";

interface Props {
  post: TPost;
  postLink: string;
  userLink: string;
}

const PostHeader = ({ post, postLink, userLink }: Props) => {
  // @ts-ignore
  const communityLink = CLIENT_ROUTES.COMMUNITY_PAGE(post.community?.name);

  return (
    <Flex as="header" align="start" justify="between">
      <Flex>
        <Box
          css={{ size: 47.5, background: "$primary1", rounded: "100%", mr: 10 }}
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
              {post.user.name}
            </StyledLink>
          </Link>

          <Link href={userLink} passHref>
            <StyledLink
              css={{
                color: "DimGray",
                fontSize: 14,
                fontWeight: 500,
                mx: 6,
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              @{post.user.username}
            </StyledLink>
          </Link>

          {post.community?.name ? (
            <Link href={communityLink} passHref>
              <StyledLink
                css={{
                  color: "Black",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <span>at /c/{post.community?.name}</span>
              </StyledLink>
            </Link>
          ) : null}

          <Flex>
            <Link href={postLink} passHref>
              <StyledLink
                css={{ color: "DimGray", fontSize: 14, fontWeight: 500 }}
              >
                <span
                  title={dayjs(post.createdAt).format("h:mm A MMM D, YYYY")}
                >
                  {dayjs(post.createdAt).format("MMM D, YYYY")}
                </span>
              </StyledLink>
            </Link>
          </Flex>
        </div>
      </Flex>

      <PostMenu post={post} />
    </Flex>
  );
};

export default PostHeader;
