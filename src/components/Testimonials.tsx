"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "Jayant and his team delivered a brilliant AI solution that exceeded our expectations. Highly professional, communicative, and talented.",
      author: "Dr. Vivek Sharma",
      role: "Founder, Healthkinator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      stars: 5,
      text: "The automation they built for us saved hundreds of hours every month. The impact on our productivity has been incredible.",
      author: "Priya Mehta",
      role: "CEO, WeAct",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      stars: 5,
      text: "Clean code, on-time delivery, and excellent support. Jayant Web & AI Systems is now our go-to tech partner.",
      author: "Rohit Verma",
      role: "CTO, KhelClan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
          CLIENTS LOVE WORKING WITH US
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-text-muted italic leading-relaxed mb-6">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 border-t border-border-custom/30 pt-4">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="size-10 rounded-full border border-border-custom object-cover"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xs md:text-sm font-bold text-text-base leading-none">
                  {rev.author}
                </span>
                <span className="text-[10px] text-text-muted mt-1 uppercase font-semibold tracking-wider">
                  {rev.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
