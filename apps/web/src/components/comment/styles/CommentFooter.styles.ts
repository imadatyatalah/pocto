import { gray } from "@radix-ui/colors";

import { styled } from "@pocto/core/stitches.config";

export const StyledIconWrapper = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  color: gray.gray10,
  fontWeight: 500,
  fontSize: 15,

  "& svg": {
    fill: gray.gray10,
    width: 20,
    height: 20,
    mr: 5,
  },

  "&:hover": {
    color: "Black",

    "& svg": {
      fill: "Black",
    },
  },
});
