import { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Heading, Flex, Link as StyledLink, Text } from "ui";
import { NextSeo } from "next-seo";

import useUser from "@/stores/useUser";

const WelcomeBack = () => {
  return (
    <>
      <NextSeo title="Welcome back" />

      <Flex direction="column" justify="center" css={{ minHeight: "100vh" }}>
        <Heading as="h1" size="3xl" css={{ mb: 16, fontWeight: 500 }}>
          Welcome back!
        </Heading>

        <div>
          <Text css={{ mb: 4 }}>
            You are already logged in and will be redirected back to Pocto
            shortly.
          </Text>

          <Text>
            If you are not redirected automatically, follow this{" "}
            <Link href="/" passHref>
              <StyledLink>link</StyledLink>
            </Link>
            .
          </Text>
        </div>
      </Flex>
    </>
  );
};

const RedirectLoggedInUsers = <P extends any>(
  WrappedComponent: ComponentType<P>
) =>
  function RedirectLoggedInUsersWrapper(props: any) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { replace } = useRouter();

    const logged_in = useUser((state) => state.logged_in);

    useEffect(() => {
      setIsLoggedIn(logged_in);

      logged_in && replace("/");
    }, [logged_in, replace]);

    return isLoggedIn ? <WelcomeBack /> : <WrappedComponent {...props} />;
  };

export default RedirectLoggedInUsers;
