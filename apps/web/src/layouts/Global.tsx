import Header from "@/components/Header/Header";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default GlobalLayout;
