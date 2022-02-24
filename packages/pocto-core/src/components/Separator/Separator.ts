import * as Separator from "@radix-ui/react-separator";
import { violet } from "@radix-ui/colors";

import { styled } from "../../../stitches.config";

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: violet.violet6,
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});

export default StyledSeparator;
