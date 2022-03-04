import { gray } from "@radix-ui/colors";

import type { CSS } from "@pocto/core/stitches.config";

export const PostStyles: CSS = {
  my: 10,
  py: 10,
  px: 15,
  rounded: 8,
  border: `1px solid ${gray.gray6}`,

  "&:hover": {
    backgroundColor: gray.gray3,
  },
};
