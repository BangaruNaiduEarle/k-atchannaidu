import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E1E2A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* About */}
        <div>
          <h3 className="text-white font-extrabold text-lg mb-4">
            K. Atchannaidu
          </h3>
          <p className="text-sm leading-relaxed">
            Cabinet Minister, Government of Andhra Pradesh.
            Responsible for Agriculture, Cooperation, Marketing,
            Animal Husbandry, Dairy Development, and Fisheries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/programs" className="hover:text-[#F5B301]">Flagship Programs</Link></li>
            <li><Link href="/schemes" className="hover:text-[#F5B301]">Farmer Schemes</Link></li>
            <li><Link href="/media" className="hover:text-[#F5B301]">Media & Updates</Link></li>
            <li><Link href="/contact" className="hover:text-[#F5B301]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p className="text-sm">
            AP Secretariat, Amaravati<br />
            Andhra Pradesh
          </p>
          <p className="text-sm mt-2">
            Farmer Helpline: <strong>155251</strong>
          </p>
          <p className="text-sm mt-2">
            Email: minister_agri@ap.gov.in
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row justify-between gap-2">
          <p>
            © {new Date().getFullYear()} Government of Andhra Pradesh.
            All rights reserved.
          </p>
          <p className="text-gray-400">
            Official website of the Cabinet Minister
          </p>
        </div>
      </div>
    </footer>
  );
}
