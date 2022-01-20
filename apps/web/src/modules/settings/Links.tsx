import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";

import { CLIENT_ROUTES } from "shared/routes";
import { Box, Flex, Link as StyledLink, Separator, Text } from "ui";
import { gray, violet } from "@radix-ui/colors";

import type { CSS } from "ui/stitches.config";

const LINKS = [
  { title: "Profile", link: CLIENT_ROUTES.SETTINGS_PROFILE_PAGE },
  { title: "Account", link: CLIENT_ROUTES.SETTINGS_ACCOUNT_PAGE },
  { title: "Account security", link: CLIENT_ROUTES.SETTINGS_SECURITY_PAGE },
];

type Props = { title: string; link: string };

const NavLink = ({ title, link }: Props) => {
  const { pathname } = useRouter();

  const currentLink = pathname === link;

  const LinkStyles: CSS = {
    color: "Black",
    background: currentLink && gray.gray3,
    cursor: currentLink && "default",
    padding: "5px 10px",

    "&:hover": {
      textDecoration: "none",
      background: gray.gray3,
    },
  };

  return (
    <Link href={link} passHref>
      <StyledLink css={LinkStyles}>{title}</StyledLink>
    </Link>
  );
};

const Links = () => {
  return (
    <Box
      css={{
        my: 10,
        "@md": { mr: 15, minWidth: 250, my: 0 },
        "@lg": { minWidth: 295 },
      }}
    >
      <Flex
        as="nav"
        direction="column"
        css={{ border: `1px solid ${violet.violet6}`, rounded: 8 }}
      >
        <Text as="span" css={{ padding: "5px 10px", fontWeight: 600 }}>
          Account settings
        </Text>

        <Separator />

        {LINKS.map((props) => (
          <Fragment key={props.title}>
            <NavLink {...props} />
            <Separator />
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default Links;
