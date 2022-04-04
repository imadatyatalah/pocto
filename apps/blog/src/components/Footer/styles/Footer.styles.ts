import { gray } from "@radix-ui/colors";

import type { CSS } from "@pocto/core/stitches.config";

export const FooterStyles: CSS = {
  padding: 20,
  borderTop: `1px solid ${gray.gray6}`,
  textAlign: "center",
};

export const IconsStyles: CSS = {
  color: "inherit",
  opacity: "80%",
  "&:hover": {
    textDecoration: "none",
    opacity: "100%",
  },
};
