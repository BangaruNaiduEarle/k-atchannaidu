export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0E1E2A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-[#F5B301] font-semibold mb-2">
            Public Interface
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact & Public Assistance
          </h1>
          <p className="text-lg max-w-3xl leading-relaxed">
            Official contact details for public communication, scheme-related
            assistance, and departmental coordination.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          Citizens, farmers, and stakeholders may use the following contact
          information to seek assistance related to agriculture and allied
          sector schemes. For faster resolution, please approach the relevant
          department or district office.
        </p>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

          {/* Office Details */}
          <div className="bg-white border p-8">
            <h2 className="text-2xl font-extrabold mb-6">
              Secretariat Office
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Office of the Minister</strong><br />
                Agriculture, Cooperation, Marketing,<br />
                Animal Husbandry, Dairy Development & Fisheries
              </p>

              <p>
                Block – 4, AP State Secretariat<br />
                Amaravati, Andhra Pradesh
              </p>

              <p>
                <strong>Phone:</strong> 0863-2216470
              </p>

              <p>
                <strong>Email:</strong> minister_agri@ap.gov.in
              </p>
            </div>
          </div>

          {/* Public Assistance */}
          <div className="bg-white border p-8">
            <h2 className="text-2xl font-extrabold mb-6">
              Public Assistance
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Farmer Helpline (Toll-Free)</strong><br />
                155251
              </p>

              <p>
                <strong>Scheme Support</strong><br />
                District Agriculture / Fisheries Offices
              </p>

              <p>
                <strong>Grievance Redressal</strong><br />
                Through Village Secretariats and MeeSeva Centres
              </p>

              <p className="text-sm text-gray-600">
                Please keep Aadhaar, land, or registration details ready while
                raising scheme-related queries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= GUIDANCE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold mb-6">
          Guidance for Citizens
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
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
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-sm text-gray-600 leading-relaxed">
            Disclaimer: Contact details and procedures are subject to change
            as per government notifications. Citizens are advised to verify
            information with the respective departments for the latest updates.
          </p>
        </div>
      </section>

    </main>
  );
}
