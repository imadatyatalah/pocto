import Link from "next/link";
import Image, { ImageProps } from "next/image";

import { Flex, Link as StyledLink } from "ui";
import { styled } from "ui/stitches.config";

const StyledImage = styled(Image, {
  borderRadius: "0.5rem",
});

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <StyledLink {...props}>{props.children}</StyledLink>
      </Link>
    );
  }

  return <StyledLink isExternal {...props} />;
};

const CustomImage = (props: ImageProps) => (
  <Flex>
    <StyledImage {...props} />
  </Flex>
);

const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
};

export default MDXComponents;
