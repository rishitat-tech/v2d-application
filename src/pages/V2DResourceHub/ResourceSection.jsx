import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "@google/model-viewer";
import { categories, resources } from "./v2dData";

const typeStyles = {
  text: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  video: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  image: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  model: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  pdf: "bg-red-500/15 text-red-300 border-red-500/30",
  doc: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  link: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  example: "bg-[#76B900]/15 text-[#76B900] border-[#76B900]/30",
  checklist: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  faq: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
};

const getActionLabel = (item) => {
  if (item.type === "video") return "Watch Video";
  if (item.category === "Docs" && item.type === "link") return "Download";
  if (item.category === "Docs") return "View Document";
  if (item.category === "Overview") return "View Overview";
  if (item.category === "Good Examples") return "View Example";
  if (item.category === "Bad Examples") return "View Example";
  return null;
};

const shouldShowAction = (item) => {
  if (!item.url || item.url === "#") return false;

  // Display photos and 3D models directly in the card.
  if (item.type === "image" || item.type === "model") return false;

  // For Object Scanning good/bad examples, no button.
  if (
    item.section === "Object Scanning" &&
    (item.category === "Good Examples" || item.category === "Bad Examples")
  ) {
    return false;
  }

  return ["Overview", "Videos", "Docs", "Good Examples", "Bad Examples"].includes(
    item.category
  );
};

const ResourceSection = ({ sectionName }) => {
  const [activeCategory, setActiveCategory] = useState("Overview");
  const [search, setSearch] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesSection = item.section === sectionName;
      const matchesCategory = item.category === activeCategory;
      const matchesSearch = `${item.title} ${item.description} ${item.tags.join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesSection && matchesCategory && matchesSearch;
    });
  }, [sectionName, activeCategory, search]);

  const openAction = (item) => {
    if (item.type === "video") {
      setSelectedMedia(item);
      return;
    }

    window.open(item.url, "_blank", "noreferrer");
  };

  return (
    <div>
      <Link
        to="/v2d-resource-hub"
        className="inline-flex items-center mb-5 text-sm text-[#76B900] hover:text-[#8ddf00] font-semibold"
      >
        ← Back to Resource Hub
      </Link>

      <section className="rounded-3xl border border-[#263626] bg-gradient-to-br from-[#132013] via-[#0B0F0B] to-[#050805] p-8 shadow-xl">
        <p className="text-[#76B900] font-semibold">Resource Section</p>

        <h1 className="text-4xl font-black mt-2">{sectionName}</h1>

        <p className="text-gray-400 mt-3 max-w-3xl">
          Find guides, videos, examples, checklists, and FAQs for this workflow.
        </p>

        <input
          type="text"
          placeholder={`Search ${sectionName} resources...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl bg-[#050805] border border-[#2d402d] text-white placeholder-gray-500 rounded-xl px-4 py-3 mt-6 outline-none focus:border-[#76B900]"
        />
      </section>

      <div className="flex flex-wrap gap-2 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl border transition ${
              activeCategory === category
                ? "bg-[#76B900] text-black border-[#76B900] font-semibold shadow-lg shadow-[#76B900]/20"
                : "bg-[#101810] text-gray-300 border-[#263626] hover:border-[#76B900] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => {
            const typeClass =
              typeStyles[item.type] ||
              "bg-gray-500/15 text-gray-300 border-gray-500/30";

            const actionLabel = getActionLabel(item);
            const showAction = shouldShowAction(item);
            const hasMedia = item.url && item.url !== "#";

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#263626] bg-gradient-to-br from-[#101810] to-[#070B07] p-6 shadow-lg hover:border-[#76B900] hover:-translate-y-1 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${typeClass}`}
                  >
                    {item.type}
                  </span>

                  {(showAction || (hasMedia && ["image", "model"].includes(item.type))) && (
                    <span className="text-xs px-2 py-1 rounded-lg border border-[#76B900]/30 text-[#76B900] bg-[#76B900]/10">
                      Available
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold mt-5">{item.title}</h2>

                <p className="text-gray-400 mt-2 leading-6">
                  {item.description}
                </p>

                {item.type === "image" && hasMedia && (
                  <div className="mt-4 rounded-xl border border-[#263626] bg-black overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-56 object-contain"
                    />
                  </div>
                )}

                {item.type === "model" && hasMedia && (
                  <div className="mt-4 rounded-xl border border-[#263626] bg-black overflow-hidden">
                    <model-viewer
                      src={item.url}
                      camera-controls
                      auto-rotate
                      ar
                      shadow-intensity="1"
                      exposure="1"
                      style={{
                        width: "100%",
                        height: "320px",
                        backgroundColor: "#000000",
                      }}
                    ></model-viewer>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#050805] border border-[#263626] text-gray-300 px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Last updated: {item.lastUpdated}
                </p>

                {showAction && (
                  <button
                    onClick={() => openAction(item)}
                    className="inline-block mt-5 px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition"
                  >
                    {actionLabel}
                  </button>
                )}

                {!hasMedia && ["video", "image", "model"].includes(item.type) && (
                  <p className="text-sm text-gray-500 mt-5">
                    Media file not added yet.
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <div className="col-span-full rounded-2xl border border-[#263626] bg-[#0B0F0B] p-8 text-center">
            <h2 className="text-xl font-bold">No resources found</h2>
            <p className="text-gray-400 mt-2">
              Try another category or search term.
            </p>
          </div>
        )}
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="w-full max-w-5xl rounded-2xl border border-[#263626] bg-[#0B0F0B] p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs text-[#76B900] font-semibold uppercase">
                  {selectedMedia.type}
                </p>
                <h2 className="text-2xl font-bold mt-1">
                  {selectedMedia.title}
                </h2>
                <p className="text-gray-400 mt-1">
                  {selectedMedia.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedMedia(null)}
                className="px-4 py-2 rounded-xl border border-[#2d402d] text-gray-300 hover:border-[#76B900] hover:text-white transition"
              >
                Close
              </button>
            </div>

            <video
              src={selectedMedia.url}
              controls
              autoPlay
              className="w-full max-h-[70vh] rounded-xl bg-black border border-[#263626]"
            >
              Your browser does not support this video format.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceSection;
