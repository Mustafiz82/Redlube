import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0c2430_0%,#050505_70%)]" />

      {/* Red Neon Lights */}
      {/* <div cl   assName="absolute top-0 left-0 h-[3px] w-full bg-red-600 shadow-[0_0_40px_red]" /> */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-red-600 shadow-[0_0_40px_red]" />

      {/* Glow Rings */}
      <div className="absolute left-1/2 bottom-[-250px] -translate-x-1/2">
        <div className="w-[900px] h-[900px] rounded-full border-[30px] border-red-600/60 blur-sm shadow-[0_0_100px_red]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Error */}
        <h1 className="text-[120px] md:text-[220px] font-black tracking-tight">
          <span className="text-red-600 animate-pulse">40</span>
          <span className="text-white">4</span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-3 text-2xl md:text-5xl font-bold uppercase">
           Page Not Found
        </h2>

        <p className="mt-5 max-w-xl text-gray-400 text-sm md:text-lg">
           The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-10 rounded-md border border-red-600 px-8 py-4 font-semibold uppercase tracking-wider
          bg-red-600 hover:bg-red-700
          shadow-[0_0_30px_rgba(255,0,0,0.6)]
          transition duration-300"
        >
          Back To Home
        </Link>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/3 h-[2px] w-[300px] bg-red-600 blur-sm" />
      <div className="absolute right-0 top-1/2 h-[2px] w-[350px] bg-red-600 blur-sm" />
    </main>
  );
}
