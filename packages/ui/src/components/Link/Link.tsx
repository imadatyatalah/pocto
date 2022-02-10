import { forwardRef } from "react";

import { styled } from "../../../stitches.config";

import type { CSS } from "../../../stitches.config";

const StyledLink = styled("a", {
  color: "#0645AD",

  "&:hover": {
    textDecoration: "underline",
  },
});

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  css?: CSS;
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { isExternal, ...rest } = props;

  return (
    <StyledLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      ref={ref}
      {...rest}
    />
  );
});

export default Link;
