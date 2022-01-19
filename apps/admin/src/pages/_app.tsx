import { useState } from "react";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

import GlobalLayout from "@/layouts/Global";

import "@/styles/globals.css";
import "@/styles/resets.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </Hydrate>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
