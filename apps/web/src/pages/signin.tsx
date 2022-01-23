import Link from "next/link";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import { CLIENT_ROUTES } from "shared/routes";
import { Flex, Heading, Link as StyledLink } from "ui";

import RedirectLoggedInUsers from "@/hocs/redirectLoggedInUsers";
import SigninForm from "@/modules/signin/SigninForm";

const SignIn: NextPage = () => {
  return (
    <>
      <NextSeo title="Sign In" />

      <Flex direction="column" align="center" as="section">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Sign In to Pocto
        </Heading>

        <SigninForm />

        <div>
          <p>
            Not a member?{" "}
            <Link href={CLIENT_ROUTES.SIGN_UP} passHref>
              <StyledLink>Sign up now</StyledLink>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  );
};

export default RedirectLoggedInUsers(SignIn);
