import { gray } from "@radix-ui/colors";

import type { CSS } from "@pocto/core/stitches.config";

export const IconsStyles: CSS = {
  color: "inherit",
  opacity: "80%",
  "&:hover": {
    textDecoration: "none",
    opacity: "100%",
  },
};

export const FooterStyles: CSS = {
  padding: 20,
  backgroundColor: gray.gray3,
  textAlign: "center",
};
