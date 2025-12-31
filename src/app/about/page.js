export default function AboutPage() {
  return (
    <main className="bg-[#F7FAFC] text-gray-900 overflow-x-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative bg-gradient-to-br from-[#0E1E2A] via-[#12283A] to-[#0E1E2A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),
              linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:48px_48px]"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-18 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-[#F5B301] font-semibold mb-3">
            Ministerial Profile
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            K. Atchannaidu
          </h1>

          <p className="text-base md:text-lg font-semibold text-gray-200">
            Cabinet Minister, Government of Andhra Pradesh
          </p>

          <p className="text-sm text-gray-300 mt-3 max-w-3xl leading-relaxed">
            Responsible for Agriculture, Cooperation, Marketing, Animal Husbandry,
            Dairy Development, and Fisheries.
          </p>
        </div>
      </section>

      {/* ================= BASIC PROFILE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-3 gap-12">

        {/* LEFT: PROFILE SUMMARY */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#0E1E2A]">
            Profile Overview
          </h2>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
            K. Atchannaidu is a senior political leader from Andhra Pradesh with
            nearly three decades of experience in public life. He has been
            consistently elected as a Member of the Legislative Assembly and
            currently serves as a Cabinet Minister in the Government of Andhra
            Pradesh.
          </p>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
            As a farmer by profession, he brings first-hand understanding of
            agricultural challenges and rural livelihoods. His work focuses on
            strengthening farmer welfare, allied sectors, and grassroots-level
            governance through scientific practices and transparent administration.
          </p>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
            He represents the Tekkali Assembly Constituency in Srikakulam district
            and is the only Cabinet Minister from the district in the present
            government.
          </p>
        </div>

        {/* RIGHT: KEY DETAILS */}
        <div className="rounded-2xl bg-white border border-[#E6EDF3]
          shadow-[0_30px_60px_-35px_rgba(14,30,42,0.35)]
          p-7 md:p-8 h-fit"
        >
          <h3 className="font-extrabold text-base md:text-lg mb-5 text-[#0E1E2A]">
            Key Information
          </h3>

          <InfoRow label="Full Name" value="Kinjarapu Atchannaidu" />
          <InfoRow label="Year of Birth" value="1969" />
          <InfoRow label="Birthplace" value="Nimmada Village, Srikakulam District" />
          <InfoRow label="Profession" value="Politician, Farmer" />
          <InfoRow label="Political Party" value="Telugu Desam Party (TDP)" />
          <InfoRow label="Constituency" value="Tekkali, Srikakulam District" />
        </div>
      </section>

      {/* ================= EDUCATION & FAMILY ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12">

          {/* EDUCATION */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
              Education
            </h2>

            <ul className="space-y-3 text-[14.5px] md:text-[15px] text-[#445566]">
              <li>
                • Intermediate (12th Standard), completed in 1988
              </li>
              <li>
                • Bachelor of Science (B.Sc.) – Discontinued
                <br />
                <span className="text-sm text-gray-500">
                  Andhra University-affiliated college, Visakhapatnam
                </span>
              </li>
            </ul>
          </div>

          {/* FAMILY */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
              Family & Legacy
            </h2>

            <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
              He comes from a family with a long tradition of public service.
              His elder brother, Late Kinjarapu Yerran Naidu, served as a Union
              Minister of India and played a significant role in his political
              journey.
            </p>

            <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed mt-4">
              His nephew, Kinjarapu Ram Mohan Naidu, currently serves as the
              Union Minister of Civil Aviation, continuing the family’s public
              service legacy.
            </p>
          </div>

        </div>
      </section>

      {/* ================= POLITICAL CAREER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xl md:text-2xl font-extrabold mb-10 text-[#0E1E2A]">
          Political Career
        </h2>

        <div className="space-y-6 text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed max-w-4xl">
          <p>
            K. Atchannaidu entered active politics in the mid-1990s and was first
            elected as a Member of the Legislative Assembly in 1996. Since then,
            he has served multiple terms, reflecting consistent public support
            across elections.
          </p>

          <p>
            After constituency reorganization, he began representing the Tekkali
            Assembly Constituency from 2014 onwards and has secured consecutive
            victories in 2014, 2019, and 2024.
          </p>

          <p>
            Between 2017 and 2019, he served as a Minister in the Government of
            Andhra Pradesh, handling portfolios such as Transport, Backward
            Classes Welfare, Handlooms, and Textiles.
          </p>

          <p>
            In October 2020, he was appointed as the State President of the
            Telugu Desam Party (Andhra Pradesh), a role he held until 2024.
            During this period, he led the party through challenging opposition
            years and played a key role in strengthening the organisation.
          </p>

          <p>
            Following the 2024 Assembly elections, he was inducted into the
            Cabinet and assigned key portfolios related to agriculture and
            allied sectors.
          </p>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
            Vision & Approach
          </h2>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed mb-4">
            His approach to governance is rooted in the belief that agriculture
            and allied sectors form the backbone of Andhra Pradesh’s economy.
            With over 60% of the population dependent on these sectors, his focus
            is on ensuring stability, dignity, and sustainable income for farmers.
          </p>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
            He advocates scientific farming practices, soil health management,
            efficient irrigation, market access, and transparent delivery of
            welfare schemes. His vision aligns with the broader goal of building
            a resilient and prosperous Andhra Pradesh.
          </p>
        </div>
      </section>

    </main>
  );
}

/* -------------------------------
   Helper
-------------------------------- */

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm border-b border-[#E6EDF3] pb-2 mb-2">
      <span className="text-[#6B7C8C]">{label}</span>
      <span className="font-semibold text-right text-[#0E1E2A]">
        {value}
      </span>
    </div>
  );
}
