import { styled } from "ui/stitches.config";
import { gray } from "@radix-ui/colors";

import type { CSS } from "ui/stitches.config";

export const StyledLinkIcon = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  color: gray.gray10,
  fontWeight: 500,
  fontSize: 15,

  "& svg": {
    fill: gray.gray10,
    width: 20,
    height: 20,
  },

  "&:hover": {
    color: "Black",

    "& svg": {
      fill: "Black",
    },
  },
});

export const PostStyles: CSS = {
  my: 10,
  py: 10,
  px: 15,
  rounded: 8,
  width: 500,
  border: `1px solid ${gray.gray6}`,

  "&:hover": {
    backgroundColor: gray.gray3,
  },
};