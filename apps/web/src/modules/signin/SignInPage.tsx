import Link from "next/link";

import { NextSeo } from "next-seo";
import { CLIENT_ROUTES } from "shared/routes";
import { Flex, Heading, Link as StyledLink } from "ui";

import RedirectLoggedInUsers from "@/hocs/redirectLoggedInUsers";
import SigninForm from "./SignInForm";

const SignInPage = () => {
  return (
    <>
      <NextSeo title="Sign In" />

      <Flex direction="column" align="center" as="section">
        <Heading css={{ float: "left", width: 400 }}>Sign In to Pocto</Heading>

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

export default RedirectLoggedInUsers(SignInPage);
