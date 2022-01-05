import { NextSeo } from "next-seo";

import { Heading } from "ui";

import Post from "@/components/post/Post";

import type { TUser } from "@/types/index";

type Props = {
  user?: TUser;
};

const UserPage = ({ user }: Props) => {
  return (
    <>
      <NextSeo title={user?.name} />

      <section>
        <div>
          <Heading>{user?.name}</Heading>

          <p>{user?.profile?.bio}</p>
        </div>

        {user?.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default UserPage;
