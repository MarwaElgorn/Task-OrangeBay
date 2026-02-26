import facebook from "../assets/images/footer/facebook.svg";
import instagram from "../assets/images/footer/instagram.svg";
import whatsapp from "../assets/images/footer/whatsapp.svg";
import x from "../assets/images/footer/twitter.svg";
import apple from "../assets/images/Appdownload/applestore.svg";
import googleplay from "../assets/images/Appdownload/googleplay.svg";
import { FiMail } from "react-icons/fi";
import OmarinaLogo from "/omarina-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white pt-4">
  
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[56px] ">

        {/* LOGO + DESC */}
        <div className="text-center sm:text-left">
          <img
            src={OmarinaLogo}
            alt="Omarina logo"
            className="w-28 mx-auto sm:mx-0 mb-4"
          />

          <p className="font-poppins text-base sm:text-[20px] leading-6 sm:leading-[26px] text-gray-400 mb-6">
            Omarina is your all-in-one platform for boat rentals, sea trips,
            and marina services across the Red Sea.
          </p>

          <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4">
            {[facebook, instagram, whatsapp, x].map((icon, i) => (
              <a
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#1f1f1f] rounded-md"
              >
                <img src={icon} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center sm:text-left">
          <h4 className="mb-6 text-[24px] font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-[20px]">
            <li>Home</li>
            <li>Book Trip</li>
            <li>Rent Boat</li>
            <li>Own a Vessel</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div className="text-center sm:text-left">
          <h4 className="mb-6 text-[24px] font-semibold">Useful Links</h4>
          <ul className="space-y-3 text-gray-400 text-[20px]">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQS</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="mb-6 text-[24px] font-semibold">Newsletter</h4>

          <div className="w-full sm:w-[306px] h-[55px] flex items-center gap-2 px-4 bg-white border border-white rounded-lg mb-4">
            <FiMail className="text-gray-500 text-lg flex-shrink-0" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full text-black text-sm outline-none bg-transparent"
            />
          </div>

          <button className="w-full sm:w-[306px] h-[55px] border border-white rounded-lg text-white mb-6 hover:bg-white hover:text-primary transition">
            Subscribe Now
          </button>

          <h4 className="mb-4 text-[20px] font-semibold">Our Mobile App</h4>

          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-3">
            {[apple, googleplay].map((icon, i) => (
              <button
                key={i}
                className="w-[123.75px] h-[40.73px] flex items-center gap-2 px-2 bg-[#2b2a27] rounded-md text-white hover:bg-white hover:text-primary transition"
              >
                <img src={icon} className="w-4 h-4" />
                <div className="text-left leading-tight">
                  <p className="text-[8px] opacity-80">
                    {i === 0 ? "Download on the" : "Get it on"}
                  </p>
                  <p className="text-[11px] font-semibold">
                    {i === 0 ? "Apple Store" : "Google Play"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER + BOTTOM */}
      <div className="mt-16">
        <div className="w-full max-w-[1670px] mx-auto border-t border-[#CDCCCC]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left text-gray-400 text-sm">
          <span className="text-white">
            © 2026 OMARINE. All Rights Reserved
          </span>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;