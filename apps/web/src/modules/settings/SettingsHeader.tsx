import Link from "next/link";

import { Box, Flex, Text, Heading, Button, Link as StyledLink } from "ui";
import { CLIENT_ROUTES } from "shared/routes";

import useUser from "@/stores/useUser";
import Avatar from "@/components/Avatar";

const SettingsHeader = () => {
  const currentUser = useUser((state) => state.user);

  const currentUserPage = CLIENT_ROUTES.USER_PAGE(currentUser?.username);

  return (
    <Box
      as="header"
      css={{
        mb: 10,
        "@md": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
    >
      <Flex align="center">
        <Box
          css={{ size: 50, background: "$primary1", rounded: "100%", mr: 10 }}
        >
          <Avatar />
        </Box>

        <Box>
          <Heading as="h1" size="xl">
            <Link href={currentUserPage} passHref>
              <StyledLink css={{ color: "inherit" }}>
                {currentUser?.name}
              </StyledLink>
            </Link>
          </Heading>

          <Text css={{ color: "DimGray", fontSize: 14 }}>
            Your personal account
          </Text>
        </Box>
      </Flex>

      <Box css={{ mt: 10, "@md": { mt: 0 } }}>
        <Link href={currentUserPage} passHref>
          <Button as="a" variant="outline" size="sm">
            Go to your personal account
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SettingsHeader;
