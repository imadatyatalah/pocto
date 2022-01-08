import { NextSeo } from "next-seo";
import { Heading } from "ui";

import type { TPost } from "@/types/post";

type Props = {
  post?: TPost;
};

const PostPage = ({ post }: Props) => {
  return (
    <>
      <NextSeo title={post?.title} />

      <section>
        <Heading>{post?.title}</Heading>

        <p>{post?.content}</p>
      </section>
    </>
  );
};

export default PostPage;
