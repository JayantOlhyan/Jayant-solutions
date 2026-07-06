"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareCode } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/919999999999" // Fallback number to be updated by Jayant
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl active:scale-95 hover:scale-105 transition-all duration-300 group"
    >
      {/* Pulse effect */}
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none" />
      
      {/* WhatsApp Message icon */}
      <MessageSquareCode className="size-6 transition-transform group-hover:rotate-6" />
    </a>
  );
}
