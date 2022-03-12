import { useRouter } from "next/router";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getPost, useGetPost } from "@/api/index";
import Loading from "@/components/Loading";
import PostPage from "@/modules/post/PostPage";

import type { TCurrentUser } from "@/types/index";

interface Props {
  currentUser: TCurrentUser;
  isLoggedIn: boolean;
}

const Post: NextPage<Props> = ({ isLoggedIn }) => {
  const { isFallback, query } = useRouter();

  const { data: post } = useGetPost(query.id as string);

  if (isFallback) return <Loading />;

  return <PostPage post={post} isLoggedIn={isLoggedIn} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", params?.id], () =>
    getPost(params?.id as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default Post;
