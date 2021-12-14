import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Button } from "ui";

const ConfirmSignOut: NextPage = () => {
  return (
    <>
      <NextSeo title="Confirm Sign Out" />

      <section>
        <h1>Are you sure you want to Sign Out?</h1>

        <form action="http://localhost:1337/auth/signout" method="get">
          <Button type="submit">Yes, Sign Out</Button>
        </form>
      </section>
    </>
  );
};

export default ConfirmSignOut;
