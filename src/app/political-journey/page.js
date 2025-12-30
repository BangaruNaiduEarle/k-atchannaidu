export default function PoliticalJourneyPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#0E1E2A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-[#F5B301] font-semibold mb-2">
            Public Life & Leadership
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Political Journey
          </h1>
          <p className="text-lg font-semibold max-w-3xl">
            A chronological overview of electoral milestones, leadership roles,
            and ministerial responsibilities.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="max-w-4xl text-gray-700 leading-relaxed">
          K. Atchannaidu has been actively involved in public life for nearly
          three decades. His political journey reflects sustained public
          support, organisational leadership, and ministerial responsibility
          across different phases of governance and opposition.
        </p>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-extrabold mb-12">
            Chronological Timeline
          </h2>

          <div className="space-y-10 max-w-4xl">

            <TimelineItem
              year="1996"
              title="Entry into Legislature"
              description="Elected as Member of the Legislative Assembly for the first time through a by-election from Harishchandrapuram constituency, marking the beginning of his formal political career."
            />

            <TimelineItem
              year="1999"
              title="Second Term as MLA"
              description="Re-elected from Harishchandrapuram constituency, consolidating his position as a mass leader in the region."
            />

            <TimelineItem
              year="2004"
              title="Third Consecutive Electoral Victory"
              description="Secured a third consecutive term as MLA from Harishchandrapuram, reflecting sustained voter confidence."
            />

            <TimelineItem
              year="2009"
              title="Constituency Reorganisation"
              description="Following delimitation, Harishchandrapuram constituency was merged into Tekkali. He contested from Tekkali constituency in the 2009 Assembly elections."
            />

            <TimelineItem
              year="2014"
              title="Victory from Tekkali Constituency"
              description="Elected as MLA from Tekkali constituency, beginning a new phase of representation after constituency reorganisation."
            />

            <TimelineItem
              year="2017–2019"
              title="Ministerial Responsibilities"
              description="Served as a Minister in the Government of Andhra Pradesh, handling portfolios such as Transport, Backward Classes Welfare, Handlooms, and Textiles."
            />

            <TimelineItem
              year="2019"
              title="Re-elected as MLA"
              description="Returned to the Legislative Assembly from Tekkali constituency and served as an Opposition MLA during this term."
            />

            <TimelineItem
              year="2020–2024"
              title="TDP State President"
              description="Appointed as the State President of the Telugu Desam Party (Andhra Pradesh), leading organisational efforts during the opposition period."
            />

            <TimelineItem
              year="2024"
              title="Third Consecutive Win from Tekkali"
              description="Elected for a third consecutive term from Tekkali constituency, reflecting increased public mandate."
            />

            <TimelineItem
              year="2024–Present"
              title="Cabinet Minister, Government of Andhra Pradesh"
              description="Inducted into the State Cabinet and entrusted with key portfolios related to agriculture and allied sectors."
            />

          </div>
        </div>
      </section>

      {/* ================= ELECTORAL RECORD ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold mb-10">
          Electoral Record (Summary)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th className="border px-4 py-2 text-left">Year</th>
                <th className="border px-4 py-2 text-left">Constituency</th>
                <th className="border px-4 py-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1996</td>
                <td className="border px-4 py-2">Harishchandrapuram</td>
                <td className="border px-4 py-2">Elected (By-election)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1999</td>
                <td className="border px-4 py-2">Harishchandrapuram</td>
                <td className="border px-4 py-2">Elected</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2004</td>
                <td className="border px-4 py-2">Harishchandrapuram</td>
                <td className="border px-4 py-2">Elected</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2009</td>
                <td className="border px-4 py-2">Tekkali</td>
                <td className="border px-4 py-2">Contested</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2014</td>
                <td className="border px-4 py-2">Tekkali</td>
                <td className="border px-4 py-2">Elected</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2019</td>
                <td className="border px-4 py-2">Tekkali</td>
                <td className="border px-4 py-2">Elected</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2024</td>
                <td className="border px-4 py-2">Tekkali</td>
                <td className="border px-4 py-2">Elected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= LEADERSHIP & APPROACH ================= */}
      <section className="bg-[#F9FAFB] border-t">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-extrabold mb-6">
            Leadership & Public Service
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Throughout his political career, K. Atchannaidu has been recognised
            for his organisational discipline, grassroots engagement, and
            consistent advocacy for farmer welfare and rural development.
          </p>

          <p className="text-gray-700 leading-relaxed">
            His leadership roles have spanned both governance and opposition,
            providing him with a balanced perspective on policy implementation,
            institutional accountability, and public administration.
          </p>
        </div>
      </section>

    </main>
  );
}

/* -------------------------------
   Timeline helper component
-------------------------------- */

function TimelineItem({ year, title, description }) {
  return (
    <div className="border-l-4 border-[#F5B301] pl-6">
      <p className="text-sm font-semibold text-[#0E1E2A]">{year}</p>
      <h3 className="text-lg font-bold mt-1 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
