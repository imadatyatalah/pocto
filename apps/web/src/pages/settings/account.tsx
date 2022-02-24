import { NextSeo } from "next-seo";
import { Box, Heading, Text, Separator } from "@pocto/core";

import DeleteAccountDialog from "@/modules/settings/account/DeleteAccountDialog";
import Layout from "@/modules/settings/Layout";

import type { PoctoPage } from "@/types/index";

const Account: PoctoPage = () => {
  return (
    <>
      <NextSeo title="Account settings" />

      <Box>
        <Heading css={{ color: "#EF4444" }}>Delete account</Heading>

        <Separator css={{ my: 10 }} />

        <Text css={{ my: 10 }}>
          Once you delete your account, there is no going back. Please be
          certain.
        </Text>

        <DeleteAccountDialog />
      </Box>
    </>
  );
};

Account.authenticate = true;
Account.getLayout = (page) => <Layout>{page}</Layout>;

export default Account;
