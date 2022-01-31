import { NextSeo } from "next-seo";
import { Heading } from "ui";

import type { PoctoPage } from "@/types/index";

const Notifications: PoctoPage = () => {
  return (
    <>
      <NextSeo title="Notifications" />

      <section>
        <Heading as="h1">Notifications</Heading>
      </section>
    </>
  );
};

Notifications.authenticate = true;

export default Notifications;
