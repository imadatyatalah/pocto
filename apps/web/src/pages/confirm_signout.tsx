import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Button, Flex, Heading } from "ui";

import WithAuth from "@/hocs/withAuth";

const ConfirmSignOut: NextPage = () => {
  return (
    <>
      <NextSeo title="Confirm Sign Out" />

      <Flex
        as="section"
        direction="column"
        align="center"
        justify="center"
        css={{ minHeight: "100vh" }}
      >
        <Heading size="3xl" css={{ mb: 20 }} as="h1">
          Are you sure you want to Sign Out?
        </Heading>

        <form action="http://localhost:1337/auth/signout" method="get">
          <Button type="submit">Yes, Sign Out</Button>
        </form>
      </Flex>
    </>
  );
};

export default WithAuth(ConfirmSignOut);
