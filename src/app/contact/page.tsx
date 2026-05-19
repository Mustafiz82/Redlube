import React from "react";

const Page = () => {
  // Define primary red color if not in tailwind.config: #9F1D21
  return (
  <div className="bg-black relative pt-20 text-white">
      <div className="flex flex-col z-[99] relative lg:flex-row max-w-7xl w-full py-10 lg:py-20 mx-auto px-5 gap-10">
      
      {/* Left Column: Address and Map */}
      <div className="space-y-6 flex-1">
        <div className=" bg-white/5 text-white backdrop-blur-md shadow-lg p-8 rounded-xl border-t-4 border-primary">
          <h3 className="text-xl font-orbitron font-extrabold mb-4 text-primary uppercase tracking-wider">
            Address
          </h3>
          <div className="space-y-3 text-[15px]">
            <div>
              <p className="font-bold text-white/90">Registered & Corporate Office</p>
              <p className="leading-relaxed text-white/70">
                New Town, 24 Parganas,
                <br />
                Kolkata, India.
              </p>
            </div>
            <p className="pt-2">
              <span className="font-bold text-white/90">Email:</span>{" "}
              <span className="text-primary font-medium">info@redlube.net</span>
            </p>
          </div>
        </div>

        <div className="shadow-lg w-full h-[400px] rounded-2xl overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69915.63306532685!2d88.45160132844312!3d22.586229946601954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275350398a5b9%3A0x75e165b244323425!2sNewtown%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e1!3m2!1sen!2sbd!4v1774783599091!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className=" transition-all duration-700"
          />
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="flex-[1.2] Z-[-1] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl rounded-xl p-8 lg:p-12 text-white">
        <h3 className="text-2xl font-orbitron font-extrabold mb-8 text-white/90 uppercase tracking-tight">
          Send us a <span className="text-primary">Message</span>
        </h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/70">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 bg-white/8 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/70">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 bg-white/8 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/70">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-white/8 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/70">Your Message</label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-white/8 rounded-lg border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#82171a] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-red-900/20 uppercase tracking-widest text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Optional: Add this to your globals.css if 'primary' isn't defined in tailwind.config */}
      {/* <style jsx>{`
        .text-primary { color: #9F1D21; }
        .bg-primary { background-color: #9F1D21; }
        .border-primary { border-color: #9F1D21; }
        .focus\:ring-primary:focus { --tw-ring-color: #9F1D21; }
      `}</style> */}
    </div>



    <div className="h-68 absolute bottom-0 w-full bg-linear-to-t from-primary/70  to-black"></div>
  </div>
  );
};

export default Page;