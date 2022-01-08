import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Box, Heading, Text, Separator } from "ui";

import AccountPageDialog from "@/modules/settings/AccountPageDialog";
import Layout from "@/modules/settings/Layout";
import WithAuth from "@/hocs/withAuth";

const Account: NextPage = () => {
  return (
    <>
      <NextSeo title="Account settings" />

      <Layout>
        <Box>
          <Heading css={{ color: "#EF4444" }}>Delete account</Heading>

          <Separator css={{ my: 10 }} />

          <Text css={{ my: 10 }}>
            Once you delete your account, there is no going back. Please be
            certain.
          </Text>

          <AccountPageDialog />
        </Box>
      </Layout>
    </>
  );
};

export default WithAuth(Account);
