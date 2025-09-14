import '../styles/Error403.css';

const Error403 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="relative w-[55px] h-[45px] bg-gray-800 rounded-[5px] animate-dip lock"></div>
      <div className="text-center message">
        <h1 className="mt-10 mb-5 text-4xl gray-900 font-2semibold text-[var(--Primary-1)]">
          403 - Access Forbidden
        </h1>
        <p className="text-xl text-gray-600">
          You don't have permission to access this resource. Please check with the site admin if you believe this is a mistake.
        </p>
      </div>
    </div>
  );
};

export default Error403;
