import { useRouter } from "next/router";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getPost, useGetPost } from "@/api/index";
import Loading from "@/components/Loading";
import PostPage from "@/modules/post/PostPage";

const Post: NextPage = () => {
  const { isFallback, query } = useRouter();

  const { data: post } = useGetPost(query.id as string);

  if (isFallback) return <Loading />;

  return <PostPage post={post} />;
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
