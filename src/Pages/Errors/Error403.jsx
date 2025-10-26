import { Link } from "react-router-dom";

export default function Error403() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="relative w-[55px] h-[45px] bg-gray-800 rounded-[5px] animate-dip lock"></div>
      <div className="text-center message">
        <h1 className="mt-10 mb-5 text-4xl gray-900 font-2semibold text-[var(--Primary-1)]">
          403 - Access Forbidden
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          You don't have permission to access this resource. Please check with
          the site admin if you believe this is a mistake.
        </p>
        <Link
          to="/"
          className="inline px-5 py-3 text-sm font-medium leading-5 text-white transition-all shadow-2xl rounded-lg border-transparent border bg-[#064EA4] duration-400 focus:outline-none active:bg-[#043570] hover:bg-[#043570]"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
