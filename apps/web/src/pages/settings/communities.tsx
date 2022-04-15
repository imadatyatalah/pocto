import { NextSeo } from "next-seo";

import { useGetMyCommunities } from "@/api/index";
import Layout from "@/modules/settings/Layout";

import type { PoctoPage } from "@/types/index";

const Communities: PoctoPage = () => {
  const { data, isError, isLoading } = useGetMyCommunities();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong happened!</div>;
  }

  return (
    <>
      <NextSeo title="Communities" />

      <section>
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </section>
    </>
  );
};

Communities.authenticate = true;
Communities.getLayout = (page) => <Layout>{page}</Layout>;

export default Communities;
