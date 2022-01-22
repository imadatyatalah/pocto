import Link from "next/link";

import { Flex, Logo } from "ui";
import { gray } from "@radix-ui/colors";

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      css={{ padding: 20, backgroundColor: gray.gray3, textAlign: "center" }}
    >
      <div>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>
    </Flex>
  );
};

export default Footer;
