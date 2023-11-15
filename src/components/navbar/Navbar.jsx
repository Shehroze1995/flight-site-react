import { SiConsul } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { GoSidebarExpand } from "react-icons/go";
import { useRef, useState } from "react";
const navLinks = ["home", "about", "offers", "seats", "destinations"];
const sidebarLinks = [...navLinks, "support", "languages", "contact"];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainNavRef = useRef();

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavPadd = () => {
    if (window.scrollY > 18) mainNavRef.current.style.paddingBlock = '.5rem'
    else mainNavRef.current.style.paddingBlock = '2rem'

  };

  window.onscroll = () => handleNavPadd();

  return (
    <nav className={`py-2 fixed w-full top-0 bg-white z-10`}>
      <section className="flex items-center justify-between w-11/12 m-auto max-w-7xl text-xl">
        <SiConsul className="text-blue-600" />
        <div className="flex items-center gap-4 max-[1000px]:hidden">
          <div className="flex items-center gap-1">
            <BiSupport className="text-green-600" />{" "}
            <p className="text-base leading-none">Support</p>
          </div>
          <div className="flex items-center gap-1">
            <FaGlobe className="text-blue-400" />{" "}
            <p className="text-base leading-none">Languages</p>
          </div>
        </div>
        <button
          className="bg-green-400 py-1 px-6 rounded-3xl font-extrabold transition-all duration-300 hover:no-underline hover:bg-green-500 hover:text-white"
          type="button"
        >
          Login
        </button>
      </section>
      <section
        ref={mainNavRef}
        className="flex items-center justify-between w-11/12 m-auto max-w-7xl py-8 text-xl transition-all duration-300"
      >
        <h2 className="text-3xl font-extrabold text-red-500 underline">
          Flights
        </h2>
        <div className="flex items-center gap-4 max-[1000px]:hidden">
          {navLinks.map((link) => (
            <p
              className="capitalize cursor-pointer px-4 py-1 rounded-md transition-all duration-300 hover:bg-blue-300"
              key={link}
            >
              {link}
            </p>
          ))}
          <button
            className="bg-blue-400 py-2 px-6 rounded-3xl ml-12 font-extrabold transition-all duration-300 hover:bg-blue-500 hover:text-white"
            type="button"
          >
            Contact
          </button>
        </div>
        <GoSidebarExpand
          onClick={handleSidebar}
          className={`text-3xl transition-all duration-300 min-[1000px]:hidden ${
            isSidebarOpen ? "rotate-[90deg]" : "rotate-[270deg]"
          }`}
        />
      </section>
      <aside
        className={`w-11/12 m-auto grid place-items-start text-xl rounded-md bg-gray-300 transition-all duration-300 overflow-hidden ${
          isSidebarOpen ? "max-h-[380px]" : "max-h-0 invisible"
        }`}
      >
        {sidebarLinks.map((link) => (
          <button
            className={`capitalize py-2 px-6 ${
              link == "contact" && "mb-2 font-extrabold text-blue-500 underline"
            } ${link == "home" && "mt-2"}`}
            key={link}
          >
            {link}
          </button>
        ))}
      </aside>
    </nav>
  );
};

export default Navbar;
