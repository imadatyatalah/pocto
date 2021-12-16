import Link from "next/link";

import { NextSeo } from "next-seo";
import { Button, Flex, Heading } from "ui";

const Custom404 = () => {
  return (
    <>
      <NextSeo title="Page Not Found" />

      <Flex
        css={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <Heading as="h1" size="3xl" css={{ fontWeight: "700" }}>
            404 - Page Not Found
          </Heading>
        </div>

        <div>
          <Link href="/" passHref>
            <Button as="a">Back home</Button>
          </Link>
        </div>
      </Flex>
    </>
  );
};

export default Custom404;
