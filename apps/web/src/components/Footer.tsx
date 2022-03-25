import Link from "next/link";

import { Box, Flex, Logo, Link as StyledLink, Text } from "@pocto/core";
import { gray } from "@radix-ui/colors";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      css={{ padding: 20, backgroundColor: gray.gray3, textAlign: "center" }}
    >
      <div>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>

      <Box css={{ my: 10 }}>
        <Flex as="ul">
          <li>
            <StyledLink
              href="https://blog.pocto.io"
              isExternal
              css={{ fontWeight: 400, mx: 8, mr: 5 }}
            >
              Blog
            </StyledLink>
          </li>

          <li>
            <Link href="/privacy" passHref>
              <StyledLink css={{ fontWeight: 400, mx: 8 }}>
                Privacy policy
              </StyledLink>
            </Link>
          </li>

          <li>
            <Link href="/terms" passHref>
              <StyledLink css={{ fontWeight: 400, mx: 8 }}>
                Terms of service
              </StyledLink>
            </Link>
          </li>
        </Flex>
      </Box>

      <Box>
        <Text css={{ color: "GrayText" }}>
          &copy; 2022 Pocto. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
