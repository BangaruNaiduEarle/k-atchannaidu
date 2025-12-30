export default function ProgramsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0E1E2A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-[#F5B301] font-semibold mb-2">
            Government Initiatives
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Flagship Programs
          </h1>
          <p className="text-lg max-w-3xl leading-relaxed">
            Major initiatives launched and implemented to strengthen agriculture,
            allied sectors, and farmer welfare across Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          As the Cabinet Minister responsible for Agriculture and allied sectors,
          K. Atchannaidu has prioritised direct outreach, scientific farming,
          income security, and institutional support for farmers, fishermen,
          and rural communities. The following flagship programs reflect
          this approach.
        </p>
      </section>

      {/* ================= PROGRAM LIST ================= */}
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

          {/* PROGRAM 1 */}
          <ProgramBlock
            title="Polam Pilustundi (పోలం పిలుస్తోంది)"
            subtitle="‘The Field is Calling’"
            points={[
              "A large-scale agricultural extension program bringing government services directly to farmers’ fields.",
              "Scientists from agricultural and veterinary universities participate in village-level interactions.",
              "Implemented during both Kharif and Rabi seasons, with weekly field visits.",
              "Focuses on crop management, soil health, pest control, and productivity improvement.",
              "The first official file signed upon assuming office in July 2024."
            ]}
          />

          {/* PROGRAM 2 */}
          <ProgramBlock
            title="Annadata Sukhibhava Scheme"
            subtitle="Income Support for Farmers"
            points={[
              "Provides ₹20,000 per year to eligible farmers through Direct Benefit Transfer (DBT).",
              "State contribution of ₹14,000 combined with ₹6,000 under PM-Kisan.",
              "Covers 46.85 lakh farmers across Andhra Pradesh.",
              "Ensures transparency through Aadhaar-linked bank accounts.",
              "Includes special focus on tenant farmers and vulnerable cultivators."
            ]}
          />

          {/* PROGRAM 3 */}
          <ProgramBlock
            title="Soil Health Mission"
            subtitle="Scientific Nutrient Management"
            points={[
              "State-wide soil testing initiative to restore soil fertility and productivity.",
              "More than 4.3 lakh soil samples tested using advanced laboratory methods.",
              "12-parameter analysis including macro and micro nutrients.",
              "Soil Health Cards issued with crop-wise fertilizer recommendations.",
              "100% subsidy on micronutrients for identified deficiencies."
            ]}
          />

          {/* PROGRAM 4 */}
          <ProgramBlock
            title="Drip Irrigation Expansion"
            subtitle="Efficient Water Use in Agriculture"
            points={[
              "Target of covering 3 lakh hectares under drip irrigation systems.",
              "Subsidy of up to 55% for small and marginal farmers.",
              "Improves water efficiency and crop yields, especially in water-scarce regions.",
              "Encourages adoption of modern irrigation technologies.",
              "Supports sustainable agriculture and groundwater conservation."
            ]}
          />

          {/* PROGRAM 5 */}
          <ProgramBlock
            title="Fisheries & Aquaculture Development"
            subtitle="Support for Coastal & Inland Fisheries"
            points={[
              "Cancellation of GO 217 to protect fish pond ownership and livelihoods.",
              "Diesel subsidy for fishermen enhanced to ₹1,200 crore.",
              "Provision of subsidised electricity connections for aquaculture farms.",
              "Promotion of Andhra Pradesh as a major aquaculture and shrimp export hub.",
              "Regulatory reforms through amendments to the Fisheries Development framework."
            ]}
          />

          {/* PROGRAM 6 */}
          <ProgramBlock
            title="Dairy & Animal Husbandry Initiatives"
            subtitle="Livestock Health & Rural Income"
            points={[
              "State-wide de-worming and animal health camps.",
              "Strengthening veterinary infrastructure and disease prevention measures.",
              "Comprehensive livestock data collection for planning and policy.",
              "Support for dairy farmers to improve productivity and income.",
              "Focus on sustainable livestock management practices."
            ]}
          />

        </div>
      </section>

      {/* ================= SUPPORT INFO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold mb-6">
          Farmer & Public Assistance
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            title="Farmer Helpline"
            value="155251"
            desc="For scheme-related queries and grievance redressal."
          />
          <InfoCard
            title="Scheme Portal"
            value="annadathasukhibhava.ap.gov.in"
            desc="Official portal for farmer income support."
          />
          <InfoCard
            title="Department Offices"
            value="District Agriculture Offices"
            desc="Available in all districts for in-person assistance."
          />
        </div>
      </section>

    </main>
  );
}

/* -------------------------------
   Helper Components
-------------------------------- */

function ProgramBlock({ title, subtitle, points }) {
  return (
    <div className="bg-white border p-8">
      <h3 className="text-xl font-extrabold mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        {subtitle}
      </p>
      <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function InfoCard({ title, value, desc }) {
  return (
    <div className="border p-6">
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="font-bold mb-2">{value}</p>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}
