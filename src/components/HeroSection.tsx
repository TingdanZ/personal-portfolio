"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
      >
        TINGDAN ZHU
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
      >
        HCDE Student interested in Interaction Design and Physical Prototyping
      </motion.p>
    </section>
  );
};

export default HeroSection;
