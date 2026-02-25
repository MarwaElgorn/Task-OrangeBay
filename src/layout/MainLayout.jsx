import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}

export default MainLayout;
