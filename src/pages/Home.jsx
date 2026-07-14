import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-7rem)] overflow-hidden">
      {/* Background NVIDIA logo */}
      <img
        src="/nvidia-logo.svg"
        alt=""
        className="pointer-events-none absolute right-[-80px] top-16 w-[520px] opacity-[0.06]"
      />

      <section className="relative rounded-3xl border border-[#1f2f1f] bg-gradient-to-br from-[#101810]/95 via-[#0B0F0B]/95 to-[#050805]/95 p-10 shadow-2xl min-h-[420px] flex items-center">
        <div className="max-w-3xl">
          <p className="text-[#76B900] font-semibold mb-3">V2D</p>

          <h1 className="text-5xl font-black tracking-tight leading-tight">
            Welcome to the V2D Resource Hub
          </h1>

          <p className="text-gray-400 mt-5 text-lg leading-8">
            A centralized place to access MV, EGO, Object Scanning, Dashboard User Guide,
            and Quiz resources.
          </p>

          <div className="flex gap-3 mt-8">
            <Link
              to="/v2d-resource-hub"
              className="inline-block px-6 py-3 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition"
            >
              Open Resource Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
