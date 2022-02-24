import Link from "next/link";

import { Box, Flex, Logo, Text, Link as StyledLink } from "@pocto/core";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { gray } from "@radix-ui/colors";

import type { CSS } from "@pocto/core/stitches.config";

const IconsStyles: CSS = {
  color: "inherit",
  opacity: "80%",
  "&:hover": {
    textDecoration: "none",
    opacity: "100%",
  },
};

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
        <Flex align="center" as="ul">
          <Text as="li" css={{ mx: 4 }}>
            <StyledLink
              href="https://twitter.com/ImadAtyat"
              isExternal
              css={IconsStyles}
            >
              <TwitterLogoIcon width="24" height="24" />
            </StyledLink>
          </Text>

          <Text as="li" css={{ mx: 4 }}>
            <StyledLink
              href="https://github.com/imadatyatalah"
              isExternal
              css={IconsStyles}
            >
              <GitHubLogoIcon width="24" height="24" />
            </StyledLink>
          </Text>
        </Flex>
      </Box>

      <Box>
        <Text css={{ color: "GrayText" }}>
          &copy; 2022 Pocto Blog. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
