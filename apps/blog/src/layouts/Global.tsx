import Header from "@/components/Header";
import Footer from "../components/Footer";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default GlobalLayout;
