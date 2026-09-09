"use client";

import React, { useState } from "react";
import { Brain, Code, Rocket, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function NetworkDiagram() {
  const [activeNode, setActiveNode] = useState<string>("ai");

  const nodes = [
    {
      id: "ai",
      title: "AI Solutions",
      icon: <Brain className="size-5 text-primary" />,
      tag: "Gemini • OpenAI • Claude",
      telemetry: "Lat: 118ms",
      x: -125,
      y: -105,
      pathD: "M 250 250 Q 180 180 135 155",
    },
    {
      id: "dev",
      title: "Development",
      icon: <Code className="size-5 text-primary" />,
      tag: "Next.js • React • FastAPI",
      telemetry: "Perf: 100%",
      x: 125,
      y: -105,
      pathD: "M 250 250 Q 320 180 365 155",
    },
    {
      id: "auto",
      title: "Automation",
      icon: <Rocket className="size-5 text-primary" />,
      tag: "WhatsApp • CRM • n8n",
      telemetry: "Sync: 24/7",
      x: -125,
      y: 105,
      pathD: "M 250 250 Q 180 320 135 345",
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: <Cloud className="size-5 text-primary" />,
      tag: "Supabase • Vercel • Cloudflare",
      telemetry: "Up: 99.9%",
      x: 125,
      y: 105,
      pathD: "M 250 250 Q 320 320 365 345",
    },
  ];

  return (
    <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center p-4 sm:p-6 select-none scale-[0.8] min-[420px]:scale-90 md:scale-100 origin-center">
      
      {/* Outer Ambient Glow Ring */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 blur-3xl pointer-events-none" />

      {/* Decorative Radar Circle Outlines */}
      <div className="absolute size-[420px] rounded-full border border-border-custom/30 pointer-events-none" />
      <div className="absolute size-[280px] rounded-full border border-dashed border-border-custom/40 pointer-events-none animate-[spin_120s_linear_infinite]" />

      {/* SVG Circuit & Data Conduit Bus */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="bus-glow-active" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="bus-glow-idle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Curved Bus Lines */}
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <g key={`path-${node.id}`}>
              {/* Background trace line */}
              <path
                d={node.pathD}
                fill="none"
                stroke={isSelected ? "url(#bus-glow-active)" : "var(--color-border-custom)"}
                strokeWidth={isSelected ? "2.5" : "1.5"}
                strokeDasharray={isSelected ? "none" : "4,4"}
                className="transition-all duration-300"
              />

              {/* Glowing Pulse Dot running along path */}
              <motion.circle
                r={isSelected ? "4.5" : "3"}
                fill="var(--color-primary)"
                filter={isSelected ? "url(#glow-filter)" : undefined}
                animate={{
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: isSelected ? 1.8 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  offsetPath: `path('${node.pathD}')`,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Central Core Engine */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        className="relative z-20 size-32 md:size-36 rounded-3xl bg-[#0B0F19] border-2 border-primary/40 shadow-[0_0_35px_rgba(255,138,0,0.18)] flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-shadow"
      >
        {/* Orbiting Ring */}
        <div className="absolute -inset-2 rounded-[28px] border border-primary/20 pointer-events-none animate-pulse" />

        <div className="size-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-1.5 shadow-inner">
          <span className="font-sans text-2xl font-black text-primary drop-shadow-[0_2px_10px_rgba(255,138,0,0.6)]">
            J
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/80 font-bold">
            Live System
          </span>
        </div>
      </motion.div>

      {/* 4 Satellite System Nodes */}
      {nodes.map((node) => {
        const isSelected = activeNode === node.id;
        return (
          <div
            key={node.id}
            className="absolute z-30 transition-transform duration-300"
            style={{
              transform: `translate(${node.x}px, ${node.y}px)`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveNode(node.id)}
              className={`p-3.5 rounded-2xl border backdrop-blur-md cursor-pointer transition-all duration-300 min-w-[136px] flex flex-col items-center text-center shadow-lg ${
                isSelected
                  ? "bg-[#111827] text-white border-primary shadow-[0_0_20px_rgba(255,138,0,0.22)]"
                  : "bg-card-bg/95 text-text-base border-border-custom hover:border-primary/50"
              }`}
            >
              {/* Node Icon & Telemetry Chip */}
              <div className="flex items-center justify-between w-full mb-1.5">
                <div className="size-8 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center shadow-sm">
                  {node.icon}
                </div>
                <span className="font-mono text-[8px] tracking-tight font-semibold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {node.telemetry}
                </span>
              </div>

              {/* Exact Node Title (Verbatim) */}
              <span className="font-serif text-xs md:text-sm font-bold tracking-tight">
                {node.title}
              </span>

              {/* Node Tech Subtitle */}
              <span className="text-[9px] font-mono opacity-60 mt-0.5 tracking-tight truncate max-w-[120px]">
                {node.tag}
              </span>
            </motion.div>
          </div>
        );
      })}

    </div>
  );
}
