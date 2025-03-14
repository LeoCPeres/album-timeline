"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDownIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#F41870]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <ChevronDown size={32} className="mt-1" />
    </motion.div>
  );
}
