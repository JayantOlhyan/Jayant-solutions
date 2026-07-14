"use client";

import React from "react";
import { Brain, Code, Rocket, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function NetworkDiagram() {
  const nodes = [
    {
      id: "ai",
      title: "AI Solutions",
      icon: <Brain className="size-6 text-primary" />,
      className: "top-0 left-0",
      x: -120,
      y: -100,
    },
    {
      id: "dev",
      title: "Development",
      icon: <Code className="size-6 text-primary" />,
      className: "top-0 right-0",
      x: 120,
      y: -100,
    },
    {
      id: "auto",
      title: "Automation",
      icon: <Rocket className="size-6 text-primary" />,
      className: "bottom-0 left-0",
      x: -120,
      y: 100,
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: <Cloud className="size-6 text-primary" />,
      className: "bottom-0 right-0",
      x: 120,
      y: 100,
    },
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-8 select-none scale-[0.75] min-[400px]:scale-90 md:scale-100 origin-center">
      
      {/* Animated Connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Diagonal paths from center (250, 250) to node coordinates */}
        {/* Node 1: AI (130, 150) */}
        <path d="M 250 250 L 130 150" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="5,5" />
        {/* Node 2: Dev (370, 150) */}
        <path d="M 250 250 L 370 150" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="5,5" />
        {/* Node 3: Auto (130, 350) */}
        <path d="M 250 250 L 130 350" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="5,5" />
        {/* Node 4: Cloud (370, 350) */}
        <path d="M 250 250 L 370 350" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="5,5" />

        {/* Pulse dots running along lines */}
        <motion.circle
          r="4"
          fill="var(--color-primary)"
          animate={{
            cx: [250, 130],
            cy: [250, 150],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          r="4"
          fill="var(--color-primary)"
          animate={{
            cx: [250, 370],
            cy: [250, 150],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.7 }}
        />
        <motion.circle
          r="4"
          fill="var(--color-primary)"
          animate={{
            cx: [250, 130],
            cy: [250, 350],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.4 }}
        />
        <motion.circle
          r="4"
          fill="var(--color-primary)"
          animate={{
            cx: [250, 370],
            cy: [250, 350],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2.1 }}
        />
      </svg>

      {/* Central 3D Cube */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 size-32 md:size-36 rounded-3xl bg-neutral-900 border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.5)] flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(15deg) rotateY(-15deg)",
        }}
      >
        {/* Glow behind center */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full pointer-events-none" />

        <div className="size-20 bg-neutral-800 border border-white/5 rounded-2xl flex items-center justify-center shadow-inner">
          <span className="font-sans text-3xl font-black text-primary drop-shadow-[0_2px_8px_rgba(255,138,0,0.5)]">
            J
          </span>
        </div>
      </motion.div>

      {/* 4 Connected Floating Node hexagons */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="absolute z-20"
          style={{
            transform: `translate(${node.x}px, ${node.y}px)`,
          }}
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white dark:bg-[#111827] border border-border-custom shadow-md hover:shadow-lg transition-shadow min-w-[120px] text-center"
          >
            <div className="size-12 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shadow-sm">
              {node.icon}
            </div>
            <span className="font-serif text-xs md:text-sm font-bold text-text-base">
              {node.title}
            </span>
          </motion.div>
        </motion.div>
      ))}

    </div>
  );
}
