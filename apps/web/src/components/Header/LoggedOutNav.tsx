import Link from "next/link";

import { Flex, Text, Link as StyledLink } from "ui";
import { styled } from "ui/stitches.config";
import { CLIENT_ROUTES } from "shared/routes";

const StyledNavLink = styled(StyledLink, {
  color: "GrayText",
  "&:hover": { textDecoration: "none" },
});

const LoggedOutHeader = () => {
  return (
    <nav>
      <Flex as="ul">
        <li>
          <Link href={CLIENT_ROUTES.SIGN_IN} passHref>
            <StyledNavLink>Sign in</StyledNavLink>
          </Link>
        </li>
        <Text
          as="li"
          css={{
            mx: 5,
            color: "GrayText",
            userSelect: "none",
          }}
        >
          /
        </Text>
        <li>
          <Link href={CLIENT_ROUTES.SIGN_UP} passHref>
            <StyledNavLink>Sign up</StyledNavLink>
          </Link>
        </li>
      </Flex>
    </nav>
  );
};

export default LoggedOutHeader;
