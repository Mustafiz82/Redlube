import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const menu = [
    { label: "HOME", link: "/" },
    { label: "ABOUT US", link: "/about-us" },
    {
      label: "PRODUCTS",
      link: "/products",
      children: [
        { label: "Automotive Lubricants", link: "/products/automotive-lubricants" },
        { label: "Industrial Lubricants", link: "/products/industrial-lubricants" },
      ],
    },
    { label: "CONTACT US", link: "/contact" },
  ];

  return (
    <nav className="p-5 bg-white relative z-[999] flex justify-between items-center py-4 shadow-sm">
      <div className=""> {/* Wrapped in div to control logo size better */}
        <Image
          src="/logos/redlube-logo.jpeg"
          alt="Redlube Logo"
          width={500}
          height={100}
          className="object-contain"
        />
      </div>

      <ul className="flex gap-2">
        {menu.map((item, idx) => (
          /* Add 'group' class to the wrapper li */
          <li key={idx} className="relative group">
            <Link 
              href={item.link || "#"} 
              className="px-4 py-3 flex items-center cursor-pointer font-black text-primary font-orbitron hover:text-white hover:bg-primary transition-all duration-300"
            >
              {item.label}
              {/* Optional: Add a small arrow if children exist */}
              {item.children && (
                <span className="ml-2 text-[10px] group-hover:rotate-180 transition-transform">▼</span>
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.children && (
              <ul className="absolute left-0 top-full w-64 bg-white shadow-2xl border-t-4 border-primary 
                opacity-0 invisible translate-y-2 
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                transition-all duration-300 ease-in-out">
                
                {item.children.map((child, childIdx) => (
                  <li key={childIdx} className="border-b border-gray-50 last:border-none">
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
    </nav>
  );
};

export default Nav;



