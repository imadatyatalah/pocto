import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getCommunity, useGetCommunity } from "@/api/index";
import CommunityPage from "@/modules/community/CommunityPage";
import Loading from "@/components/Loading";

const Community: NextPage = () => {
  const { isFallback, query } = useRouter();

  const { data: community } = useGetCommunity(query.name as string);

  if (isFallback) return <Loading />;

  return <CommunityPage community={community} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["communities", params?.name], () =>
    getCommunity(params?.name as string)
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default Community;
