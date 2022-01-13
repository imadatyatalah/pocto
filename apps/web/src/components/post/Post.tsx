import Link from "next/link";

import { styled } from "ui/stitches.config";
import { Box, Flex, Heading } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import PostHeader from "./PostHeader";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const StyledImage = styled("img", {
  rounded: "100%",
});

const Post = ({ post }: Props) => {
  // LINKS
  const postLink = CLIENT_ROUTES.POST_PAGE(post.id);
  const userLink = CLIENT_ROUTES.USER_PAGE(post.user.username);

  return (
    <Flex css={{ my: 20 }} as="article">
      <Box css={{ size: 47.5, background: "#757bc8", rounded: "100%", mr: 10 }}>
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
        <PostHeader post={post} postLink={postLink} userLink={userLink} />

        <div>
          <Link href={postLink} passHref>
            <Heading as="a" size="xl">
              {post.title}
            </Heading>
          </Link>

          <p>{post.content}</p>
        </div>
      </Box>
    </Flex>
  );
};

export default Post;
