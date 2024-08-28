
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
// import Header from "@/components/Header";

export default function customerLayout({
  children
}:
  Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      {/* <Header /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
}
