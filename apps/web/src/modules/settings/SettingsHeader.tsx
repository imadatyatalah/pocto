import Link from "next/link";

import { Box, Flex, Text, Heading, Link as StyledLink } from "ui";
import { CLIENT_ROUTES } from "shared/routes";
import { styled } from "ui/stitches.config";

import useUser from "@/stores/useUser";

const StyledImage = styled("img", {
  rounded: "100%",
});

const SettingsHeader = () => {
  const user = useUser((state) => state.user);

  const currentUserPage = CLIENT_ROUTES.USER_PAGE(user?.username);

  return (
    <Box as="header" css={{ mb: 10 }}>
      <Flex align="center">
        <Box
          css={{
            size: 50,
            background: "#757bc8",
            rounded: "100%",
            mr: 10,
          }}
        >
          <StyledImage
            src="https://avatars.githubusercontent.com/u/70093484?s=400&u=3ca81f91aeb92005a4b5bb3bac464ac9a2493bf8&v=4"
            alt=""
          />
        </Box>

        <Box>
          <Heading as="h1" size="xl">
            <Link href={currentUserPage} passHref>
              <StyledLink css={{ color: "inherit" }}>{user?.name}</StyledLink>
            </Link>
          </Heading>

          <Text>Your personal account</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SettingsHeader;
