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

const Link = ({ isExternal, ...rest }: LinkProps) => {
  return (
    <StyledLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...rest}
    />
  );
};

export default Link;
