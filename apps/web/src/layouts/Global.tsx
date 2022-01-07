import { Box } from "ui";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box as="main" css={{ px: 20 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default GlobalLayout;
