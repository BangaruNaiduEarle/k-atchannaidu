export default function MediaPage() {
  return (
    <main className="bg-[#F7FAFC] text-gray-900 overflow-x-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-gradient-to-br from-[#0E1E2A] via-[#12283A] to-[#0E1E2A] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
              linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:48px_48px]"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-18 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-[#F5B301] font-semibold mb-3">
            Public Communication
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Media & Updates
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
            Official announcements, press updates, public engagements, and
            program-related activities.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <p className="max-w-4xl text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          This section provides verified updates on policy announcements,
          program launches, field visits, and public interactions. Information
          shared here is intended for citizens, media organisations, and
          institutional reference.
        </p>
      </section>

      {/* ================= LATEST UPDATES ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-12 text-[#0E1E2A]">
            Latest Updates
          </h2>

          <div className="space-y-8 max-w-4xl">
            <UpdateItem
              date="July 2024"
              title="Launch of Polam Pilustundi Program"
              description="The Polam Pilustundi agricultural outreach initiative was launched to bring scientists and officials directly to farmers’ fields during Kharif and Rabi seasons."
            />

            <UpdateItem
              date="August 2024"
              title="Implementation of Annadata Sukhibhava"
              description="The Annadata Sukhibhava scheme commenced with the release of the first instalment of direct income support to eligible farmers across Andhra Pradesh."
            />

            <UpdateItem
              date="November 2024"
              title="Presentation of Agriculture Budget 2024–25"
              description="The Agriculture Budget for 2024–25 was presented, with a total outlay of ₹43,402 crore for agriculture and allied sectors."
            />

            <UpdateItem
              date="December 2024"
              title="Soil Health Testing Drive Expanded"
              description="State-wide soil testing activities were expanded, covering more than 4.3 lakh samples with scientific nutrient recommendations."
            />

            <UpdateItem
              date="January 2025"
              title="Fisheries Sector Review Meetings"
              description="Review meetings were held with fisheries and aquaculture stakeholders to assess subsidy implementation and sectoral challenges."
            />
          </div>
        </div>
      </section>

      {/* ================= PRESS & PUBLIC EVENTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xl md:text-2xl font-extrabold mb-10 text-[#0E1E2A]">
          Press & Public Engagements
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <EventCard
            title="Farmer Interaction Meetings"
            desc="Village-level interactions conducted as part of agricultural extension and outreach activities."
          />
          <EventCard
            title="Departmental Review Conferences"
            desc="Periodic reviews with officials of agriculture, fisheries, and animal husbandry departments."
          />
          <EventCard
            title="Legislative Assembly Proceedings"
            desc="Participation in Assembly debates and discussions related to agriculture and rural development."
          />
          <EventCard
            title="Stakeholder Consultations"
            desc="Engagements with farmer organisations, cooperative societies, and industry representatives."
          />
        </div>
      </section>

      {/* ================= MEDIA NOTE ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
            Media Note
          </h2>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed mb-4">
            All information published on this page is based on official records,
            program announcements, and verified departmental inputs. Media
            organisations are encouraged to refer to official press releases
            and government notifications for detailed reporting.
          </p>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
            For press queries and clarifications, communications may be routed
            through the respective departmental offices.
          </p>
        </div>
      </section>

    </main>
  );
}

/* -------------------------------
   Helper Components
-------------------------------- */

function UpdateItem({ date, title, description }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#E6EDF3]
      p-6 shadow-[0_25px_50px_-35px_rgba(14,30,42,0.35)]"
    >
      {/* authority accent */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <p className="text-xs uppercase tracking-wide text-[#6B7C8C] mb-1">
        {date}
      </p>

      <h3 className="font-semibold text-[17px] mb-2 text-[#0E1E2A]">
        {title}
      </h3>

      <p className="text-sm text-[#445566] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function EventCard({ title, desc }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#E6EDF3]
      p-6 shadow-[0_25px_50px_-35px_rgba(14,30,42,0.35)]"
    >
      <div className="absolute left-0 top-6 bottom-6 w-[3px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <h3 className="font-semibold text-[16.5px] mb-2 text-[#0E1E2A]">
        {title}
      </h3>

      <p className="text-sm text-[#445566] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
