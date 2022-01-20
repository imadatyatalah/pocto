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
} from "ui";
import { styled } from "ui/stitches.config";
import { blackA, violet } from "@radix-ui/colors";
import { CLIENT_ROUTES } from "shared/routes";

import Avatar from "../Avatar";

import type { TCurrentUser } from "@/types/user";

const ImageButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  rounded: "100%",
  size: 40,
  backgroundColor: "$primary1",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

type Props = {
  currentUser: TCurrentUser;
};

const LoggedInHeader = ({ currentUser }: Props) => {
  const currentUserPage = CLIENT_ROUTES.USER_PAGE(currentUser?.username);

  return (
    <Flex as="nav">
      <Link href={CLIENT_ROUTES.CREATE_POST} passHref>
        <Button size="sm" as="a">
          Create Post
        </Button>
      </Link>

      <Box css={{ ml: 20 }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ImageButton>
              <Avatar />
            </ImageButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={5} align="end">
            <Link href={currentUserPage} passHref>
              <DropdownMenuItem
                as="a"
                css={{
                  display: "inline-block",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: violet.violet11,
                  },
                }}
              >
                Signed in as <strong>{currentUser?.username}</strong>
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <Link href={currentUserPage} passHref>
              <DropdownMenuItem as="a">Your profile</DropdownMenuItem>
            </Link>

            <Link href={CLIENT_ROUTES.CREATE_POST} passHref>
              <DropdownMenuItem as="a">Create Post</DropdownMenuItem>
            </Link>

            <Link href={CLIENT_ROUTES.CREATE_COMMUNITY} passHref>
              <DropdownMenuItem as="a">Create Community</DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <Link href={CLIENT_ROUTES.SETTINGS_PROFILE_PAGE} passHref>
              <DropdownMenuItem as="a">Settings</DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <Link href={CLIENT_ROUTES.CONFIRM_SIGNUOUT} passHref>
              <DropdownMenuItem as="a">Sign Out</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </Flex>
  );
};

export default LoggedInHeader;
