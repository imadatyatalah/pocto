import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { Heading } from "ui";

import useUser from "@/stores/useUser";
import CommentForm from "./CommentForm";
import Comment from "@/components/comment/Comment";

import type { TPost } from "@/types/index";

type Props = {
  post?: TPost;
};

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
