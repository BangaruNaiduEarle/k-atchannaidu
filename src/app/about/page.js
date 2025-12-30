export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0E1E2A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-[#F5B301] font-semibold mb-2">
            Ministerial Profile
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            K. Atchannaidu
          </h1>
          <p className="text-lg font-semibold">
            Cabinet Minister, Government of Andhra Pradesh
          </p>
          <p className="text-sm text-gray-300 mt-2 max-w-3xl leading-relaxed">
            Responsible for Agriculture, Cooperation, Marketing, Animal Husbandry,
            Dairy Development, and Fisheries.
          </p>
        </div>
      </section>

      {/* ================= BASIC PROFILE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        {/* Left: Profile Summary */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-extrabold">
            Profile Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            K. Atchannaidu is a senior political leader from Andhra Pradesh with
            nearly three decades of experience in public life. He has been
            consistently elected as a Member of the Legislative Assembly and
            currently serves as a Cabinet Minister in the Government of Andhra
            Pradesh.
          </p>

          <p className="text-gray-700 leading-relaxed">
            As a farmer by profession, he brings first-hand understanding of
            agricultural challenges and rural livelihoods. His work focuses on
            strengthening farmer welfare, allied sectors, and grassroots-level
            governance through scientific practices and transparent administration.
          </p>

          <p className="text-gray-700 leading-relaxed">
            He represents the Tekkali Assembly Constituency in Srikakulam district
            and is the only Cabinet Minister from the district in the present
            government.
          </p>
        </div>

        {/* Right: Key Details */}
        <div className="border p-6 space-y-4 h-fit">
          <h3 className="font-bold text-lg">
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
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-extrabold mb-6">
              Education
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                • Intermediate (12th Standard), completed in 1988
              </li>
              <li>
                • Bachelor of Science (B.Sc.) – Discontinued
                <br />
                <span className="text-sm text-gray-600">
                  Andhra University-affiliated college, Visakhapatnam
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-6">
              Family & Legacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              He comes from a family with a long tradition of public service.
              His elder brother, Late Kinjarapu Yerran Naidu, served as a Union
              Minister of India and played a significant role in his political
              journey.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              His nephew, Kinjarapu Ram Mohan Naidu, currently serves as the
              Union Minister of Civil Aviation, continuing the family’s public
              service legacy.
            </p>
          </div>

        </div>
      </section>

      {/* ================= POLITICAL CAREER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold mb-10">
          Political Career
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl">
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
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-extrabold mb-6">
            Vision & Approach
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            His approach to governance is rooted in the belief that agriculture
            and allied sectors form the backbone of Andhra Pradesh’s economy.
            With over 60% of the population dependent on these sectors, his focus
            is on ensuring stability, dignity, and sustainable income for farmers.
          </p>

          <p className="text-gray-700 leading-relaxed">
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
   Small helper component
-------------------------------- */

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm border-b pb-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-right">{value}</span>
    </div>
  );
}
