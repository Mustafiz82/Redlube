import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F5]  py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
        
        {/* Logo Section */}
       <img src="/logos/redlube-logo-footer.png" alt="" />
      

        {/* Address Section */}
        <div className="text-[#333]">
          <h3 className="text-xl font-bold mb-6">Address</h3>
          <div className="space-y-4 text-[15px]">
            <p className="font-bold">Registered & Corporate Office</p>
            <p className="leading-relaxed">
              New Town, 24 Parganas,<br />
              Kolkata, India.
            </p>
            <p>
              <span className="font-bold">Email:</span> info@redlube.net
            </p>
          </div>
        </div>

        {/* Social Links Section */}
        <div >
          <h3 className="text-xl font-bold mb-6">Social Links</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 hover:bg-primary h-10 border border-gray-300 rounded-full flex items-center justify-center text-[#1558e9] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="w-10 hover:bg-primary h-10 border border-gray-300 rounded-full flex items-center justify-center text-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-primary py-4">
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