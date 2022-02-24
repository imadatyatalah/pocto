import { Box } from "@pocto/core";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: Props) => {
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
