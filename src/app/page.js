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
import AnimatedNumber from "./components/home/AnimatedNumber";

/* ----------------------------------
   MOTION SYSTEM (PRESTIGE)
----------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

/* ----------------------------------
   HOME PAGE
----------------------------------- */

export default function HomePage() {
  return (
    <main className="bg-[#F7FAFC] text-gray-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0E1E2A] via-[#12283A] to-[#0E1E2A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* ================= HERO BACKGROUND (ADD HERE) ================= */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* base grid */}
          <div
            className="absolute inset-0 opacity-[0.05]
      bg-[linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
      bg-[size:48px_48px]"
          />

          {/* soft premium boxes */}
          <div className="absolute top-[18%] left-[10%] w-[320px] h-[320px]
      bg-white/5 rounded-3xl blur-2xl"
          />

          <div className="absolute bottom-[20%] right-[12%] w-[260px] h-[260px]
      bg-white/4 rounded-3xl blur-2xl"
          />

          {/* vignette */}
          <div className="absolute inset-0 bg-gradient-to-b
      from-black/10 via-transparent to-black/40"
          />
        </div>


        <div className="absolute inset-0 opacity-[0.05]
          bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)]
          bg-[size:40px_40px]"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-6 py-18 md:py-28 grid md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT */}
          <div className="space-y-6 relative">
            <div className="absolute -left-6 top-0 h-full w-[2px]
              bg-gradient-to-b from-[#F5B301]/60 to-transparent hidden md:block"
            />

            <motion.p variants={fadeUp}
              className="text-sm uppercase tracking-[0.25em] text-[#F5B301] font-semibold"
            >
              Government of Andhra Pradesh
            </motion.p>

            <motion.h1 variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              K. Atchannaidu
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-lg font-semibold text-[#E5E7EB]"
            >
              Cabinet Minister
            </motion.p>

            <motion.p variants={fadeUp}
              className="text-sm text-gray-300 leading-relaxed"
            >
              Agriculture • Cooperation • Marketing • Animal Husbandry •
              Dairy Development • Fisheries
            </motion.p>

            <motion.p variants={fadeUp}
              className="text-gray-300 max-w-xl leading-relaxed"
            >
              Strengthening farmers’ livelihoods and allied sectors through
              governance, scientific practices, and direct outreach.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 pt-4">
              <a
                href="/programs"
                className="px-7 py-3 bg-gradient-to-r from-[#F5B301] to-[#FFD666]
                  text-[#0E1E2A] font-bold text-[12px] md:text-sm
                  hover:shadow-[0_12px_30px_-10px_rgba(245,179,1,0.6)]
                  transition-all text-center"
              >
                Flagship Programs
              </a>

              <a
                href="/schemes"
                className="px-7 py-3 border border-white/70 text-white
                  font-bold text-[12px] md:text-sm hover:bg-white hover:text-[#0E1E2A]
                  transition-all text-center"
              >
                Farmer Schemes & Support
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto md:mx-0"
          >
            <div className="absolute -inset-10 bg-[#F5B301]/15 blur-3xl rounded-full" />

            <div className="relative overflow-hidden rounded-xl bg-[#132C40]
              shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
            >
              <img
                src="/assets/home-assembly.png"
                alt="K. Atchannaidu"
                className="w-full h-[420px] object-cover
                  transition-transform duration-[1400ms]
                  hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t
                from-[#0E1E2A]/80 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="relative h-12 md:h-24 bg-[#0E1E2A]">
        <div className="absolute inset-x-0 bottom-0 h-[1px]
    bg-gradient-to-r from-transparent via-[#F5B301]/60 to-transparent" />
      </div>



      {/* ================= GOVERNANCE AT A GLANCE ================= */}
      <section className="bg-gradient-to-b from-[#0E1E2A] to-[#0B1723] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-12 md:py-28"
        >
          {/* Section title */}
          <motion.h3
            variants={fadeUp}
            className="text-xl md:text-2xl font-extrabold mb-4 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Governance at a Glance
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[14.5px] text-[#B8C7D6] max-w-2xl mb-10 md:mb-20 leading-relaxed"
          >
            Key governance indicators reflecting agricultural investment,
            farmer welfare initiatives, and administrative responsibility.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <StatCard icon={IndianRupee} label="Agriculture Budget" value="₹43,402 Cr" />
            <StatCard icon={Users} label="Farmers Benefited" value="46.85 Lakh" />
            <StatCard icon={IndianRupee} label="Income Support" value="₹20,000 / year" />
            <StatCard icon={Landmark} label="Major Portfolios" value="6" />
            <StatCard icon={Users} label="Elected MLA" value="6 Times" />
            <StatCard icon={Landmark} label="Cabinet Minister" value="Srikakulam District" />
          </div>
        </motion.div>
      </section>


      {/* ================= PUBLIC ENGAGEMENT ================= */}
      <section className="relative bg-gradient-to-b from-white to-[#F7FAFC]">
        {/* soft top divider */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E6D19C] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-14 md:pt-28">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-2xl font-extrabold text-[#0E1E2A] mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Public Engagement & Field Outreach
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-gray-600 max-w-2xl"
          >
            Direct interaction with farmers, communities, and stakeholders across
            Andhra Pradesh to ensure inclusive and responsive governance.
          </motion.p>
        </div>

        {/* edge fade */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7FAFC] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7FAFC] to-transparent" /> */}

        <HomeMarquee />
      </section>




      {/* ================= FLAGSHIP PROGRAMS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-24" style={{ fontFamily: "Poppins, sans-serif" }}>
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-10 md:mb-20 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-4">
            {/* refined authority line */}
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#C9A24D] to-[#E6D19C]" />

            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0E1E2A]">
              Flagship Programs
            </h2>
          </div>

          <p className="text-[15.5px] text-[#5A6B7A] leading-relaxed">
            Government initiatives focused on farmer welfare, scientific agriculture,
            allied sectors, and sustainable livelihoods.
          </p>
        </motion.header>

        <motion.div variants={stagger} initial="hidden" whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
        >
          <Program icon={Sprout} title="Polam Pilustundi" desc="Direct outreach bringing scientists and officials to farmers’ fields." />
          <Program icon={IndianRupee} title="Annadata Sukhibhava" desc="₹20,000 annual income support through DBT." />
          <Program icon={Leaf} title="Soil Health Mission" desc="4.3 lakh soil tests with scientific recommendations." />
          <Program icon={Fish} title="Fisheries & Aquaculture Support" desc="Protection of fish ponds, diesel subsidy, and power support." />
          <Program icon={Droplet} title="Drip Irrigation Expansion" desc="3 lakh hectare target with up to 55% subsidy." />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mt-16"
        >
          <a
            href="/programs"
            className="
      group
      inline-flex items-center gap-2
      text-[14px] font-semibold tracking-wide
      text-[#0E1E2A]
      relative
    "
          >
            <span className="relative">
              View all programs
              {/* underline accent */}
              <span
                className="
          absolute left-0 -bottom-1 h-[2px] w-full
          bg-gradient-to-r from-[#C9A24D] to-[#E6D19C]
          scale-x-0 group-hover:scale-x-100
          origin-left
          transition-transform duration-300
        "
              />
            </span>

            <ExternalLink
              size={16}
              className="
        text-[#C9A24D]
        group-hover:translate-x-[2px]
        transition-transform duration-300
      "
            />
          </a>
        </motion.div>

      </section>


      {/* ministry meggage */}
      <section className="bg-gradient-to-b from-white to-[#F7FAFC]" style={{ fontFamily: "Poppins, sans-serif" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-6  py-16 md:py-24"
        >
          <h3 className="text-2xl font-extrabold mb-6 md:mb-12 text-[#0E1E2A]">
            Minister’s Message
          </h3>

          <div className="relative pl-10">
            {/* authority marker */}
            <div className="absolute left-0 top-1 h-10 w-[3px] bg-gradient-to-b from-[#C9A24D] to-transparent" />

            <div className="space-y-6 text-[16px] leading-[1.9] text-[#445566]">
              <p>
                Agriculture sustains more than 60% of Andhra Pradesh’s population and
                contributes nearly 35% to the State’s GDP.
              </p>
              <p>
                Through direct outreach, scientific farming practices, and transparent
                governance, we are committed to strengthening rural livelihoods.
              </p>
            </div>
          </div>

          <p className="mt-14 font-semibold tracking-wide text-[#0E1E2A]">
            — K. Atchannaidu
            <br />
            <span className="text-sm text-gray-600">
              Cabinet Minister, Government of Andhra Pradesh
            </span>
          </p>
        </motion.div>
      </section>




      {/* ================= PUBLIC SUPPORT (PREMIUM) ================= */}
      <section
        className="bg-gradient-to-b from-[#F6F9FC] to-white"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-10 md:py-24"
        >

          {/* Heading */}
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-extrabold mb-4 text-[#0B1F33]"
          >
            Farmer & Public Support
          </motion.h3>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-[15.5px] text-[#5A6B7A] max-w-2xl mb-20 leading-relaxed"
          >
            Dedicated channels ensuring timely assistance, transparent access to
            government schemes, and direct constituency-level support.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-14">
            <SupportCard
              title="Farmer Helpline"
              value="155251"
              highlight
            />
            <SupportCard
              title="Scheme Portal"
              value="annadathasukhibhava.ap.gov.in"
            />
            <SupportCard
              title="Constituency Office"
              value="Tekkali, Srikakulam District"
            />
          </div>

        </motion.div>
      </section>


    </main>
  );
}

/* ----------------------------------
   COMPONENTS
----------------------------------- */

function SupportCard({ title, value, highlight }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        relative
        rounded-2xl
        px-9 py-12
        bg-gradient-to-b from-white to-[#F7FAFD]
        border border-[#E6EDF3]
        shadow-[0_18px_40px_-28px_rgba(14,30,42,0.35)]
        hover:-translate-y-[2px]
        transition-all duration-500
      "
    >
      {/* left authority line */}
      <div
        className={`
          absolute left-0 top-6 bottom-6 w-[3px]
         bg-[#C9A24D]
        `}
      />

      {/* top micro divider */}
      <div className="mb-6 h-[1px] w-10 bg-[#C9A24D]/60" />

      {/* title */}
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7C8C] mb-3">
        {title}
      </p>

      {/* value */}
      <p
        className="
         text-[14px] md:text-[16px] font-semibold leading-snug break-words
          text-[#0E1E2A]
        "
      >
        {value}
      </p>
    </motion.div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        relative
        rounded-2xl
        px-7 py-8
        bg-gradient-to-b from-[#13283A] to-[#0E1E2A]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_60px_-30px_rgba(0,0,0,0.8)]
        hover:-translate-y-[2px]
        transition-all duration-300
      "
    >
      {/* top accent */}
      <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

      <Icon className="mx-auto mb-4 text-[#C9A24D] opacity-80" size={22} />

      <p className="text-base text-center md:text-[20px] font-extrabold tracking-tight text-white">
        <AnimatedNumber value={value} />
      </p>

      <p className="text-[12px] text-center uppercase tracking-wider text-[#9FB3C8] mt-2">
        {label}
      </p>
    </motion.div>
  );
}






function Program({ icon: Icon, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        relative
        rounded-3xl
        p-9
        bg-white
        shadow-[0_40px_80px_-45px_rgba(14,30,42,0.45)]
        hover:-translate-y-[5px]
        transition-all duration-300
      "
    >
      {/* top accent */}
      <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

      <div className="inline-flex p-4 rounded-xl mb-6 bg-[#F8FAFC] border border-[#E3E9EF]">
        <Icon className="text-[#C9A24D]" size={22} />
      </div>

      <h4 className="font-semibold text-[17px] mb-3 text-[#0E1E2A]">
        {title}
      </h4>

      <p className="text-[14px] leading-relaxed text-[#5F6F7E]">
        {desc}
      </p>
    </motion.div>
  );
}


function Support({ title, value }) {
  return (
    <motion.div variants={fadeUp}
      className="rounded-2xl p-9
        bg-gradient-to-br from-white to-[#F4F8FB]
        shadow-[0_30px_60px_-35px_rgba(14,30,42,0.35)]"
    >
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="font-bold tracking-wide">{value}</p>
    </motion.div>
  );
}
