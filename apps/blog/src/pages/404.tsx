import Link from "next/link";
import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Box, Button, Flex, Heading } from "ui";

const Custom404: NextPage = () => {
  return (
    <>
      <NextSeo title="Page Not Found" />

      <Flex
        as="section"
        direction="column"
        align="center"
        justify="center"
        css={{ minHeight: "100vh" }}
      >
        <Box css={{ mb: 20 }}>
          <Heading as="h1" size="3xl" css={{ fontWeight: "700" }}>
            404 - Page Not Found
          </Heading>
        </Box>

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
