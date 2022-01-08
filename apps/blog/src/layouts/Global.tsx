import { Box } from "ui";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box as="main" css={{ px: 20, "@md": { px: 40 } }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default GlobalLayout;
