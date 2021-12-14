import { styled } from "@stitches/react";
import { gray } from "@radix-ui/colors";

const StyledInput = styled("input", {
  backgroundColor: gray.gray3,
  borderRadius: 5,
  height: 35,
  padding: "0 12px 0 12px",

  "&:hover": {
    boxShadow: "0 0 8px #ADA7FF",
  },

  "&:focus": {
    boxShadow: "0 0 8px #8187DC",
    outline: "none",
  },

  "&:hover, &:focus": {
    backgroundColor: "White",
  },

  variants: {
    isFullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});

export default StyledInput;
