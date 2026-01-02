"use client";

import { motion } from "framer-motion";

const imagesRow1 = [
  "/assets/image_3.png",
   "/assets/image_28.jpeg", 
  "/assets/image_6.png",
  "/assets/image_5.png",
  "/assets/image_27.jpeg",
  "/assets/image_12.png",
   "/assets/image_15.png", "/assets/image_23.jpg", 
];

const imagesRow2 = [
  "/assets/image_11.png",
  "/assets/image_13.png",
  "/assets/image_7.png",
   "/assets/image_29.jpeg",
  "/assets/image_9.png",
  "/assets/image_22.jpg",
];

export default function HomeMarquee() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">

      {/* soft containment fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#F6F9FC] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#F6F9FC] to-transparent z-10" />

      <div className="space-y-6 md:space-y-14">
        <MarqueeRow images={imagesRow1} direction="left" />
        <MarqueeRow images={imagesRow2} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({ images, direction }) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6 md:gap-10 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="
              relative
              w-[240px] h-[120px]  md:w-[340px] md:h-[220px]
              overflow-hidden rounded-2xl
              bg-white
              shadow-[0_25px_50px_-30px_rgba(14,30,42,0.35)]
            "
          >
            {/* image */}
            <img
              src={src}
              alt="Public engagement and field outreach"
              className="
                w-full h-full object-cover
                scale-[1.02]
                transition-transform duration-[1200ms]
                hover:scale-[1.06]
              "
            />

            {/* documentary overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2A]/45 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
