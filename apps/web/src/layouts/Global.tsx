import { Box } from "ui";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box as="main" css={{ padding: "0 20px" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default GlobalLayout;
