import Link from "next/link";
import Image, { ImageProps } from "next/image";

import { Flex, Heading, Link as StyledLink } from "@pocto/core";
import { styled } from "@pocto/core/stitches.config";

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
  // Headings
  h2: ({ children }) => (
    <Heading as="h2" size="2xl">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" size="xl">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" size="lg">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading as="h5" size="base">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading as="h6" size="sm">
      {children}
    </Heading>
  ),

  a: CustomLink,
  Image: CustomImage,
};

export default MDXComponents;
