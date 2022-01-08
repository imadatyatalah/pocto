import Link from "next/link";

import { Flex, Logo } from "ui";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      css={{ px: 20, height: 65, "@md": { px: 40 } }}
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
