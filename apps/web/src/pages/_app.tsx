import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import shallow from "zustand/shallow";

import { QueryClientOptions } from "@/lib/queryClient";
import CustomToaster from "@/components/CustomToaster";
import Loading from "@/components/Loading";
import useUser from "@/stores/useUser";
import GlobalLayout from "@/layouts/Global";
import SEO from "next-seo.config";

import "@/styles/globals.css";
import "@/styles/resets.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  authenticate: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { replace } = useRouter();

  const { currentUser, logged_in, fetchUser } = useUser(
    ({ user, logged_in, fetchUser }) => ({
      currentUser: user,
      logged_in,
      fetchUser,
    }),
    shallow
  );

  useEffect(() => {
    fetchUser();
    setIsLoggedIn(logged_in);

    if (Component.authenticate && !logged_in) {
      replace("/signin");
    }
  }, [Component.authenticate, fetchUser, replace, logged_in]);

  const getLayout = Component.getLayout ?? ((page) => page);

  if (Component.authenticate && !isLoggedIn) {
    return <Loading />;
  }

  return (
    <>
      <DefaultSeo {...SEO} />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalLayout>
            {getLayout(<Component currentUser={currentUser} {...pageProps} />)}
            <CustomToaster />
          </GlobalLayout>
        </Hydrate>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
