import Link from "next/link";

import { Box, Flex, Logo, Link as StyledLink, Text } from "@pocto/core";

import { FooterStyles, LinkStyles } from "./styles/Footer.styles";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      css={FooterStyles}
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
              href="https://pocto-blog.vercel.app"
              isExternal
              css={LinkStyles}
            >
              Blog
            </StyledLink>
          </li>

          <li>
            <Link href="/privacy" passHref>
              <StyledLink css={LinkStyles}>Privacy policy</StyledLink>
            </Link>
          </li>

          <li>
            <Link href="/terms" passHref>
              <StyledLink css={LinkStyles}>Terms of service</StyledLink>
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
