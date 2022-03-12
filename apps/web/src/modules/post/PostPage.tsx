import { NextSeo } from "next-seo";

import CommentForm from "./CommentForm";
import Comment from "@/components/Comment/Comment";

import type { TPost } from "@/types/index";

interface Props {
  post?: TPost;
  isLoggedIn: boolean;
}

const PostPage = ({ post, isLoggedIn }: Props) => {
  return (
    <>
      <NextSeo />

      <section>
        <div>
          <p>{post?.content}</p>
        </div>

        {isLoggedIn ? <CommentForm postId={post?.id} /> : null}

        <div>
          {post?.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PostPage;
