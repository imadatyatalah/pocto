import { useEffect, useState } from "react";
import Link from "next/link";

import { Flex, Logo, Text } from "ui";

import { HeaderStyles } from "./Header.styles";
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
        <Link href="/" passHref>
          <Logo text="Pocto" />
        </Link>

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
