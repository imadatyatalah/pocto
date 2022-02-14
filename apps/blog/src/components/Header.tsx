import Link from "next/link";

import { Flex, Logo, Text } from "ui";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      css={{ px: 20, height: 65, "@md": { px: 40 } }}
    >
      <Flex align="end">
        <h1>
          <Link href="/" passHref>
            <Logo text="Blog" aria-label="Pocto Blog" />
          </Link>
        </h1>

        <Text as="sup" css={{ fontWeight: 600, color: "$primary1" }}>
          Alpha
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
