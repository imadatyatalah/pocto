import { createStitches } from "@stitches/react";

import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary1: "#29a19c",
      primary2: "#3DAFA2",
      primary3: "#52BEA8",
      primary4: "#66CCAE",
      primary5: "#7ADAB3",
      primary6: "#8FE9B9",
      primary7: "#A3F7BF",
    },
  },
  media: {
    xs: "(min-width: 480px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
  utils: {
    // padding
    // p: (value: any) => ({
    //   padding: value,
    // }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // margin
    // m: (value: any) => ({
    //   margin: value,
    // }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (value: any) => ({
      width: value,
      height: value,
    }),

    rounded: (value: any) => ({
      borderRadius: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;
