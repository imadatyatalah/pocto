import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { Box, Heading, Text, Separator } from "ui";

import WithAuth from "@/hocs/withAuth";
import AccountPageDialog from "@/modules/settings/AccountPageDialog";
import SettingsHeader from "@/modules/settings/SettingsHeader";
import Links from "@/modules/settings/Links";

const Account: NextPage = () => {
  return (
    <>
      <NextSeo title="Account settings" />

      <Box as="section" css={{ mx: 40, "@md": { mx: 20, my: 10 } }}>
        <SettingsHeader />

        <Box css={{ "@md": { display: "flex" } }}>
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
      </Box>
    </>
  );
};

export default WithAuth(Account);
