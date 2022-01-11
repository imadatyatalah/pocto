import { gray } from "@radix-ui/colors";

import { styled } from "../../../stitches.config";

const StyledButton = styled("button", {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  userSelect: "none",
  outline: "none",
  fontWeight: "600",
  transition: "all 250ms ease",
  px: 15,

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      default: {
        border: "1px solid #757bc8",
        backgroundColor: "#757bc8",
        color: "White",

        "&:hover, &:focus": {
          color: "#757bc8",
          backgroundColor: "transparent",
        },
        "&:disabled": {
          color: "White",
          backgroundColor: "$primary4",
          border: "1px solid $primary4",
        },
      },
      outline: {
        border: `1px solid ${gray.gray7}`,
        backgroundColor: "transparent",
        color: gray.gray11,

        "&:hover, &:focus": {
          color: "Black",
          border: "1px solid Black",
        },
        "&:disabled": {
          color: gray.gray11,
          border: `1px solid ${gray.gray7}`,
        },
      },
      danger: {
        border: "1px solid #EF4444",
        backgroundColor: "#EF4444",
        color: "White",

        "&:hover, &:focus": {
          color: "#EF4444",
          backgroundColor: "transparent",
        },
        "&:disabled": {
          color: "White",
          backgroundColor: "#F87171",
          border: "1px solid #F87171",
        },
      },
    },

    size: {
      sm: {
        height: 38,
        fontSize: 14,
      },
      md: {
        height: 44,
        fontSize: 16,
      },
      lg: {
        height: 50,
        fontSize: 18,
      },
    },
    shape: {
      default: {
        rounded: 8,
      },
    },
    isFullWidth: {
      true: {
        width: "100%",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "default",
    shape: "default",
  },
});

export default StyledButton;
