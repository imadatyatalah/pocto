import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import GlobalLayout from "@/layouts/Global";
import SEO from "next-seo.config";

import "@/styles/globals.css";
import "@/styles/resets.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
};

export default MyApp;
