import { Box } from "ui";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box as="main" css={{ padding: 20, "@md": { px: 40 } }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default GlobalLayout;
