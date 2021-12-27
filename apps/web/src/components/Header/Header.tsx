import { useEffect, useState } from "react";
import Link from "next/link";

import { Flex, Logo, Button, Link as StyledLink } from "ui";

import { HeaderStyles } from "./Header.styles";
import useUser from "@/stores/useUser";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logged_in = useUser((state) => state.logged_in);

  useEffect(() => {
    setIsLoggedIn(logged_in);
  }, [logged_in]);

  return (
    <Flex as="header" justify="between" align="center" css={HeaderStyles}>
      <div>
        <Link href="/" passHref>
          <Logo text="Pocto" />
        </Link>
      </div>

      <nav>
        <Flex as="ul">
          {isLoggedIn ? (
            <li>
              <Link href="/confirm_signout" passHref>
                <Button size="sm" as="a">
                  Sign Out
                </Button>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/signin" passHref>
                  <StyledLink>Sign In</StyledLink>
                </Link>
              </li>
              <li style={{ margin: "0 5px 0 5px", color: "gray" }}>/</li>
              <li>
                <Link href="/signup" passHref>
                  <StyledLink>Sign Up</StyledLink>
                </Link>
              </li>
            </>
          )}
        </Flex>
      </nav>
    </Flex>
  );
};

export default Header;
