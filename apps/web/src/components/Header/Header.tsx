import Link from "next/link";

import { Button } from "ui";

import useUser from "@/stores/useUser";
import { apiBaseUrl } from "@/lib/constants";

const Header = () => {
  const logged_in = useUser((state) => state.logged_in);

  return (
    <header>
      <div>{/* Logo */}</div>

      <nav>
        <ul>
          {logged_in ? (
            <a href={`${apiBaseUrl}/auth/logout`}>
              <Button size="sm" type="button">
                Logout
              </Button>
            </a>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
