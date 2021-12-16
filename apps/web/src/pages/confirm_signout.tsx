import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Button, Flex, Heading } from "ui";

const ConfirmSignOut: NextPage = () => {
  return (
    <>
      <NextSeo title="Confirm Sign Out" />

      <Flex
        as="section"
        css={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Heading size="3xl" css={{ marginBottom: 20 }} as="h1">
          Are you sure you want to Sign Out?
        </Heading>

        <form action="http://localhost:1337/auth/signout" method="get">
          <Button type="submit">Yes, Sign Out</Button>
        </form>
      </Flex>
    </>
  );
};

export default ConfirmSignOut;
