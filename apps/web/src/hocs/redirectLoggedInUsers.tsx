import { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Heading, Link as StyledLink } from "ui";
import { NextSeo } from "next-seo";

import useUser from "@/stores/useUser";

const WelcomeBack = () => {
  return (
    <>
      <NextSeo title="Welcome back" />

      <section>
        <Heading as="h1">Welcome back!</Heading>

        <p>
          You are already logged in and will be redirected back to Pocto
          shortly.
          <br />
          If you are not redirected automatically, follow this{" "}
          <Link href="/" passHref>
            <StyledLink>link</StyledLink>
          </Link>
          .
        </p>
      </section>
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
