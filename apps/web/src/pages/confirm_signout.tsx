import { NextSeo } from "next-seo";
import { Button, Flex, Heading } from "@pocto/core";

import type { PoctoPage } from "@/types/index";

const ConfirmSignOut: PoctoPage = () => {
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
        <Heading size="3xl" css={{ mb: 20 }}>
          Are you sure you want to Sign Out?
        </Heading>

        <form action="http://localhost:1337/auth/signout" method="get">
          <Button type="submit">Yes, Sign Out</Button>
        </form>
      </Flex>
    </>
  );
};

ConfirmSignOut.authenticate = true;

export default ConfirmSignOut;
