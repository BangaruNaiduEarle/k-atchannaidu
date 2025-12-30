export default function MediaPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0E1E2A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-[#F5B301] font-semibold mb-2">
            Public Communication
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Media & Updates
          </h1>
          <p className="text-lg max-w-3xl leading-relaxed">
            Official announcements, press updates, public engagements, and
            program-related activities.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          This section provides verified updates on policy announcements,
          program launches, field visits, and public interactions. Information
          shared here is intended for citizens, media organisations, and
          institutional reference.
        </p>
      </section>

      {/* ================= LATEST UPDATES ================= */}
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-extrabold mb-10">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold mb-10">
          Press & Public Engagements
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
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
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-extrabold mb-6">
            Media Note
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            All information published on this page is based on official records,
            program announcements, and verified departmental inputs. Media
            organisations are encouraged to refer to official press releases
            and government notifications for detailed reporting.
          </p>

          <p className="text-gray-700 leading-relaxed">
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
    <div className="bg-white border p-6">
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function EventCard({ title, desc }) {
  return (
    <div className="border p-6">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </div>
  );
}
