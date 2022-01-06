import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

import { QueryClientOptions } from "@/lib/queryClient";
import CustomToaster from "@/components/CustomToaster";
import useUser from "@/stores/useUser";
import GlobalLayout from "@/layouts/Global";
import SEO from "next-seo.config";

import "@/styles/globals.css";
import "@/styles/resets.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));

  const fetchUser = useUser((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      <DefaultSeo {...SEO} />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalLayout>
            <Component {...pageProps} />
            <CustomToaster />
          </GlobalLayout>
        </Hydrate>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
