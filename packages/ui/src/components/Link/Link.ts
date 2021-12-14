import { styled } from "@stitches/react";
import { cyan } from "@radix-ui/colors";

const StyledLink = styled("a", {
  color: cyan.cyan10,

  "&:hover": {
    textDecoration: "underline",
  },
});

export default StyledLink;
