import { gray } from "@radix-ui/colors";

import { CSS, styled } from "ui/stitches.config";

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

export const CommentStyles: CSS = {
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
