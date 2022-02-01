import { NextSeo } from "next-seo";

import Layout from "@/modules/settings/Layout";
import SecurityForm from "@/modules/settings/security/SecurityForm";

import type { PoctoPage } from "@/types/index";

const Security: PoctoPage = () => {
  return (
    <>
      <NextSeo title="Account security" />

      <SecurityForm />
    </>
  );
};

Security.authenticate = true;
Security.getLayout = (page) => <Layout>{page}</Layout>;

export default Security;
