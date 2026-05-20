"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface SubMenuItem {
  label: string;
  link: string;
}

interface MenuItem {
  label: string;
  link: string;
  children?: SubMenuItem[];
}

const Nav: React.FC = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  console.log(path)

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu: MenuItem[] = [
    { label: "HOME", link: "/" },
    { label: "ABOUT US", link: "/about-us" },
    {
      label: "PRODUCTS",
      link: "",
      children: [
        {
          label: "Automotive Lubricants",
          link: "/products/automotive-lubricants",
        },
        {
          label: "Industrial Lubricants",
          link: "/products/industrial-lubricants",
        },
      ],
    },
    { label: "CONTACT US", link: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 ${path == "/about-us" ? "lg:bg-black" : "lg:bg-transparent"}   left-0 w-full z-999 flex  xl:px-20  justify-between items-center  shadow-sm transition-all duration-300 ease-in-out px-5 
      py-4 ${isScrolled ? "lg:py-3 lg:bg-black! " : "lg:py-6"}`}
    >
      <div className="flex justify-between w-full items-center">
        <Link href={"/"}>
          <Image
            src="/logos/logo-white.png"
            alt="Redlube Logo"
            width={500}
            height={100}
            className={`object-contain contrast-200  drop-shadow-[1px_1px_0px_#000000] w-auto transition-all duration-300 ease-in-out 
              ${/* Mobile: always h-10 | Desktop: shrinks from h-20 to h-12 */ ""}
              h-10 ${isScrolled ? "lg:h-12 " : "lg:h-20"}`}
          />
        </Link>

        <div className="lg:hidden">
          <label className="burger" htmlFor="burger">
            <input
              onChange={() => setIsOpen(!open)}
              checked={open}
              type="checkbox"
              id="burger"
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-1 gap-2 justify-end">
        {menu.map((item, idx) => (
          <li key={idx} className="relative group">
            <Link
              href={item.link || "#"}
              className={`px-4 flex text-nowrap items-center cursor-pointer font-black text-white font-orbitron hover:text-white hover:bg-primary transition-all duration-500 
                ${isScrolled ? "py-2" : "py-4"}
                ${item?.link == path ? "bg-primary " : "bg-transparent "}
                
                `}
            >
              {item.label}
              {item.children && (
                <span className="ml-2 text-[10px] group-hover:rotate-180 transition-transform">
                  ▼
                </span>
              )}
            </Link>

            {item.children && (
              <ul className="absolute z-[999] left-0 top-full w-64 bg-white shadow-2xl border-t-4 border-primary opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                {item.children.map((child, childIdx) => (
                  <li
                    key={childIdx}
                    className="border-b  z-[999]  border-gray-50 last:border-none"
                  >
                    <Link
                      href={child.link}
                      className="block   z-[999] px-6 py-4 text-sm font-bold text-gray-700 font-orbitron hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Stays consistent) */}
      <div
        className={`lg:hidden bg-[#1A1A1A] flex-1 backdrop-blur-md w-full absolute top-full left-0 transition-all duration-500 overflow-hidden shadow-lg ${
          open ? "max-h-150 border-b" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col w-full pb-4">
          {menu.map((item, idx) => (
            <li key={idx} className="w-full flex flex-col">
              {item.children ? (
                <button
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === item.label ? null : item.label,
                    )
                  }
                  className="px-6 py-4 flex items-center justify-between cursor-pointer font-black text-primary font-orbitron hover:bg-gray-100 transition-all duration-300 w-full text-left"
                >
                  {item.label}
                  <span
                    className={`text-[10px] transition-transform duration-300 ${activeSubmenu === item.label ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
              ) : (
                <Link
                  href={item.link || "#"}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 flex items-center cursor-pointer font-black text-primary font-orbitron hover:bg-gray-100 transition-all duration-300 w-full"
                >
                  {item.label}
                </Link>
              )}

              {item.children && (
                <ul
                  className={`flex flex-col bg-[#1A1A1A]  overflow-hidden transition-all duration-300 ease-in-out ${activeSubmenu === item.label ? "max-h-75" : "max-h-0"}`}
                >
                  {item.children.map((child, childIdx) => (
                    <li
                      key={childIdx}
                      className=""
                    >
                      <Link
                        href={child.link}
                        onClick={() => setIsOpen(false)}
                        className="block px-10 py-3 text-sm font-bold text-white/80 font-orbitron hover:bg-gray-200 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
