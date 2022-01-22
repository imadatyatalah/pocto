import { styled } from "ui/stitches.config";
import { blackA } from "@radix-ui/colors";

export const StyledDropDownLink = styled("a", {
  width: "100%",
});

export const StyledLinkIcon = styled("a", {
  "& svg": {
    width: 20,
    height: 20,

    "&:hover": {
      opacity: "75%",
    },
  },
});

export const ImageButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  rounded: "100%",
  size: 42.5,
  display: "flex",
  backgroundColor: "$primary1",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:focus": { boxShadow: `0 0 0 2px black` },
});
