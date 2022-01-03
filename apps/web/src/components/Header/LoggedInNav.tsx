import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Link as StyledLink,
} from "ui";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { CLIENT_ROUTES } from "shared/routes";

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

const LoggedInHeader = () => {
  return (
    <nav>
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
          <DropdownMenuItem>
            <Link href={CLIENT_ROUTES.CONFIRM_SIGNUOUT} passHref>
              <StyledLink
                css={{
                  color: "inherit",
                  width: "100%",
                  "&:hover": { textDecoration: "none" },
                }}
              >
                Sign Out
              </StyledLink>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default LoggedInHeader;
