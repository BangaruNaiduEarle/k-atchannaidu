"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Fish,
  Droplet,
  Sprout,
  IndianRupee,
  Users,
  Landmark,
  ExternalLink,
} from "lucide-react";
import HomeMarquee from "./components/home/HomeMarquee";

/* ----------------------------------
   ANIMATION SYSTEM (REFINED 2030)
----------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ----------------------------------
   HOME PAGE
----------------------------------- */

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO (UNCHANGED LAYOUT) ================= */}
      <section className="relative bg-[#0E1E2A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center"
        >
          {/* LEFT */}
          <div className="space-y-6 relative">
            <div className="absolute -left-6 top-0 h-full w-[2px] bg-[#F5B301]/40 hidden md:block" />

            <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-[#F5B301] font-semibold">
              Government of Andhra Pradesh
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight">
              K. Atchannaidu
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg font-semibold">
              Cabinet Minister
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-gray-300 leading-relaxed">
              Agriculture • Cooperation • Marketing • Animal Husbandry •
              Dairy Development • Fisheries
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-300 max-w-xl leading-relaxed">
              Strengthening farmers’ livelihoods and allied sectors through
              governance, scientific practices, and direct outreach.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <a href="/programs" className="px-6 py-3 bg-[#F5B301] text-[#0E1E2A] font-bold text-sm hover:bg-[#e0a800] hover:-translate-y-[1px] transition-all">
                Flagship Programs
              </a>
              <a href="/schemes" className="px-6 py-3 border border-white text-white font-bold text-sm hover:bg-white hover:text-[#0E1E2A] transition-colors">
                Farmer Schemes & Support
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto md:mx-0"
          >
            <div className="absolute -inset-8 bg-[#F5B301]/10 blur-3xl rounded-full" />
            <div className="relative overflow-hidden border border-white/20 bg-[#1a2f3f] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <img
                src="/assets/home-assembly.png"
                alt="K. Atchannaidu – Cabinet Minister, Government of Andhra Pradesh"
                className="w-full h-[420px] object-cover scale-[1.02] transition-transform duration-[1200ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2A]/70 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= GOVERNANCE SNAPSHOT (NEXT LEVEL) ================= */}
      <section className="bg-[#F9FAFB] border-b">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          <Stat icon={IndianRupee} label="Agriculture Budget" value="₹43,402 Cr" />
          <Stat icon={Users} label="Farmers Benefited" value="46.85 Lakh" />
          <Stat icon={IndianRupee} label="Income Support" value="₹20,000 / year" />
          <Stat icon={Landmark} label="Major Portfolios" value="6" />
          <Stat icon={Users} label="Elected MLA" value="6 Times" />
          <Stat icon={Landmark} label="Cabinet Minister" value="Srikakulam District" />
        </motion.div>
      </section>

      {/* ================= FIELD ENGAGEMENT (MARQUEE) ================= */}
        <HomeMarquee />

      {/* ================= FLAGSHIP PROGRAMS (NEXT LEVEL) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.header variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Flagship Programs
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Government initiatives focused on farmer welfare, scientific
            agriculture, allied sectors, and sustainable livelihoods.
          </p>
        </motion.header>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Program icon={Sprout} title="Polam Pilustundi" desc="Direct outreach bringing scientists and officials to farmers’ fields." />
          <Program icon={IndianRupee} title="Annadata Sukhibhava" desc="₹20,000 annual income support through DBT." />
          <Program icon={Leaf} title="Soil Health Mission" desc="4.3 lakh soil tests with scientific recommendations." />
          <Program icon={Fish} title="Fisheries & Aquaculture Support" desc="Protection of fish ponds, diesel subsidy, and power support." />
          <Program icon={Droplet} title="Drip Irrigation Expansion" desc="3 lakh hectare target with up to 55% subsidy." />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <a href="/programs" className="inline-flex items-center gap-2 font-bold text-sm text-[#0E1E2A] hover:text-[#F5B301] transition-colors">
            View all programs <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>

      {/* ================= MINISTER MESSAGE (NEXT LEVEL) ================= */}
      <section className="bg-[#F9FAFB] border-t">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto px-6 py-28">
          <h3 className="text-2xl font-extrabold mb-10">
            Minister’s Message
          </h3>

          <div className="space-y-6 text-[15.5px] leading-[1.8] text-gray-700">
            <p>
              Agriculture sustains more than 60% of Andhra Pradesh’s population and
              contributes nearly 35% to the State’s GDP.
            </p>
            <p>
              Through direct outreach, scientific farming practices, and transparent
              governance, we are committed to strengthening rural livelihoods.
            </p>
          </div>

          <p className="mt-10 font-bold tracking-wide">
            — K. Atchannaidu<br />
            <span className="text-sm text-gray-600">
              Cabinet Minister, Government of Andhra Pradesh
            </span>
          </p>
        </motion.div>
      </section>

      {/* ================= PUBLIC SUPPORT (NEXT LEVEL) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-extrabold mb-12">
          Farmer & Public Support
        </motion.h3>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-10">
          <Support title="Farmer Helpline" value="155251" />
          <Support title="Scheme Portal" value="annadathasukhibhava.ap.gov.in" />
          <Support title="Constituency Office" value="Tekkali, Srikakulam District" />
        </motion.div>
      </section>

    </main>
  );
}

/* ----------------------------------
   COMPONENTS (UPGRADED DESIGN)
----------------------------------- */

function Stat({ icon: Icon, label, value }) {
  return (
    <motion.div variants={fadeUp} className="bg-white border p-7 text-center hover:-translate-y-[2px] transition-all duration-300 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.25)]">
      <div className="inline-flex p-4 rounded-full bg-[#F5B301]/10 mb-4">
        <Icon className="text-[#F5B301]" />
      </div>
      <p className="text-xl font-extrabold tracking-tight">{value}</p>
      <p className="text-sm text-gray-600 mt-2">{label}</p>
    </motion.div>
  );
}

function Program({ icon: Icon, title, desc }) {
  return (
    <motion.div variants={fadeUp} className="border p-8 bg-white hover:shadow-xl hover:-translate-y-[4px] transition-all duration-300">
      <div className="inline-flex p-4 bg-[#F5B301]/10 rounded-lg mb-6">
        <Icon className="text-[#F5B301]" />
      </div>
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Support({ title, value }) {
  return (
    <motion.div variants={fadeUp} className="border p-8 bg-white hover:bg-[#F9FAFB] transition-colors duration-300">
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="font-bold tracking-wide">{value}</p>
    </motion.div>
  );
}
