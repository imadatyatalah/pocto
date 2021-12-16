import Link from "next/link";

import { Flex } from "ui";

import useUser from "@/stores/useUser";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logged_in = useUser((state) => state.logged_in);

  useEffect(() => {
    setIsLoggedIn(logged_in);
  }, [logged_in]);

  return (
    <header>
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
    </header>
  );
};

export default Header;
