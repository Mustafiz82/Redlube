import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
  <footer className="w-full bg-[#0a0a0a] border-t border-neutral-800 py-20 font-sans text-neutral-300">

  

  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
    
    {/* Logo Section - Add brightness filter if the logo is black */}
    <div className="flex items-start">
      <img src="/logos/redlube-logo-footer-wh.png" alt="Redlube Logo" className="brightness-200" />
    </div>

    {/* Address Section */}
    <div>
      <h3 className="text-xl font-bold mb-6 text-white">Address</h3>
      <div className="space-y-4 text-[15px]">
        <p className="font-bold text-white">Registered & Corporate Office</p>
        <p className="leading-relaxed">
          New Town, 24 Parganas,<br />
          Kolkata, India.
        </p>
        <p>
          <span className="font-bold text-white">Email:</span> info@redlube.net
        </p>
      </div>
    </div>

    {/* Social Links Section */}
    <div>
      <h3 className="text-xl font-bold mb-6 text-white">Social Links</h3>
      <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center text-neutral-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
          aria-label="Facebook"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center text-neutral-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
          aria-label="Instagram"
        >
          <FaInstagram size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Copyright Bar */}
  <div className="bg-[#ec1c00b6] py-4">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <p className="text-white text-sm font-medium">
        ©2022. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;