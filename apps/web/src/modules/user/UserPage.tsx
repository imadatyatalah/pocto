import { NextSeo } from "next-seo";

import type { TUser } from "@/types/index";

type Props = {
  user?: TUser;
};

const UserPage = ({ user }: Props) => {
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

export default UserPage;
