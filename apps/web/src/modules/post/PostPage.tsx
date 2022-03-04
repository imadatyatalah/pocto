import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import useUser from "@/stores/useUser";
import CommentForm from "./CommentForm";
import Comment from "@/components/Comment/Comment";

import type { TPost } from "@/types/index";

interface Props {
  post?: TPost;
}

const PostPage = ({ post }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logged_in = useUser((state) => state.logged_in);

  useEffect(() => {
    setIsLoggedIn(logged_in);
  }, [logged_in]);

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
