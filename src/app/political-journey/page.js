export default function PoliticalJourneyPage() {
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
            Public Life & Leadership
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Political Journey
          </h1>

          <p className="text-base md:text-lg font-semibold text-gray-200 max-w-3xl">
            A chronological overview of electoral milestones, leadership roles,
            and ministerial responsibilities.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <p className="max-w-4xl text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
          K. Atchannaidu has been actively involved in public life for nearly
          three decades. His political journey reflects sustained public
          support, organisational leadership, and ministerial responsibility
          across different phases of governance and opposition.
        </p>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-12 text-[#0E1E2A]">
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-xl md:text-2xl font-extrabold mb-10 text-[#0E1E2A]">
          Electoral Record (Summary)
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[#E6EDF3] bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-[#F7FAFC]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[#0E1E2A]">Year</th>
                <th className="px-4 py-3 text-left font-semibold text-[#0E1E2A]">Constituency</th>
                <th className="px-4 py-3 text-left font-semibold text-[#0E1E2A]">Result</th>
              </tr>
            </thead>
            <tbody className="text-[#445566]">
              <TableRow year="1996" constituency="Harishchandrapuram" result="Elected (By-election)" />
              <TableRow year="1999" constituency="Harishchandrapuram" result="Elected" />
              <TableRow year="2004" constituency="Harishchandrapuram" result="Elected" />
              <TableRow year="2009" constituency="Tekkali" result="Contested" />
              <TableRow year="2014" constituency="Tekkali" result="Elected" />
              <TableRow year="2019" constituency="Tekkali" result="Elected" />
              <TableRow year="2024" constituency="Tekkali" result="Elected" />
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= LEADERSHIP & APPROACH ================= */}
      <section className="bg-white border-t border-[#E6EDF3]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#0E1E2A]">
            Leadership & Public Service
          </h2>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed mb-4">
            Throughout his political career, K. Atchannaidu has been recognised
            for his organisational discipline, grassroots engagement, and
            consistent advocacy for farmer welfare and rural development.
          </p>

          <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
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
   Helper Components
-------------------------------- */

function TimelineItem({ year, title, description }) {
  return (
    <div className="relative pl-8">
      {/* vertical authority line */}
      <div className="absolute left-0 top-0 h-full w-[2px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <p className="text-xs font-semibold tracking-wide text-[#C9A24D] mb-1">
        {year}
      </p>

      <h3 className="text-base md:text-lg font-bold text-[#0E1E2A] mb-2">
        {title}
      </h3>

      <p className="text-[14.5px] md:text-[15px] text-[#445566] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TableRow({ year, constituency, result }) {
  return (
    <tr className="border-t border-[#E6EDF3]">
      <td className="px-4 py-3">{year}</td>
      <td className="px-4 py-3">{constituency}</td>
      <td className="px-4 py-3">{result}</td>
    </tr>
  );
}
