import { styled } from "@stitches/react";

const StyledHeading = styled("h2", {
  fontWeight: 600,

  variants: {
    size: {
      sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
      base: { fontSize: "1rem", lineHeight: "1.5rem" },
      lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
      xl: { fontSize: "1.25rem", lineHeight: "1.75rem" },
      "2xl": { fontSize: "1.5rem", lineHeight: "2rem" },
      "3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
      "4xl": { fontSize: "2.25rem", lineHeight: "2.5rem" },
    },
  },

  defaultVariants: { size: "2xl" },
});

export default StyledHeading;
