"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    agreement: false
  });

  const projectTypes = [
    "AI Development",
    "Website Development",
    "Mobile App Development",
    "Custom Software",
    "Business Automation",
    "UI/UX Design",
    "Cloud Solutions",
    "Consultation",
    "Other"
  ];

  const budgets = [
    "Under ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000 – ₹5,00,000",
    "₹5,00,000+"
  ];

  const timelines = [
    "ASAP",
    "1 Month",
    "2–3 Months",
    "3–6 Months",
    "Flexible"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.agreement) {
      alert("Please fill in all required fields and accept the agreement.");
      return;
    }

    console.log("Routing Project Inquiry to jayantwebaisystems@gmail.com:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="hog-card rounded-[32px] p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[480px]">
        <div className="size-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
          <CheckCircle2 className="size-10 text-emerald-500" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-3">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-xs md:text-sm text-text-muted max-w-sm mb-6 leading-relaxed">
          Thank you for reaching out. We have received your project details and will review them shortly. You will receive a response within 24 hours.
        </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              projectType: "",
              budget: "",
              timeline: "",
              description: "",
              agreement: false
            });
            setSubmitted(false);
          }}
          className="hog-btn px-6 py-2.5 text-xs rounded-xl"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="hog-card rounded-[32px] p-6 md:p-8 text-left">
      <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-6 pb-3 border-b border-border-custom/30">
        Start Your Project
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jayant Olhyan"
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
            />
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Jayant Web & AI Systems"
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="hello@example.com"
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
            />
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 96673 44125"
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
            />
          </div>
        </div>

        {/* Project Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Project Type *
            </label>
            <select
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-3 py-2.5 text-xs outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Option</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Budget Range *
            </label>
            <select
              name="budget"
              required
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-3 py-2.5 text-xs outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Budget</option>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
              Timeline *
            </label>
            <select
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-3 py-2.5 text-xs outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description Textarea */}
        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">
            Project Description *
          </label>
          <textarea
            name="description"
            required
            rows={5}
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Tell us about your project, goals, features, and any specific requirements..."
            className="w-full bg-background-base border border-border-custom hover:border-primary/50 focus:border-primary rounded-xl px-4 py-2.5 text-xs outline-none transition-colors resize-none"
          />
        </div>

        {/* Privacy Agreement Checkbox */}
        <div className="flex items-start gap-2.5">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            required
            checked={formData.agreement}
            onChange={handleInputChange}
            className="mt-0.5 rounded border-border-custom text-primary focus:ring-primary size-4 cursor-pointer"
          />
          <label htmlFor="agreement" className="text-[11px] text-text-muted leading-tight cursor-pointer select-none">
            I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>.
          </label>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white font-mono text-xs font-bold py-3.5 shadow-md transition-all duration-200"
        >
          Send Project Inquiry <ArrowRight className="size-3.5" />
        </button>
      </form>
    </div>
  );
}
