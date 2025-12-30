"use client";

import { motion } from "framer-motion";

const imagesRow1 = [
  "/assets/image_3.png",
  "/assets/image_6.png",
  "/assets/image_5.png",
  "/assets/image_12.png",
];

const imagesRow2 = [
  "/assets/image_10.png",
  "/assets/image_8.png",
  "/assets/image_29.png",
  "/assets/image_14.png",
];

export default function HomeMarquee() {
  return (
    <section className="bg-white py-16 overflow-hidden border-y">
      <div className="space-y-8">

        {/* ROW 1 – Right to Left */}
        <MarqueeRow images={imagesRow1} direction="left" />

        {/* ROW 2 – Left to Right */}
        <MarqueeRow images={imagesRow2} direction="right" />

      </div>
    </section>
  );
}

function MarqueeRow({ images, direction }) {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-[320px] h-[200px] flex-shrink-0
                       overflow-hidden border bg-gray-100"
          >
            <img
              src={src}
              alt="Public engagement"
              className="w-full h-full object-cover
                        
                         transition duration-700"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
