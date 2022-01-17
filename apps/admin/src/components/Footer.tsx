import Link from "next/link";

import { Box, Flex, Logo, Text, Link as StyledLink } from "ui";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      css={{ padding: 20 }}
    >
      <div>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>

      <Box css={{ mt: 10 }}>
        <Text>
          Made with ❤️ by{" "}
          <StyledLink
            href="https://imadatyatalah.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imad Atyat-Alah
          </StyledLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
