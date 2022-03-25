import Link from "next/link";

import { Flex, Logo, Text } from "@pocto/core";

import { HeaderStyles } from "./styles/Header.styles";

const Header = () => {
  return (
    <Flex as="header" justify="between" align="center" css={HeaderStyles}>
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
