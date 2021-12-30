import Link from "next/link";

import { Heading } from "ui";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <Link href={`/post/${post.id}`} passHref>
        <Heading as="a" size="xl">
          {post.title}
        </Heading>
      </Link>

      <p>{post.content}</p>
    </div>
  );
};

export default Post;
