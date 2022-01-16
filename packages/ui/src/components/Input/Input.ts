import { gray } from "@radix-ui/colors";

import { styled } from "../../../stitches.config";

const StyledInput = styled("input", {
  variants: {
    isFullWidth: {
      true: {
        width: "100%",
      },
    },

    variant: {
      default: {
        backgroundColor: gray.gray3,
        borderRadius: 6,
        height: 35,
        px: 12,

        "&:hover": {
          boxShadow: "0 0 8px $primary5",
        },

        "&:focus": {
          boxShadow: "0 0 8px $primary2",
          outline: "none",
        },

        "&:hover, &:focus": {
          backgroundColor: "White",
        },
      },
    },

    state: {
      danger: {
        border: "1px solid Red",
      },
    },
  },

  defaultVariants: { variant: "default" },
});

export default StyledInput;
