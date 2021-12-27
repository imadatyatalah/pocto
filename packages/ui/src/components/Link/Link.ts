import { styled } from "@stitches/react";

const StyledLink = styled("a", {
  color: "#0645AD",

  "&:hover": {
    textDecoration: "underline",
  },
});

export default StyledLink;
