import Link from "next/link";

import {
  Box,
  Flex,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  Link as StyledLink,
} from "ui";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { CLIENT_ROUTES } from "shared/routes";
import { violet } from "@radix-ui/colors";

import type { TUser } from "@/types/user";

const ImageButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  borderRadius: "100%",
  height: 40,
  width: 40,
  backgroundColor: "#757bc8",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const StyledImage = styled("img", {
  borderRadius: "100%",
});

const StyledDropdownLink = styled(StyledLink, {
  color: "inherit",
  width: "100%",
  "&:hover": { textDecoration: "none" },
});

type Props = {
  user: TUser;
};

const LoggedInHeader = ({ user }: Props) => {
  const currentUserPage = CLIENT_ROUTES.USER_PAGE(user.username);

  return (
    <Flex as="nav">
      <Link href={CLIENT_ROUTES.CREATE_POST} passHref>
        <Button size="sm" as="a">
          Create Post
        </Button>
      </Link>

      <Box css={{ marginLeft: 20 }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ImageButton>
              <StyledImage
                src="https://avatars.githubusercontent.com/u/70093484?s=400&u=3ca81f91aeb92005a4b5bb3bac464ac9a2493bf8&v=4"
                alt=""
              />
            </ImageButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuItem
              css={{
                "&:focus": {
                  backgroundColor: "transparent",
                  color: violet.violet11,
                },
              }}
            >
              <Link href={currentUserPage} passHref>
                <StyledDropdownLink>
                  Signed in as <strong>{user.username}</strong>
                </StyledDropdownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={currentUserPage} passHref>
                <StyledDropdownLink>Your profile</StyledDropdownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.CREATE_POST} passHref>
                <StyledDropdownLink>Create Post</StyledDropdownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.SETTINGS_PROFILE_PAGE} passHref>
                <StyledDropdownLink>Settings</StyledDropdownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.CONFIRM_SIGNUOUT} passHref>
                <StyledDropdownLink>Sign Out</StyledDropdownLink>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </Flex>
  );
};

export default LoggedInHeader;
