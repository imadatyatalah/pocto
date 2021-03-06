import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getUser, useGetUser } from "@/api/index";
import Loading from "@/components/Loading";
import UserPage from "@/modules/user/UserPage";

const User: NextPage = () => {
  const { isFallback, query } = useRouter();

  const { data: user } = useGetUser(query.username as string);

  if (isFallback) return <Loading />;

  return <UserPage user={user} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["users", params?.username], () =>
    getUser(params?.username as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default User;
