import { useEffect, useState } from "react";
import Link from "next/link";

import { Flex } from "ui";

import { HeaderStyles } from "./Header.styles";
import useUser from "@/stores/useUser";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logged_in = useUser((state) => state.logged_in);
  const user = useUser((state) => state.user);

  useEffect(() => {
    setIsLoggedIn(logged_in);
  }, [logged_in]);

  return (
    <Flex as="header" justify="between" align="center" css={HeaderStyles}>
      <div>Signed in as {user?.name}</div>

      <nav>
        <Flex as="ul">
          {isLoggedIn ? (
            <li>
              <Link href="/confirm_signout">
                <a>Sign Out</a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/signin">
                  <a>Sign In</a>
                </Link>
              </li>
              <li style={{ margin: "0 5px 0 5px" }}>/</li>
              <li>
                <Link href="/signup">
                  <a>Sign Up</a>
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
