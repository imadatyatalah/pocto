import Link from "next/link";

import { Flex, Logo } from "ui";

const Footer = () => {
  return (
    <Flex as="footer" justify="center" css={{ padding: 20 }}>
      <div>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>
    </Flex>
  );
};

export default Footer;
