import Link from "next/link";

import { Heading, Box, Text, Button } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

/**
 * This component should be displayed only to non logged-in users.
 *
 * It plays the role of a landing page.
 */
const HeroSection = () => {
  return (
    <Box css={{ py: 30, textAlign: "center" }}>
      <Heading size="3xl" css={{ fontWeight: 700 }}>
        Discover the world’s top communities
      </Heading>

      <Text css={{ my: 14 }}>
        <strong>Pocto</strong> is a network of communities where people can dive
        into their interests, hobbies and passions. There&apos;s a community for
        whatever you&apos;re interested in!
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
