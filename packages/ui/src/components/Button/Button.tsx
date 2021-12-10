import { styled } from "@stitches/react";

const Button = styled("button", {
  fontFamily: "inherit",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  cursor: "pointer",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  userSelect: "none",
  outline: "none",
  fontSize: 15,
  fontWeight: "600",
  borderRadius: 8,
  padding: "0 14px 0 14px",

  variants: {
    variant: {
      default: {
        // https://coolors.co/757bc8-8187dc-8e94f2-9fa0ff-ada7ff-bbadff-cbb2fe-dab6fc-ddbdfc-e0c3fc
        border: "1px solid #757bc8",
        backgroundColor: "#757bc8",
        color: "White",
      },
    },
    size: {
      sm: {
        height: 38,
        fontSize: 14,
      },
      md: {
        height: 43,
        fontSize: 16,
      },
      lg: {
        height: 48,
        fontSize: 18,
      },
    },
  },

  defaultVariants: { size: "md", variant: "default" },
});

export default Button;
