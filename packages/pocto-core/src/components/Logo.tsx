import { forwardRef } from "react";

import { Flex, Text } from "./index";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   *  The text that will be shown besides the svg logo
   */
  text?: string;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>((props, ref) => {
  const { text, ...rest } = props;

  return (
    <Flex as="a" align="center" ref={ref} {...rest}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="250" height="250" rx="50" fill="url(#paint0_linear_3_9)" />
        <path
          d="M68.75 198H108.239V154.818H130.114C163.281 154.818 185.511 135.287 185.511 103.966C185.511 73 163.849 52.5455 131.534 52.5455H68.75V198ZM108.239 124.136V84.0795H122.159C136.009 84.0795 144.318 91.4659 144.318 103.966C144.318 116.395 136.009 124.136 122.159 124.136H108.239Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_9"
            x1="125"
            y1="125"
            x2="250"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#29A19C" />
            <stop offset="1" stopColor="#66CCAE" />
          </linearGradient>
        </defs>
      </svg>

      {text ? (
        <Text
          as="span"
          css={{
            fontSize: 22,
            fontWeight: 700,
            ml: 8,
            color: "$primary1",
            userSelect: "none",
          }}
        >
          {text}
        </Text>
      ) : null}
    </Flex>
  );
});

export default Logo;
