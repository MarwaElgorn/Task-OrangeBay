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
    <footer
      role="contentinfo"
      className="bg-[#181818] text-white pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[56px]">
        <section aria-labelledby="footer-about">
          <img
            src={OmarinaLogo}
            alt="Omarina logo"
            className="w-28 mx-auto sm:mx-0 mb-4"
          />

          <p
            id="footer-about"
            className="text-base sm:text-[20px] leading-6 sm:leading-[26px] text-gray-400 mb-6"
          >
            Omarina is your all in one platform for boat rentals sea trips and marina services across the Red Sea
          </p>

          <ul className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4">
            <li>
              <a aria-label="Omarina on Facebook">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a aria-label="Omarina on Instagram">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a aria-label="Omarina on WhatsApp">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li>
              <a aria-label="Omarina on X">
                <img src={x} alt="" />
              </a>
            </li>
          </ul>
        </section>

        <nav aria-labelledby="footer-links">
          <h2 id="footer-links" className="mb-6 text-[24px] font-semibold">
            Quick Links
          </h2>
          <ul className="space-y-3 text-gray-400 text-[20px]">
            <li><a href="/">Home</a></li>
            <li><a href="/book-trip">Book Trip</a></li>
            <li><a href="/rent-boat">Rent Boat</a></li>
            <li><a href="/own-vessel">Own a Vessel</a></li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-useful">
          <h2 id="footer-useful" className="mb-6 text-[24px] font-semibold">
            Useful Links
          </h2>
          <ul className="space-y-3 text-gray-400 text-[20px]">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </nav>

        <section aria-labelledby="footer-newsletter">
          <h2 id="footer-newsletter" className="mb-6 text-[24px] font-semibold">
            Newsletter
          </h2>

          <form>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <div className="w-full sm:w-[306px] h-[55px] flex items-center gap-2 px-4 bg-white rounded-lg mb-4">
              <FiMail className="text-gray-500 text-lg" />
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="w-full text-black text-sm outline-none bg-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-[306px] h-[55px] border border-white rounded-lg text-white mb-6"
            >
              Subscribe Now
            </button>
          </form>

          <h3 className="mb-4 text-[20px] font-semibold">
            Our Mobile App
          </h3>

          <div className="flex flex-col sm:flex-row gap-3">
            <a aria-label="Download from Apple Store">
              <img src={apple} alt="" />
            </a>
            <a aria-label="Download from Google Play">
              <img src={googleplay} alt="" />
            </a>
          </div>
        </section>
      </div>

      <div className="mt-16 border-t border-[#CDCCCC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center md:justify-between gap-4 text-gray-400 text-sm">
          <span className="text-white">
            © 2026 Omarina All Rights Reserved
          </span>

          <nav aria-label="Legal">
            <ul className="flex gap-4">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;