import Link from "next/link";
import { useRouter } from "next/router";

import { CLIENT_ROUTES } from "shared/routes";
import { Link as StyledLink } from "ui";

const LINKS = [
  { title: "Profile", link: CLIENT_ROUTES.SETTINGS_PROFILE_PAGE },
  { title: "Account", link: CLIENT_ROUTES.SETTINGS_ACCOUNT_PAGE },
  { title: "Security", link: CLIENT_ROUTES.SETTINGS_SECURITY_PAGE },
];

const Links = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <nav>
        {LINKS.map(({ title, link }) => (
          <Link href={link} passHref key={title}>
            <StyledLink css={{ color: pathname === link && "red" }}>
              {title}
            </StyledLink>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Links;
