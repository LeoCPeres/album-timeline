// components/TextReveal.tsx
"use client";
import { motion } from "framer-motion";

export default function TextReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Garante que aparece só quando 30% do elemento está visível
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
