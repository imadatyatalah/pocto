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
import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { violet } from "@radix-ui/colors";
import { CLIENT_ROUTES } from "shared/routes";

import {
  StyledLinkIcon,
  ImageButton,
  StyledDropDownLink,
} from "./styles/LoggedInHeader.styles";
import NotificationIcon from "@/icons/NotificationIcon";
import Avatar from "../Avatar";

import type { TCurrentUser } from "@/types/index";

type Props = {
  currentUser: TCurrentUser;
};

const LoggedInHeader = ({ currentUser }: Props) => {
  const currentUserPage = CLIENT_ROUTES.USER_PAGE(currentUser?.username);

  return (
    <Flex as="nav" align="center">
      <Box css={{ display: "none", "@sm": { display: "block" } }}>
        <Link href={CLIENT_ROUTES.CREATE_POST} passHref>
          <Button as="a" size="sm">
            Create Post
          </Button>
        </Link>
      </Box>

      <Box css={{ mx: 20 }}>
        <Link href="/notifications" passHref>
          <StyledLinkIcon>
            <AccessibleIcon label="Notifications">
              <NotificationIcon />
            </AccessibleIcon>
          </StyledLinkIcon>
        </Link>
      </Box>

      <Box>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ImageButton>
              <Avatar />
            </ImageButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={5} align="end">
            <DropdownMenuItem
              css={{
                "&:hover": {
                  backgroundColor: "inherit",
                  color: violet.violet11,
                },
              }}
            >
              <Link href={currentUserPage} passHref>
                <StyledDropDownLink>
                  Signed in as <strong>{currentUser?.username}</strong>
                </StyledDropDownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={currentUserPage} passHref>
                <StyledDropDownLink>Your profile</StyledDropDownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.CREATE_POST} passHref>
                <StyledDropDownLink>Create Post</StyledDropDownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.CREATE_COMMUNITY} passHref>
                <StyledDropDownLink>Create Community</StyledDropDownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.SETTINGS_PROFILE_PAGE} passHref>
                <StyledDropDownLink>Settings</StyledDropDownLink>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={CLIENT_ROUTES.CONFIRM_SIGNUOUT} passHref>
                <StyledDropDownLink>Sign Out</StyledDropDownLink>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </Flex>
  );
};

export default LoggedInHeader;
