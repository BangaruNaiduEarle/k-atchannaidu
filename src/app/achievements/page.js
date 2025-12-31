export default function AchievementsPage() {
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
            Governance Outcomes
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Key Achievements
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
            A summary of major policy actions, budgetary initiatives, and
            sector-wise outcomes achieved during recent years in public office.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <p className="max-w-4xl text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          The achievements outlined below reflect policy decisions, administrative
          interventions, and program implementation across agriculture and allied
          sectors. These outcomes are based on government records, budgetary
          allocations, and program roll-outs at the state level.
        </p>
      </section>

      {/* ================= KEY HIGHLIGHTS ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-12 text-[#0E1E2A]">
            Highlights (2024–Present)
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Highlight
              title="Record Agriculture Budget"
              value="₹43,402 Crore"
              desc="Highest-ever allocation for agriculture and allied sectors in Andhra Pradesh (2024–25)."
            />
            <Highlight
              title="Farmer Income Support"
              value="46.85 Lakh Beneficiaries"
              desc="Farmers receiving direct financial assistance under Annadata Sukhibhava."
            />
            <Highlight
              title="Direct Benefit Transfer"
              value="₹20,000 / Year"
              desc="Annual income support per eligible farmer through Aadhaar-linked DBT."
            />
            <Highlight
              title="Soil Health Testing"
              value="4.3 Lakh Tests"
              desc="Soil samples tested with scientific nutrient analysis and recommendations."
            />
            <Highlight
              title="Crop Loan Facilitation"
              value="₹1.03 Lakh Crore"
              desc="Crop loans sanctioned towards a target of ₹2.64 lakh crore."
            />
            <Highlight
              title="Drip Irrigation Coverage"
              value="3 Lakh Hectares"
              desc="Target area identified for expansion of drip irrigation systems."
            />
          </div>
        </div>
      </section>

      {/* ================= SECTOR-WISE ACHIEVEMENTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xl md:text-2xl font-extrabold mb-10 text-[#0E1E2A]">
          Sector-wise Achievements
        </h2>

        <div className="space-y-12 max-w-4xl text-[#445566] leading-relaxed">

          <Sector
            title="Agriculture"
            points={[
              "Launch of Polam Pilustundi for direct farmer outreach and extension services.",
              "Revival and strengthening of crop insurance coverage.",
              "Promotion of scientific farming practices and soil-based fertilizer use.",
              "Distribution of subsidised agricultural inputs and equipment."
            ]}
          />

          <Sector
            title="Farmer Welfare"
            points={[
              "Implementation of Annadata Sukhibhava with transparent DBT mechanisms.",
              "Focus on tenant farmer inclusion through policy and institutional measures.",
              "Improved access to institutional credit and interest-free loan support."
            ]}
          />

          <Sector
            title="Fisheries & Aquaculture"
            points={[
              "Cancellation of GO 217 to safeguard fish pond ownership and livelihoods.",
              "Enhancement of diesel subsidy support for fishermen.",
              "Provision of subsidised power connections to aquaculture farms.",
              "Policy measures to strengthen export-oriented aquaculture."
            ]}
          />

          <Sector
            title="Animal Husbandry & Dairy"
            points={[
              "State-wide de-worming and livestock health camps.",
              "Strengthening veterinary services and disease prevention systems.",
              "Support for dairy farmers to improve productivity and income stability."
            ]}
          />

          <Sector
            title="Irrigation & Water Management"
            points={[
              "Expansion of drip irrigation systems with higher subsidy support.",
              "Encouragement of water-efficient agricultural practices.",
              "Focus on sustainability in water-scarce regions."
            ]}
          />

        </div>
      </section>

      {/* ================= ADMINISTRATIVE ACTIONS ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
            Key Administrative Actions
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
            <li>
              Signed the Polam Pilustundi program as the first official file
              upon assuming ministerial office in July 2024.
            </li>
            <li>
              Restored and strengthened sector-specific subsidies discontinued
              during the previous period.
            </li>
            <li>
              Initiated institutional reforms across cooperative and marketing
              bodies to improve transparency.
            </li>
            <li>
              Coordinated with central agencies on price stabilisation and
              procurement measures for key crops.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          The achievements listed above represent an ongoing process of policy
          implementation and administrative reform. Emphasis continues to be
          placed on measurable outcomes, institutional accountability, and
          long-term sustainability across agriculture and allied sectors.
        </p>
      </section>

    </main>
  );
}

/* -------------------------------
   Helper Components
-------------------------------- */

function Highlight({ title, value, desc }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#E6EDF3]
      p-6 shadow-[0_25px_50px_-35px_rgba(14,30,42,0.35)]"
    >
      {/* authority accent */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <p className="text-xs uppercase tracking-wide text-[#6B7C8C] mb-1">
        {title}
      </p>

      <p className="text-lg md:text-xl font-extrabold mb-2 text-[#0E1E2A]">
        {value}
      </p>

      <p className="text-sm text-[#445566] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Sector({ title, points }) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold mb-4 text-[#0E1E2A]">
        {title}
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-[14.5px] md:text-[15px]">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
