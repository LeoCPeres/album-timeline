"use client";
import { motion } from "framer-motion";

export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="h-screen flex items-center justify-center snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
