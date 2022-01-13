import { NextSeo } from "next-seo";

import type { TCommunity } from "@/types/index";

type Props = {
  community?: TCommunity;
};

const CommunityPage = ({ community }: Props) => {
  return (
    <>
      <NextSeo title={community?.title} />

      <section>
        <code>
          <pre>{JSON.stringify(community, null, 2)}</pre>
        </code>
      </section>
    </>
  );
};

export default CommunityPage;
