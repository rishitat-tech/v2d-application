import { Link } from "react-router-dom";

const DashboardGuide = () => {
  const pdfUrl = "/docs/dashboard-user-guide.pdf";

  const guideTopics = [
    {
      title: "Main Dashboard Overview",
      description:
        "Understand operations summary, station status, country summary, daily performance, and weekly utilization.",
    },
    {
      title: "Daily Updates and EOD",
      description:
        "Submit daily updates, completed work, blockers, help needed, handoff notes, and end-of-day summaries.",
    },
    {
      title: "Team Leads",
      description:
        "Set or update team leads for each country from the Daily Updates workflow.",
    },
    {
      title: "Inventory and Orders",
      description:
        "Manage inventory, hardware rollout, order status, vendors, PO numbers, ETAs, owners, and notes.",
    },
    {
      title: "MV and EGO Stations",
      description:
        "Track MV and EGO stations separately, start and end sessions, monitor usage, and review recent activity.",
    },
    {
      title: "Station Issues",
      description:
        "Log and track station-specific problems such as offline stations, hardware issues, calibration issues, and upload issues.",
    },
    {
      title: "Team Session Plan",
      description:
        "Plan upcoming MV/EGO sessions by country, including teams, progress, scripts, sequence counts, IDs, collectors, and operators.",
    },
    {
      title: "Reports and Exports",
      description:
        "Review daily and weekly station reports, station issue summaries, completion metrics, and export CSV data.",
    },
  ];

  return (
    <div>
      <Link
        to="/v2d-resource-hub"
        className="inline-flex items-center mb-5 text-sm text-[#76B900] hover:text-[#8ddf00] font-semibold"
      >
        ← Back to Resource Hub
      </Link>

      <section className="rounded-3xl border border-[#1f2f1f] bg-gradient-to-r from-[#101810] to-[#050805] p-8">
        <p className="text-[#76B900] font-semibold">Guide</p>

        <h1 className="text-4xl font-black mt-2">Dashboard User Guide</h1>

        <p className="text-gray-400 mt-4 max-w-3xl leading-7">
          This guide explains how to use the operations dashboard to manage daily
          updates, MV/EGO stations, inventory, orders, station issues, session
          planning, data collectors, and reports across USA, India, and Philippines.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition"
          >
            View Guide
          </a>

          <a
            href={pdfUrl}
            download
            className="px-5 py-3 rounded-xl border border-[#2d402d] text-gray-300 hover:border-[#76B900] hover:text-white transition"
          >
            Download PDF
          </a>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-[#1f2f1f] bg-[#0B0F0B] p-6">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold">What this guide covers</h2>
          <p className="text-gray-400 mt-2">
            A quick overview of the main areas explained in the PDF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
          {guideTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border border-[#1f2f1f] bg-[#050805] p-4"
            >
              <h3 className="font-semibold text-white">{topic.title}</h3>
              <p className="text-gray-400 mt-2 text-sm leading-6">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardGuide;
