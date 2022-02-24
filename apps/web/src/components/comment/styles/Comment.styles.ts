import { gray } from "@radix-ui/colors";

import type { CSS } from "@pocto/core/stitches.config";

export const CommentStyles: CSS = {
  my: 10,
  py: 10,
  px: 15,
  rounded: 8,
  width: 500,
  border: `1px solid ${gray.gray6}`,

  "&:hover": {
    backgroundColor: gray.gray3,
  },
};
