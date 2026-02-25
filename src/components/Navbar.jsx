import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <header
      className="
        z-50
        absolute
        top-4
        left-4
        right-4
        lg:top-8
        lg:left-1/2
        lg:-translate-x-1/2
        lg:w-[1680px]
        h-[72px]
        lg:h-[106px]
        px-4
        lg:px-6
        flex
        items-center
        justify-between
        rounded-[32px]
        bg-[#18181899]
        backdrop-blur-xl
      "
    >
      {/* Left */}
      <div className="flex items-center gap-6 lg:gap-10">
        <img
          src="/logo.svg"
          alt="Omarina"
          className="h-[48px] w-auto lg:h-[74px]"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-base text-white">
          <a className="text-primary">Home</a>
          <a className="hover:text-primary">Book Trip</a>
          <a className="hover:text-primary">Rent Boat</a>
          <a className="hover:text-primary">Own a Vessel</a>
        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 lg:gap-4 text-white">
        {/* Language */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/10
            hover:text-primary
            text-base
            leading-[17px]
          "
        >
          <FaGlobe size={20} />
          <span>English</span>
          <IoIosArrowDown size={20} />
        </div>

        {/* Login */}
        <a className="hidden lg:block hover:text-primary text-base leading-[17px]">
          Login
        </a>

        {/* CTA */}
        <button
          className="
            hidden
            lg:flex
            w-[159px]
            h-[48px]
            items-center
            justify-center
            gap-[10px]
            rounded-[32px]
            bg-primary
            text-white
            text-base
            leading-[17px]
            hover:opacity-90
          "
        >
          Create Account
        </button>

        {/* Mobile Menu */}
        <button className="lg:hidden text-white">
          <IoMdMenu size={36} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
