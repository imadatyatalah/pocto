import { Heading } from "@pocto/core";
import { NextSeo } from "next-seo";

import PostForm from "@/components/PostForm/PostForm";
import Post from "@/components/post/Post";

import type { TCommunity, TCurrentUser } from "@/types/index";

interface Props {
  community?: TCommunity;
  currentUser?: TCurrentUser;
}

const CommunityPage = ({ community, currentUser }: Props) => {
  return (
    <>
      <NextSeo title={community?.title} />

      <section>
        <Heading>{community?.title}</Heading>

        {currentUser ? <PostForm communityName={community?.name} /> : null}

        {community?.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default CommunityPage;
