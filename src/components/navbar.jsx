import { useState } from "react";
import Coin from "../Assets/coin.png";
import { Link } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  
} from "@heroicons/react/24/solid";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "OurCourse", link: "/ourcourse" },
    { name: "Contacts", link: "/contacts" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav class="bg-black border-gray-200 dark:bg-gray-900">
          <div class="md:flex flex-wrap justify-between items-center mx-auto  p-2  ">
            <Link
              // to="https://flowbite.com"
              class="flex items-center  space-x-3 rtl:space-x-reverse"
            >
              {/* <img src={Coin} class="h-10" alt="Flowbite Logo" /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Sparkels School
              </span>
            </Link>

          
            <div class="flex justify-between items-center space-x-1 rtl:space-x-reverse">
              <Link
                to="tel:8678906666"
                class="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                8678906666 /
              </Link>
              <Link
              to="tel:8428639999"
              class="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              8428639999
            </Link>
            </div>
            {/* <ul
              className="bg-black flex px-2 py-1 
                ml-0 w-48  
                "
            >
              <Link to="">
                {" "}
                <li className="btn flex text-white  font-semibold px-3 py-1 rounded duration-500 md:static">
                  Login
                  <ChevronDoubleRightIcon class="h-6 w-6  ml-3 text-white-500" />
                </li>
              </Link>
              <Link to="/">
                <li className="btn  text-white  font-semibold px-3 py-1 rounded duration-500 md:static">
                  Register
                </li>{" "}
              </Link>
            </ul> */}
          </div>
        </nav>

        <div className="shadow-md w-full fixed  left-0 sticky">
          <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
            {/* logo section */}
            {/* <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>Inscribe</span>
            </div> */}
            {/* Menu icon */}
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-3 cursor-pointer md:hidden w-7 h-7"
            >
              {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
            </div>
            {/* linke items */}
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-2" : "top-[-666px]"
              }`}
            >
              {Links.map((link) => (
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-blue-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* button */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
