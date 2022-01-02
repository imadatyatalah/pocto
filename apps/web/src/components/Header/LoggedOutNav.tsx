import Link from "next/link";

import { Flex, Link as StyledLink } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

const LoggedOutHeader = () => {
  return (
    <nav>
      <Flex as="ul">
        <li>
          <Link href={CLIENT_ROUTES.SIGN_IN} passHref>
            <StyledLink>Sign In</StyledLink>
          </Link>
        </li>
        <li style={{ margin: "0 5px 0 5px", color: "gray" }}>/</li>
        <li>
          <Link href={CLIENT_ROUTES.SIGN_UP} passHref>
            <StyledLink>Sign Up</StyledLink>
          </Link>
        </li>
      </Flex>
    </nav>
  );
};

export default LoggedOutHeader;
