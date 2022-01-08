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
  padding: "0 15px 0 15px",
  transition: "all 250ms ease",

  variants: {
    variant: {
      default: {
        // https://coolors.co/757bc8-8187dc-8e94f2-9fa0ff-ada7ff-bbadff-cbb2fe-dab6fc-ddbdfc-e0c3fc
        border: "1px solid #757bc8",
        backgroundColor: "#757bc8",
        color: "White",

        "&:hover, &:focus": {
          backgroundColor: "transparent",
          color: "#757bc8",
          border: "1px solid #757bc8",
        },
      },
      danger: {
        border: "1px solid #EF4444",
        backgroundColor: "#EF4444",
        color: "White",

        "&:hover, &:focus": {
          backgroundColor: "transparent",
          color: "#EF4444",
          border: "1px solid #EF4444",
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

  defaultVariants: { size: "md", variant: "default", shape: "default" },
});

export default StyledButton;
