import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            className="h-[48px] lg:h-[74px]"
          />

          <nav className="hidden lg:flex items-center gap-8 text-white">
            <a className="text-primary">Home</a>
            <a className="hover:text-primary">Book Trip</a>
            <a className="hover:text-primary">Rent Boat</a>
            <a className="hover:text-primary">Own a Vessel</a>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 text-white">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10">
            <FaGlobe size={18} />
            <span>English</span>
            <IoIosArrowDown size={18} />
          </div>

          <a className="hidden lg:block hover:text-primary">Login</a>

          <button className="hidden lg:flex w-[159px] h-[48px] items-center justify-center rounded-[32px] bg-primary">
            Create Account
          </button>

          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <IoMdMenu size={34} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur">
          <div className="absolute top-0 right-0 w-full sm:w-[360px] h-full bg-[#181818] p-6 flex flex-col gap-6 text-white">
            
            <div className="flex items-center justify-between">
              <img src="/logo.svg" className="h-10" />
              <button onClick={() => setOpen(false)}>
                <IoMdClose size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg">
              <a onClick={() => setOpen(false)}>Home</a>
              <a onClick={() => setOpen(false)}>Book Trip</a>
              <a onClick={() => setOpen(false)}>Rent Boat</a>
              <a onClick={() => setOpen(false)}>Own a Vessel</a>
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full h-[48px] rounded-full bg-primary">
                Create Account
              </button>
              <button className="w-full h-[48px] rounded-full border border-white">
                Login
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;