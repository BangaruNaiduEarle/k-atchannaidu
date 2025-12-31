import FAQ from "../components/common/FAQ";

export default function SchemesPage() {
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
            Public Welfare Information
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Schemes · Eligibility · FAQs
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
            Information on major government schemes, eligibility criteria,
            benefits, and frequently asked questions for citizens.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <p className="max-w-4xl text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          This page provides simplified information on agriculture and allied
          sector schemes implemented by the Government of Andhra Pradesh.
          Citizens are advised to approach official departments for final
          verification and application procedures.
        </p>
      </section>

      {/* ================= SCHEME DETAILS ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 space-y-16">

          <SchemeBlock
            title="Annadata Sukhibhava Scheme"
            benefit="₹20,000 per farmer per year (DBT)"
            eligibility={[
              "Small and marginal farmers of Andhra Pradesh",
              "Land-owning farmers and eligible tenant farmers",
              "Aadhaar-linked bank account mandatory",
              "Farmer must be registered with agriculture department",
            ]}
            howToApply={[
              "Verify farmer details at village secretariat or agriculture office",
              "Ensure Aadhaar and bank account linkage",
              "Submit required land or tenancy records",
              "Track payment through official portal",
            ]}
          />

          <SchemeBlock
            title="Crop Insurance Scheme"
            benefit="Financial protection against crop loss"
            eligibility={[
              "Farmers cultivating notified crops",
              "Both loanee and non-loanee farmers eligible",
              "Crop must be sown within notified dates",
              "Enrollment through banks or agriculture offices",
            ]}
            howToApply={[
              "Enroll through concerned bank or MeeSeva centre",
              "Provide crop and land details",
              "Pay applicable farmer share of premium",
              "Claim settlement after crop loss assessment",
            ]}
          />

          <SchemeBlock
            title="Soil Health Card Program"
            benefit="Free soil testing and fertilizer recommendations"
            eligibility={[
              "All registered farmers in Andhra Pradesh",
              "Soil sample submission through agriculture department",
              "Participation in soil health camps",
            ]}
            howToApply={[
              "Submit soil sample at local agriculture office",
              "Receive Soil Health Card after testing",
              "Follow crop-wise fertilizer recommendations",
              "Collect subsidised micronutrients if prescribed",
            ]}
          />

          <SchemeBlock
            title="Drip Irrigation Subsidy"
            benefit="Up to 55% subsidy on drip irrigation systems"
            eligibility={[
              "Small and marginal farmers",
              "Land suitability for drip irrigation",
              "Crop-specific approval",
              "Valid land ownership or tenancy documents",
            ]}
            howToApply={[
              "Apply through horticulture or agriculture department",
              "Site inspection and approval",
              "Install system through approved vendor",
              "Receive subsidy after verification",
            ]}
          />

          <SchemeBlock
            title="Fisheries & Aquaculture Support"
            benefit="Subsidies, electricity support, and diesel assistance"
            eligibility={[
              "Registered fishermen and aquaculture farmers",
              "Pond or fishing activity must be officially registered",
              "Compliance with fisheries regulations",
            ]}
            howToApply={[
              "Register pond or fishing unit with fisheries department",
              "Apply for subsidies through department offices",
              "Avail diesel subsidy through approved channels",
              "Participate in department review and inspections",
            ]}
          />

        </div>
      </section>

      {/* ================= FAQs ================= */}
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
  <h2 className="text-xl md:text-2xl font-extrabold mb-10 text-[#0E1E2A]">
    Frequently Asked Questions (FAQs)
  </h2>

  <div className="max-w-4xl divide-y divide-[#E6EDF3] rounded-2xl
    border border-[#E6EDF3] bg-white
    shadow-[0_30px_60px_-40px_rgba(14,30,42,0.35)]"
  >
    <FAQ
      q="How can I check whether I am eligible for Annadata Sukhibhava?"
      a="Eligibility can be verified at your village secretariat or district agriculture office using Aadhaar and land or tenancy records."
    />
    <FAQ
      q="When will the scheme amounts be credited?"
      a="Amounts are released in instalments as per government notification and credited directly to Aadhaar-linked bank accounts."
    />
    <FAQ
      q="Are tenant farmers eligible for benefits?"
      a="Yes, eligible tenant farmers are included through separate verification mechanisms introduced by the government."
    />
    <FAQ
      q="What should I do if I do not receive benefits?"
      a="You may raise a grievance through the farmer helpline or approach the local agriculture or fisheries department office."
    />
    <FAQ
      q="Is there a helpline for scheme-related queries?"
      a="Yes. Farmer Helpline: 155251 (toll-free)."
    />
  </div>
</section>


      {/* ================= DISCLAIMER ================= */}
      <section className="bg-[#F9FAFB] border-t border-[#E6EDF3]">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-16">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Disclaimer: Scheme guidelines, eligibility, and benefits are subject
            to government notifications and revisions. Citizens are advised to
            refer to official government orders and department communications
            for final confirmation.
          </p>
        </div>
      </section>

    </main>
  );
}

/* -------------------------------
   Helper Components
-------------------------------- */

function SchemeBlock({ title, benefit, eligibility, howToApply }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#E6EDF3]
      p-8 shadow-[0_30px_60px_-35px_rgba(14,30,42,0.35)]"
    >
      <div className="absolute left-0 top-8 bottom-8 w-[3px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <h3 className="text-xl font-extrabold mb-2 text-[#0E1E2A]">
        {title}
      </h3>

      <p className="text-sm font-semibold text-[#0E1E2A] mb-6">
        Benefit: {benefit}
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-[14.5px] text-[#445566] leading-relaxed">
        <div>
          <h4 className="font-bold mb-2 text-[#0E1E2A]">
            Eligibility
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {eligibility.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-[#0E1E2A]">
            How to Apply
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {howToApply.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// function FAQ({ q, a }) {
//   return (
//     <div className="bg-white rounded-xl border border-[#E6EDF3]
//       p-6 shadow-[0_18px_40px_-30px_rgba(14,30,42,0.3)]"
//     >
//       <p className="font-semibold mb-2 text-[#0E1E2A]">
//         {q}
//       </p>
//       <p className="text-[14.5px] text-[#445566] leading-relaxed">
//         {a}
//       </p>
//     </div>
//   );
// }
