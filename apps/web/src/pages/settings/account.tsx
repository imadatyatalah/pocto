import { NextSeo } from "next-seo";
import { Box, Heading, Text, Separator } from "ui";

import WithAuth from "@/hocs/withAuth";
import AccountPageDialog from "@/modules/settings/AccountPageDialog";

const Account = () => {
  return (
    <>
      <NextSeo title="Account settings" />

      <Box as="section" css={{ margin: "0 20px" }}>
        <div>
          <Heading css={{ color: "#EF4444" }}>Delete account</Heading>

          <Separator orientation="horizontal" css={{ margin: "10px 0" }} />

          <Text css={{ margin: "10px 0" }}>
            Once you delete your account, there is no going back. Please be
            certain.
          </Text>
        </div>

        <AccountPageDialog />
      </Box>
    </>
  );
};

export default WithAuth(Account);