import { Heading } from "ui";

import type { TPost } from "@/types/index";

type Props = {
  post: TPost;
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <Heading size="xl">{post.title}</Heading>

      <p>{post.content}</p>
    </div>
  );
};

export default Post;
