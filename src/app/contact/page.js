export default function ContactPage() {
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
            Public Interface
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Contact & Public Assistance
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
            Official contact details for public communication, scheme-related
            assistance, and departmental coordination.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <p className="max-w-4xl text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          Citizens, farmers, and stakeholders may use the following contact
          information to seek assistance related to agriculture and allied
          sector schemes. For faster resolution, please approach the relevant
          department or district office.
        </p>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2">

          {/* Secretariat Office */}
          <ContactCard title="Secretariat Office">
            <p className="font-semibold text-[#0E1E2A]">
              Office of the Minister
            </p>

            <p>
              Agriculture, Cooperation, Marketing,<br />
              Animal Husbandry, Dairy Development & Fisheries
            </p>

            <p className="mt-3">
              Block – 4, AP State Secretariat<br />
              Amaravati, Andhra Pradesh
            </p>

            <p className="mt-3">
              <strong>Phone:</strong> 0863-2216470
            </p>

            <p>
              <strong>Email:</strong> minister_agri@ap.gov.in
            </p>
          </ContactCard>

          {/* Public Assistance */}
          <ContactCard title="Public Assistance">
            <p className="font-semibold text-[#0E1E2A]">
              Farmer Helpline (Toll-Free)
            </p>

            <p className="text-lg font-bold mt-1">
              155251
            </p>

            <p className="mt-4">
              <strong>Scheme Support</strong><br />
              District Agriculture / Fisheries Offices
            </p>

            <p className="mt-3">
              <strong>Grievance Redressal</strong><br />
              Through Village Secretariats and MeeSeva Centres
            </p>

            <p className="text-xs text-gray-600 mt-4">
              Please keep Aadhaar, land, or registration details ready while
              raising scheme-related queries.
            </p>
          </ContactCard>

        </div>
      </section>

      {/* ================= GUIDANCE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
          Guidance for Citizens
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          <li>
            For scheme eligibility and applications, contact the nearest
            agriculture or fisheries office.
          </li>
          <li>
            Payments and benefits are processed as per government notifications
            and eligibility criteria.
          </li>
          <li>
            For urgent issues, use the toll-free helpline for faster assistance.
          </li>
          <li>
            Media and official correspondence should be routed through
            departmental channels.
          </li>
        </ul>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="bg-[#F9FAFB] border-t border-[#E6EDF3]">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Disclaimer: Contact details and procedures are subject to change
            as per government notifications. Citizens are advised to verify
            information with the respective departments for the latest updates.
          </p>
        </div>
      </section>

    </main>
  );
}

/* -------------------------------
   Helper Component
-------------------------------- */

function ContactCard({ title, children }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#E6EDF3]
      p-8 shadow-[0_30px_60px_-35px_rgba(14,30,42,0.35)]"
    >
      {/* authority accent */}
      <div className="absolute left-0 top-8 bottom-8 w-[3px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <h3 className="text-lg font-extrabold mb-6 text-[#0E1E2A]">
        {title}
      </h3>

      <div className="space-y-3 text-[14.5px] text-[#445566] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
