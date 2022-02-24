import Link from "next/link";

import { Flex, Logo, Text } from "@pocto/core";

const Header = () => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      css={{ px: 20, height: 65, "@md": { px: 40 } }}
    >
      <Flex align="end">
        <Link href="/" passHref>
          <Logo text="Admin" />
        </Link>

        <Text as="sup" css={{ fontWeight: 600, color: "$primary1" }}>
          Alpha
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
