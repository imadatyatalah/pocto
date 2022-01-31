import { NextSeo } from "next-seo";
import { Flex, Heading } from "ui";

import CreateCommunityForm from "@/modules/create_community/CreateCommunityForm";

import type { PoctoPage } from "@/types/index";

const CreateCommunity: PoctoPage = () => {
  return (
    <>
      <NextSeo title="Create a community" />

      <Flex direction="column" align="center" as="section">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Create a community
        </Heading>

        <CreateCommunityForm />
      </Flex>
    </>
  );
};

CreateCommunity.authenticate = true;

export default CreateCommunity;
