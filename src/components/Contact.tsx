"use client";

import React, { useState } from "react";
import { Mail, Calendar, Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", desc: "" });

  // Generate 5 business days starting tomorrow
  const getUpcomingDays = () => {
    const days = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let count = 0;
    let offset = 1;

    while (count < 5) {
      const date = new Date();
      date.setDate(date.getDate() + offset);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push({
          dayOfWeek: weekdays[date.getDay()],
          dayOfMonth: date.getDate(),
          month: months[date.getMonth()],
          fullDate: date.toDateString(),
        });
        count++;
      }
      offset++;
    }
    return days;
  };

  const dates = getUpcomingDays();
  const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || selectedDate === null || !selectedTime) return;
    
    // Simulate booking email submission log
    console.log(`Routing booking request for ${formData.name} to jayantwebaisystems@gmail.com`);
    
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Get Started
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Select a convenient slot below to schedule a free 15-minute operational systems audit and project consultation.
          </p>
        </div>

        {/* Pre-Qualification Banner / Fit Check (Inspired by fiveonline.in) */}
        <div className="glass-card rounded-[28px] border border-border-custom p-6 md:p-8 mb-10 flex flex-col md:flex-row gap-8 items-stretch select-none">
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <h4 className="font-serif text-lg font-bold text-text-base flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Best Fit If You Are:
            </h4>
            <ul className="text-xs md:text-sm text-text-muted space-y-2.5 list-disc pl-5">
              <li>Running or launching a serious business, portal, or startup in India or globally.</li>
              <li>Focused on measurable customer growth, conversion, and business outcomes.</li>
              <li>Ready to invest in high-performance web and automation infrastructure.</li>
            </ul>
          </div>
          
          <div className="hidden md:block w-px bg-border-custom" />

          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <h4 className="font-serif text-lg font-bold text-text-base flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" /> Not Ideal If You Are:
            </h4>
            <ul className="text-xs md:text-sm text-text-muted space-y-2.5 list-disc pl-5">
              <li>Looking for ₹5,000 generic templates or quick copies without custom scopes.</li>
              <li>Unwilling to collaborate directly or define clear metrics for your operations.</li>
              <li>Rushing to launch without a strategic plan for lead generation.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Trust */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 border border-border-custom flex items-start gap-4">
              <Mail className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">Email directly</h4>
                <a
                  href="mailto:jayantwebaisystems@gmail.com"
                  className="text-xs md:text-sm text-text-muted hover:text-primary transition-colors"
                >
                  jayantwebaisystems@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border-custom flex items-start gap-4">
              <span className="text-lg shrink-0 mt-0.5">📞</span>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">Call directly</h4>
                <a
                  href="tel:+919667344125"
                  className="text-xs md:text-sm text-text-muted hover:text-primary transition-colors"
                >
                  +91 9667344125
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border-custom flex items-start gap-4">
              <span className="text-lg shrink-0 mt-0.5">📍</span>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">Office Location</h4>
                <span className="text-xs md:text-sm text-text-muted">
                  Remote (Dwarka, New Delhi)
                </span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border-custom flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-primary shrink-0 mt-0.5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">LinkedIn</h4>
                <a
                  href="https://linkedin.com/company/jayant-systems"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs md:text-sm text-text-muted hover:text-primary transition-colors"
                >
                  linkedin.com/company/jayant-systems
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border-custom text-xs text-text-muted leading-relaxed space-y-3">
              <div>
                <p className="font-semibold text-text-base mb-1">⏱️ Response Time:</p>
                <p>Usually within 12 Hours (Monday–Saturday).</p>
              </div>
              <div className="border-t border-border-custom/30 pt-2.5">
                <p className="font-semibold text-text-base mb-1">📅 Business Hours:</p>
                <p>Monday – Saturday<br />7:00 AM – 9:00 PM IST</p>
              </div>
              <div className="border-t border-border-custom/30 pt-2.5">
                <p className="font-semibold text-text-base mb-1">What to expect:</p>
                <ul className="list-disc pl-4 space-y-1 mt-1">
                  <li>15 minutes total over Google Meet.</li>
                  <li>We analyze your current landing page or manual business flows.</li>
                  <li>You walk away with an actionable execution proposal.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Calendar Scheduler */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-6 md:p-8 border border-border-custom shadow-md min-h-[460px]">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="scheduler-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Step 1: Select Date */}
                  <div>
                    <label className="font-mono text-[10px] tracking-wider uppercase text-text-muted mb-3.5 block">
                      1. Select a Date
                    </label>
                    <div className="grid grid-cols-5 gap-2 md:gap-3">
                      {dates.map((date, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setSelectedDate(i);
                            setSelectedTime(null);
                          }}
                          className={`flex flex-col items-center justify-center p-2.5 md:p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                            selectedDate === i
                              ? "bg-primary border-primary text-white shadow-sm"
                              : "border-border-custom hover:border-text-muted/40 text-text-muted hover:text-text-base"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-mono tracking-wider">{date.dayOfWeek}</span>
                          <span className="text-lg md:text-xl font-bold font-serif leading-tight mt-0.5">
                            {date.dayOfMonth}
                          </span>
                          <span className="text-[9px] uppercase tracking-wide opacity-80">{date.month}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  {selectedDate !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="animate-in fade-in slide-in-from-top-2 duration-300"
                    >
                      <label className="font-mono text-[10px] tracking-wider uppercase text-text-muted mb-3 block">
                        2. Select a Time (IST)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-4 rounded-xl border text-center text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                              selectedTime === time
                                ? "bg-primary border-primary text-white shadow-sm"
                                : "border-border-custom hover:border-text-muted/40 text-text-muted hover:text-text-base"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Fill Form & Submit */}
                  {selectedDate !== null && selectedTime && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 pt-2 border-t border-border-custom/50 animate-in fade-in slide-in-from-top-2 duration-300"
                    >
                      <label className="font-mono text-[10px] tracking-wider uppercase text-text-muted block">
                        3. Share Your Context
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-text-base"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Business Email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-text-base"
                        />
                      </div>
                      <textarea
                        name="desc"
                        rows={3}
                        placeholder="Briefly describe your website or AI requirements"
                        value={formData.desc}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-text-base"
                      />

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover py-3.5 text-sm font-semibold text-white shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer"
                      >
                        Confirm Strategy Booking ({dates[selectedDate].dayOfMonth} {dates[selectedDate].month} @ {selectedTime})
                      </button>
                    </motion.div>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="size-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Check className="size-6" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base">
                    Strategy Session Confirmed
                  </h3>
                  <div className="max-w-md text-text-muted text-sm space-y-2">
                    <p className="flex items-center justify-center gap-2 font-medium text-text-base">
                      <Calendar className="size-4 text-primary" /> {dates[selectedDate!].dayOfWeek}, {dates[selectedDate!].dayOfMonth} {dates[selectedDate!].month}
                    </p>
                    <p className="flex items-center justify-center gap-2 font-medium text-text-base">
                      <Clock className="size-4 text-primary" /> {selectedTime} (IST)
                    </p>
                    <p className="pt-2">
                      An invitation with Google Meet coordinates has been dispatched to <span className="text-text-base font-semibold">{formData.email}</span>. See you there!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
