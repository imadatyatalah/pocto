import { NextSeo } from "next-seo";

import type { TPost } from "@/types/post";

type Props = {
  post?: TPost;
};

const PostPage = ({ post }: Props) => {
  return (
    <>
      <NextSeo title={post?.title} />

      <section>
        <code>
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </code>
      </section>
    </>
  );
};

export default PostPage;
