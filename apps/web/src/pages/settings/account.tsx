import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Box, Heading, Text, Separator } from "ui";

import WithAuth from "@/hocs/withAuth";
import AccountPageDialog from "@/modules/settings/AccountPageDialog";
import Links from "@/modules/settings/Links";

const Account: NextPage = () => {
  return (
    <>
      <NextSeo title="Account settings" />

      <Box as="section" css={{ mx: 40, "@md": { display: "flex", m: 20 } }}>
        <Links />

        <Box>
          <Heading css={{ color: "#EF4444" }}>Delete account</Heading>

          <Separator css={{ my: 10 }} />

          <Text css={{ my: 10 }}>
            Once you delete your account, there is no going back. Please be
            certain.
          </Text>

          <AccountPageDialog />
        </Box>
      </Box>
    </>
  );
};

export default WithAuth(Account);
