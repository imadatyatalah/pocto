import { Box } from "@pocto/core";

import SettingsHeader from "./SettingsHeader";
import Links from "./Links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="section" css={{ "@md": { mx: 20, my: 10 } }}>
      <SettingsHeader />

      <Box css={{ "@md": { display: "flex" } }}>
        <Links />

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
