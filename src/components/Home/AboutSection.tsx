import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* SECTION 1: ABOUT US & MISSION */}
      <section className="relative  py-20 xl:py-32 px-6 md:px-16 xl:px-24">
        {/* Decorative Background Gradient Streak */}

            <div className="absolute h-[400px] w-full top-0 xl:h-[500px] left-0 bg-gradient-to-bl from-primary via-black to-black"></div>
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid xl:grid-cols-[1fr_2.5fr] gap-12 items-start relative z-10">
          {/* Left: Heading */}
          <div className="flex items-start gap-6">
            <div className="w-[6px] h-[50px] xl:h-[100px] bg-red-600 shadow-[0_0_20px_#dc2626]"></div>
            <h2 className="font-paladin text-4xl xl:text-5xl  tracking-tighter leading-none">
              ABOUT <br className='hidden xl:block' />
              <span className="text-primary">US</span>
            </h2>
          </div>

          {/* Right: Intro Text */}
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
              <span className="text-white font-bold">RED LUBE</span> is a leading high-performance lubricants brand dedicated to engineering advanced lubrication solutions that power industries, protect engines, and keep vehicles and machinery running at peak performance. 
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-l border-white/10 pl-6">
                <h3 className="font-orbitron text-primary text-sm tracking-[0.2em] uppercase mb-4">Our Vision</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Trusted by automotive professionals and industrial businesses, RED LUBE delivers superior-quality engine oil, gear oil, and hydraulic fluids built for the most demanding conditions across the globe.
                </p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <h3 className="font-orbitron text-primary text-sm tracking-[0.2em] uppercase mb-4">Our Commitment</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  We are committed to making world-class lubrication technology affordable and accessible. From small workshops to large-scale industrial operations, we deliver consistent performance and long-term value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNOLOGY & ENGINEERING (Modern "Dark" Card) */}
      <section className=" xl:py-20 px-6 md:px-16 xl:px-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 px-5 md:p-16 rounded-sm relative">
            <div className="grid xl:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-orbitron text-lg md:text-3xl font-bold mb-6">
                  ENGINEERED TO PERFORM. <br />
                  <span className="text-primary">BUILT TO LAST.</span>
                </h2>
                <p className="text-white/90 leading-relaxed">
                  Formulated using cutting-edge additive technology and advanced base oil blending processes, RED LUBE lubricants are designed to extend engine life, reduce wear and friction, improve fuel efficiency, and lower maintenance costs. 
                </p>
                <p className="mt-4 text-white/90">
                  Our product range meets and exceeds international quality standards — ensuring compatibility, reliability, and performance across all major engine types and industrial applications.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-red-600/10 flex flex-col justify-center items-center text-center p-4 border border-red-600/20">
                  <span className="text-primary font-bold text-3xl mb-2">MAX</span>
                  <span className="text-[10px] uppercase tracking-widest">Protection</span>
                </div>
                <div className="aspect-square bg-white/5 flex flex-col justify-center items-center text-center p-4 border border-white/10">
                  <span className="text-white font-bold text-3xl mb-2">EST</span>
                  <span className="text-[10px] uppercase tracking-widest">Formulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE RED LUBE (Grid Layout) */}
      <section className="py-20  bg-linear-to-t from-primary/70  via-black to-black px-6 md:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center xl:text-left">
            <h3 className="font-orbitron text-primary tracking-widest text-sm mb-2">THE RED LUBE ADVANTAGE</h3>
            <h2 className="text-3xl xl:text-4xl font-paladin">WHY CHOOSE US?</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: "Advanced Formulations", desc: "Synthetic and semi-synthetic blends for modern high-performance engines." },
              { title: "Wear Resistance", desc: "Superior engine protection that minimizes friction and extends machinery life." },
              { title: "Fuel Economy", desc: "Optimized viscosity to improve mileage and extend drain intervals." },
              { title: "Global Standards", desc: "Fully compliant with international quality and safety benchmarks." },
              { title: "Versatile Range", desc: "Solutions available for automotive, commercial, and heavy-duty industrial use." },
              { title: "Affordable Quality", desc: "Premium technology priced to be accessible without compromising performance." },
            ].map((item, index) => (
              <div key={index} className="group p-5 border border-white/5 hover:border-red-600/50 transition-all duration-300 bg-[#111]">
                <div className="w-10 h-[2px] bg-red-600 mb-6 group-hover:w-20 transition-all duration-300"></div>
                <h4 className="font-orbitron text-lg mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}