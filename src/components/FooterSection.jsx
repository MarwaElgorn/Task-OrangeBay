import Footer from "./Footer";
import wave from "../assets/images/footer/bg-elements.svg";

const FooterSection = () => {
  return (
    <div className="relative">
      <img
        src={wave}
        alt=""
        className="
        hidden lg:block
        w-full block"
      />

      <Footer />
    </div>
  );
};

export default FooterSection;