function Preloader({ isLoading }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050A15] transition-all duration-700 ${
        isLoading
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center w-[280px]">
        <h1 className="mb-6 text-2xl font-semibold tracking-widest text-white uppercase">
          Loading
        </h1>

        <div className="w-full h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-cyan-400 animate-loading-bar" />
        </div>

        <p className="mt-4 text-sm tracking-wide text-white/70">Please wait...</p>
      </div>
    </div>
  );
}

export default Preloader;