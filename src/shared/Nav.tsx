"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define the types for the menu structure
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
  // State to track which mobile submenu is open (stores the label of the active menu)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menu: MenuItem[] =[
    { label: "HOME", link: "/" },
    { label: "ABOUT US", link: "/about-us" },
    {
      label: "PRODUCTS",
      link: "",
      children:[
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
    <nav className="p-5 bg-white relative z-[999] flex justify-between items-center py-4 shadow-sm">
      <div className="flex justify-between w-full items-center">
        {/* Wrapped in div to control logo size better */}
        <Image
          src="/logos/redlube-logo.jpeg"
          alt="Redlube Logo"
          width={500}
          height={100}
          className="object-contain w-auto h-10 lg:h-20"
        />
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
              className="px-4 py-3 flex text-nowrap items-center cursor-pointer font-black text-primary font-orbitron hover:text-white hover:bg-primary transition-all duration-300"
            >
              {item.label}

              {item.children && (
                <span className="ml-2 text-[10px] group-hover:rotate-180 transition-transform">
                  ▼
                </span>
              )}
            </Link>

            {item.children && (
              <ul
                className="absolute left-0 top-full w-64 bg-white shadow-2xl border-t-4 border-primary 
                opacity-0 invisible translate-y-2 
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                transition-all duration-300 ease-in-out"
              >
                {item.children.map((child, childIdx) => (
                  <li
                    key={childIdx}
                    className="border-b border-gray-50 last:border-none"
                  >
                    <Link
                      href={child.link}
                      className="block px-6 py-4 text-sm font-bold text-gray-700 font-orbitron hover:bg-gray-100 hover:text-primary transition-colors"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/95 flex-1 backdrop-blur-md w-full absolute top-full left-0 transition-all duration-300 overflow-hidden shadow-lg ${
          open ? "max-h-[600px] border-b" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col w-full pb-4">
          {menu.map((item, idx) => (
            <li key={idx} className="w-full flex flex-col">
              {/* If it has children, render a button to toggle the accordion */}
              {item.children ? (
                <button
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === item.label ? null : item.label
                    )
                  }
                  className="px-6 py-4 flex items-center justify-between cursor-pointer font-black text-primary font-orbitron hover:bg-gray-100 transition-all duration-300 w-full text-left"
                >
                  {item.label}
                  <span
                    className={`text-[10px] transition-transform duration-300 ${
                      activeSubmenu === item.label ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              ) : (
                // If it has no children, render standard link
                <Link
                  href={item.link || "#"}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="px-6 py-4 flex items-center cursor-pointer font-black text-primary font-orbitron hover:bg-gray-100 transition-all duration-300 w-full"
                >
                  {item.label}
                </Link>
              )}

              {/* Mobile Submenu Items (Accordion Dropdown) */}
              {item.children && (
                <ul
                  className={`flex flex-col bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSubmenu === item.label ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  {item.children.map((child, childIdx) => (
                    <li
                      key={childIdx}
                      className="border-b border-gray-200 last:border-none"
                    >
                      <Link
                        href={child.link}
                        onClick={() => setIsOpen(false)} // Close main menu on click
                        className="block px-10 py-3 text-sm font-bold text-gray-600 font-orbitron hover:bg-gray-200 hover:text-primary transition-colors"
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