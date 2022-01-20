import { gray } from "@radix-ui/colors";

import type { CSS } from "ui/stitches.config";

export const HeaderStyles: CSS = {
  px: 20,
  height: 65,
  borderBottom: `1px solid ${gray.gray6}`,
  backgroundColor: "White",
  position: "sticky",
  top: 0,
  zIndex: "99",

  "@md": { px: 40 },
};
