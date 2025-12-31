"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* authority accent */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px]
        bg-gradient-to-b from-[#C9A24D] to-transparent"
      />

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-8 py-6 flex items-center justify-between
          focus:outline-none"
      >
        <span className="text-[15px] md:text-[16px] font-semibold text-[#0E1E2A] pr-6">
          {q}
        </span>

        <span
          className={`text-[#C9A24D] text-xl transition-transform duration-300
            ${open ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6 text-[14.5px] text-[#445566] leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQ;
