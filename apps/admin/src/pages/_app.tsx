import type { AppProps } from "next/app";

import GlobalLayout from "@/layouts/Global";

import "@/styles/globals.css";
import "@/styles/resets.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
};

export default MyApp;
