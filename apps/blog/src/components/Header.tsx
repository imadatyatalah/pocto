import Link from "next/link";

import { Flex, Logo } from "ui";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      css={{ margin: "0 20px", height: 65 }}
    >
      <div>
        <Link href="/" passHref>
          <Logo text="Blog" />
        </Link>
      </div>
    </Flex>
  );
};

export default Header;
