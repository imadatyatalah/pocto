import { useEffect, useState } from "react";
import Link from "next/link";

import { Flex, Logo, Text } from "@pocto/core";

import { HeaderStyles } from "./styles/Header.styles";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import useUser from "@/stores/useUser";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const currentUser = useUser((state) => state.user);
  const logged_in = useUser((state) => state.logged_in);

  useEffect(() => {
    setIsLoggedIn(logged_in);
  }, [logged_in]);

  return (
    <Flex as="header" justify="between" align="center" css={HeaderStyles}>
      <Flex align="end">
        <h1>
          <Link href="/" passHref>
            <Logo text="Pocto" aria-label="Pocto" />
          </Link>
        </h1>

        <Text as="sup" css={{ fontWeight: 600, color: "$primary1" }}>
          Alpha
        </Text>
      </Flex>

      {isLoggedIn ? (
        <LoggedInNav currentUser={currentUser} />
      ) : (
        <LoggedOutNav />
      )}
    </Flex>
  );
};

export default Header;
