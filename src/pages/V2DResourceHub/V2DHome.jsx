import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hubSections } from "./v2dData";

const cardAccent = {
  MV: "M",
  EGO: "E",
  "Object Scanning": "O",
  "Dashboard User Guide": "D",
  Quiz: "Q",
};

const V2DHome = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    return hubSections.filter((section) =>
      `${section.title} ${section.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <section className="rounded-3xl border border-[#263626] bg-gradient-to-br from-[#132013] via-[#0B0F0B] to-[#050805] p-8 mb-6 shadow-xl">
        <p className="text-[#76B900] font-semibold">V2D Resource Hub</p>

        <h1 className="text-4xl font-black mt-2">
          Training, Guides & Reference Resources
        </h1>

        <p className="text-gray-400 mt-3 max-w-3xl leading-7">
          Central place for MV, EGO, Object Scanning, Dashboard User Guide, and quizzes.
          Use the sections below to find guides, examples, checklists, and training materials.
        </p>

        <input
          type="text"
          placeholder="Search sections..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl bg-[#050805] border border-[#2d402d] text-white placeholder-gray-500 rounded-xl px-4 py-3 mt-6 outline-none focus:border-[#76B900]"
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredSections.map((section) => (
          <div
            key={section.title}
            className="group bg-gradient-to-br from-[#101810] to-[#070B07] border border-[#263626] rounded-2xl p-6 shadow-lg hover:border-[#76B900] hover:-translate-y-1 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#76B900]/15 border border-[#76B900]/30 flex items-center justify-center">
                <span className="text-[#76B900] font-black">
                  {cardAccent[section.title] || section.title.charAt(0)}
                </span>
              </div>

              <span className="text-xs px-2 py-1 rounded-lg border border-[#76B900]/30 text-[#76B900] bg-[#76B900]/10">
                Available
              </span>
            </div>

            <h2 className="text-xl font-bold mt-5">{section.title}</h2>

            <p className="text-gray-400 mt-2 min-h-[72px] leading-6">
              {section.description}
            </p>

            <button
              onClick={() => navigate(section.path)}
              className="mt-5 px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition"
            >
              View Section
            </button>
          </div>
        ))}
      </div>

      {filteredSections.length === 0 && (
        <div className="mt-6 rounded-2xl border border-[#263626] bg-[#0B0F0B] p-8 text-center">
          <h2 className="text-xl font-bold">No sections found</h2>
          <p className="text-gray-400 mt-2">
            Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
};

export default V2DHome;
