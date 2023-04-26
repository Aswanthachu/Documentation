"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { id: 1, label: "Introduction", link: "/introduction" },
  { id: 2, label: "Home", link: "/" },
  { id: 3, label: "Another page", link: "/another" },
];

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const path = usePathname();

  const router = useRouter();
  const [activePage, setActivePage] = useState();

  const handlePageChange = (link) => {
    setActivePage(link);
    router.replace(link);
    setNavBar(!navBar);
  };

  useEffect(() => {
    console.log(path);
    setActivePage(path);
  }, []);

  return (
    <header className="bg-white py-4 border-b shadow-sm lg:min-h-[10%] w-full sticky top-0">
      <div className="container  mx-auto px-8 md:px-16">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="/" className="text-xl font-bold">
              KKS CAPITALS
            </a>
          </div>

          <div className="flex items-center space-x-2 ml-auto">
            <Link
              href="/about"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white rounded-md"
            >
              <span className="hidden md:inline ml-1  font-medium text-gray-500">
                About
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white"
            >
              <span className="hidden md:inline ml-1 font-medium text-gray-500">
                Contact
              </span>
            </Link>
          </div>

          <div className="md:hidden ml-2">
            <button onClick={() => setNavBar(!navBar)}>
              {!navBar ? <GiHamburgerMenu /> : <GrClose />}
            </button>
          </div>
        </div>
        {navBar && (
          <div className=" md:hidden py-5 flex-col space-y-3 origin-top transition-all ease-in-out duration-700">
            {menuItems.map((i) => (
              <button
                key={i.id}
                onClick={() => handlePageChange(i.link)}
                className={`w-full p-2 text-black/60 text-start font-medium rounded-lg ${
                  activePage === i.link
                    ? "text-blue-700 bg-blue-50"
                    : "hover:bg-slate-100"
                }`}
              >
                {i.label}
              </button>
            ))}

            <div className="flex flex-col md:hidden">
              <Link
                href="/about"
                className=" py-2 inline-block  text-gray-700 bg-white rounded-md"
              >
                <span className="ml-1">About</span>
              </Link>
              <Link
                href="/contact"
                className=" py-2 inline-block  text-gray-700 bg-white"
              >
                <span className="ml-1">Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
