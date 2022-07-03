import Link from "next/link";

import { CLIENT_ROUTES } from "shared/routes";
import { Box, Flex, Heading, Link as StyledLink } from "@pocto/core";
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
        {data.length ? (
          data.map((community) => (
            <Box key={community.title}>
              <Heading as="h3">{community.name}</Heading>
            </Box>
          ))
        ) : (
          <Flex justify="center">
            <Heading as="h3">
              You don&apos;t have any community yet,{" "}
              <Link href={CLIENT_ROUTES.CREATE_COMMUNITY} passHref>
                <StyledLink>Create one here</StyledLink>
              </Link>
            </Heading>
          </Flex>
        )}
      </section>
    </>
  );
};

Communities.authenticate = true;
Communities.getLayout = (page) => <Layout>{page}</Layout>;

export default Communities;
