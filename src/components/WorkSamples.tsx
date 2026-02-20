"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-opacity duration-300 opacity-90 hover:opacity-100"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const WorkSamples: React.FC = () => {
  const projects = [
    {
      title: "Triangle Connection",
      description: "An APP that helps international students improve their self-confidence through AI simulator.",
      imageUrl: "/triangle-connection.png",
      link: "https://hcde-portfolio.webflow.io/",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex justify-center items-center max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="w-full max-w-sm">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;
