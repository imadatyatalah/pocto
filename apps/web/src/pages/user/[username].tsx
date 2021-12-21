import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";

import { getUser, useGetUser } from "@/api/user/getUser";
import Loading from "@/components/Loading";

const User: NextPage = () => {
  const { isFallback, query } = useRouter();

  const { data: user } = useGetUser(query.username as string);

  if (isFallback) return <Loading />;

  return (
    <>
      <NextSeo title={user?.name} />

      <section>
        <code>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </code>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const user = await queryClient.fetchQuery(["user", params?.username], () =>
    getUser(params?.username as string)
  );

  return {
    props: { user },
    revalidate: 1,
  };
};

export default User;
