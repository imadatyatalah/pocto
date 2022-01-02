import { useEffect, useState } from "react";
import Link from "next/link";

import { Flex, Logo } from "ui";

import { HeaderStyles } from "./Header.styles";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
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

      {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
    </Flex>
  );
};

export default Header;
