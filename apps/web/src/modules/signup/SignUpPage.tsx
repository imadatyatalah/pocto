import Link from "next/link";

import { NextSeo } from "next-seo";
import { CLIENT_ROUTES } from "shared/routes";
import { Flex, Heading, Link as StyledLink } from "ui";

import RedirectLoggedInUsers from "@/hocs/redirectLoggedInUsers";
import SignupForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <NextSeo title="Sign Up" />

      <Flex as="section" direction="column" align="center">
        <Heading as="h1" css={{ float: "left", width: 400 }}>
          Sign Up to Pocto
        </Heading>

        <SignupForm />

        <div>
          <p>
            Already a member?{" "}
            <Link href={CLIENT_ROUTES.SIGN_IN} passHref>
              <StyledLink>Sign In</StyledLink>
            </Link>
          </p>
        </div>
      </Flex>
    </>
  );
};

export default RedirectLoggedInUsers(SignUpPage);
