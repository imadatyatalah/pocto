import Link from "next/link";

import { Heading, Box, Text, Button } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

const HeroSection = () => {
  return (
    <Box css={{ py: 30, textAlign: "center" }}>
      <Heading as="h1" size="3xl" css={{ fontWeight: 700 }}>
        Discover the world’s top designers & creatives
      </Heading>

      <Text css={{ my: 14 }}>
        Dribbble is the leading destination to find & showcase creative work and
        home to the world's best design professionals.
      </Text>

      <Link href={CLIENT_ROUTES.SIGN_UP} passHref>
        <Button as="a" size="sm">
          Sign up
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
