"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Layout, FolderOpen, Inbox, FileText, MessageSquare, Shield, Settings, HelpCircle, LogOut, CheckSquare, Plus, Bell } from "lucide-react";

export default function ClientPortalPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const sidebarMenu = [
    { label: "Dashboard", icon: <Layout className="size-4" /> },
    { label: "Projects", icon: <FolderOpen className="size-4" /> },
    { label: "Requests", icon: <Inbox className="size-4" /> },
    { label: "Invoices & Payments", icon: <FileText className="size-4" /> },
    { label: "Messages", icon: <MessageSquare className="size-4" /> },
    { label: "Documents", icon: <FileText className="size-4" /> },
    { label: "Reports", icon: <FileText className="size-4" /> },
    { label: "Support", icon: <HelpCircle className="size-4" /> },
    { label: "Knowledge Base", icon: <FileText className="size-4" /> },
    { label: "Account Settings", icon: <Settings className="size-4" /> },
  ];

  const stats = [
    { label: "Active Projects", value: "3" },
    { label: "Completed Projects", value: "8" },
    { label: "Pending Requests", value: "2" },
    { label: "Unpaid Invoices", value: "1" },
  ];

  const projects = [
    { name: "TechNova Website Redesign", cat: "Web Development", status: "In Progress", progress: 65, due: "25 May, 2025", manager: "Jayant O." },
    { name: "Customer Portal Development", cat: "Web Application", status: "In Progress", progress: 40, due: "10 Jun, 2025", manager: "Ananya R." },
    { name: "Mobile App for Field Team", cat: "Mobile App Development", status: "Review", progress: 80, due: "05 Jun, 2025", manager: "Rohit M." },
    { name: "E-commerce Maintenance", cat: "Maintenance & Support", status: "Completed", progress: 100, due: "Completed", manager: "Sneha P." },
    { name: "AI Chatbot Integration", cat: "AI & Automation", status: "Planning", progress: 10, due: "15 Jun, 2025", manager: "Jayant O." },
  ];

  const quickActions = [
    { label: "Create a New Request", desc: "Need something changed or added?" },
    { label: "View All Requests", desc: "Track your requests and their status" },
    { label: "Download Documents", desc: "Access proposals, reports & more" },
    { label: "Schedule a Meeting", desc: "Book a call with our team" },
  ];

  const invoices = [
    { id: "INV-2025-015", title: "Website Redesign", price: "₹45,000", status: "Paid" },
    { id: "INV-2025-014", title: "Customer Portal", price: "₹75,000", status: "Pending" },
    { id: "INV-2025-013", title: "Mobile App Development", price: "₹60,000", status: "Paid" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen text-left flex bg-neutral-50 dark:bg-neutral-950 font-sans pb-10">
        
        {/* Left Sidebar navigation */}
        <aside className="w-64 border-r border-border-custom bg-white dark:bg-[#111827] shrink-0 p-5 hidden lg:flex flex-col justify-between">
          
          <div className="flex flex-col gap-6">
            {/* Header logo */}
            <Link href="/" className="flex items-center gap-3 text-left">
              <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold flex items-center justify-center font-serif text-lg">
                J
              </div>
              <span className="font-serif text-xs font-bold text-text-base">Client Portal</span>
            </Link>

            {/* Menu List */}
            <nav className="flex flex-col gap-1">
              {sidebarMenu.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeMenu === item.label
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted hover:text-text-base hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Need help footer and Log out */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
              <span className="text-xl">👩‍💻</span>
              <h5 className="font-serif text-xs font-bold text-text-base mt-2">Need Help?</h5>
              <p className="text-[10px] text-text-muted mt-1 leading-normal">Our support team is here to help you 24/7.</p>
              <Link
                href="/support"
                className="w-full text-center border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg py-1.5 text-[9px] font-mono font-bold rounded-lg block mt-3 text-text-base"
              >
                Contact Support
              </Link>
            </div>

            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-text-muted hover:text-red-500 hover:bg-red-500/5 transition-all"
            >
              <LogOut className="size-4" />
              <span>Log Out</span>
            </Link>
          </div>

        </aside>

        {/* Main Dashboard Panel Content */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Header row */}
          <header className="border-b border-border-custom bg-white dark:bg-[#111827] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-text-base lg:hidden">Client Portal</span>
              <h2 className="text-sm font-bold text-text-base hidden lg:block">Dashboard</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="size-8 rounded-full border border-border-custom flex items-center justify-center text-text-muted hover:text-text-base relative">
                <Bell className="size-4" />
                <span className="absolute top-1 right-1.5 size-2 rounded-full bg-primary" />
              </button>
              <div className="flex items-center gap-2 border-l border-border-custom/50 pl-4">
                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  TS
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-text-base leading-none">TechNova Solutions</span>
                  <span className="text-[9px] text-text-muted mt-0.5">Enterprise Client</span>
                </div>
              </div>
            </div>
          </header>

          {/* Inner Grid */}
          <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Content column (Dashboard metrics & Projects) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Welcome card */}
              <div className="bg-white dark:bg-[#111827] border border-border-custom rounded-3xl p-6 text-left">
                <h2 className="font-serif text-2xl font-bold text-text-base mb-1">
                  Welcome back, TechNova Solutions 👋
                </h2>
                <p className="text-xs text-text-muted">Here&apos;s what&apos;s happening with your projects today.</p>
              </div>

              {/* stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-[#111827] border border-border-custom rounded-2xl p-4 text-left">
                    <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider block mb-1">{stat.label}</span>
                    <span className="text-2xl font-serif font-black text-text-base">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Projects Table */}
              <div className="bg-white dark:bg-[#111827] border border-border-custom rounded-3xl p-6 text-left flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-border-custom/50 pb-3 mb-2">
                  <h3 className="font-serif text-base font-bold text-text-base">My Projects</h3>
                  <Link href="/portfolio" className="text-[10px] font-mono font-bold text-primary hover:underline">
                    View all projects
                  </Link>
                </div>

                <div className="overflow-x-auto w-full">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border-custom/50 text-text-muted">
                        <th className="py-2.5 font-bold text-left">Project Name</th>
                        <th className="py-2.5 font-bold text-left">Status</th>
                        <th className="py-2.5 font-bold text-left">Progress</th>
                        <th className="py-2.5 font-bold text-left">Due Date</th>
                        <th className="py-2.5 font-bold text-left">Project Manager</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-custom/30">
                      {projects.map((p, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
                          <td className="py-3 pr-4 text-left">
                            <span className="font-bold text-text-base block">{p.name}</span>
                            <span className="text-[9px] text-text-muted mt-0.5 block">{p.cat}</span>
                          </td>
                          <td className="py-3 pr-4">
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                              p.status === "Completed"
                                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                : p.status === "Review"
                                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                : "bg-primary/10 text-primary border border-primary/20"
                            }`}>
                              {p.status}
                            </span>
                          </td>
                          <td className="py-3 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden shrink-0">
                                <div className="bg-primary h-full rounded-full" style={{ width: `${p.progress}%` }} />
                              </div>
                              <span className="font-mono text-[9px] text-text-muted">{p.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 pr-4 font-mono text-[10px] text-text-muted">{p.due}</td>
                          <td className="py-3 font-mono text-[10px] text-text-base">{p.manager}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Side Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* New project CTA */}
              <div className="bg-white dark:bg-[#111827] border border-border-custom rounded-3xl p-6 text-left flex flex-col gap-4">
                <h4 className="font-serif text-base font-bold text-text-base">Have a New Project?</h4>
                <p className="text-[10px] text-text-muted leading-relaxed">Tell us about your idea and we&apos;ll turn it into reality.</p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-xs font-mono font-bold transition-all shadow-md mt-2"
                >
                  <span>Start a New Project</span>
                  <Plus className="size-4" />
                </Link>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-[#111827] border border-border-custom rounded-3xl p-6 text-left flex flex-col gap-4">
                <h4 className="font-serif text-sm font-bold text-text-base border-b border-border-custom/50 pb-2">Quick Actions</h4>
                
                <div className="flex flex-col gap-3">
                  {quickActions.map((act, i) => (
                    <Link
                      key={i}
                      href="/support"
                      className="flex items-start justify-between p-3 rounded-xl border border-border-custom/80 hover:border-primary/40 bg-neutral-50/50 dark:bg-card-bg/25 transition-all group"
                    >
                      <div className="flex flex-col text-left gap-0.5">
                        <span className="text-xs font-bold text-text-base group-hover:text-primary transition-colors leading-none">{act.label}</span>
                        <span className="text-[8px] text-text-muted leading-tight mt-0.5">{act.desc}</span>
                      </div>
                      <ArrowRight className="size-3.5 text-text-muted shrink-0 group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Account Manager */}
              <div className="bg-white dark:bg-[#111827] border border-border-custom rounded-3xl p-6 text-left flex items-start gap-3">
                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                  JO
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-text-base leading-none">Jayant Olhyan</span>
                  <span className="text-[9px] text-text-muted mt-1 leading-none">Founder & Project Lead</span>
                  <a href="mailto:jayantwebaisystems@gmail.com" className="text-[9px] text-primary mt-1.5 hover:underline">
                    jayantwebaisystems@gmail.com
                  </a>
                </div>
              </div>

              {/* Recent Invoices */}
              <div className="bg-white dark:bg-[#111827] border border-border-custom rounded-3xl p-6 text-left flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-border-custom/50 pb-2">
                  <h4 className="font-serif text-sm font-bold text-text-base">Recent Invoices</h4>
                  <Link href="/support" className="text-[9px] font-mono text-primary hover:underline">
                    View all invoices
                  </Link>
                </div>

                <div className="space-y-3">
                  {invoices.map((inv) => (
                    <div key={inv.id} className="flex justify-between items-center text-xs">
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-text-base leading-none mb-1">{inv.id}</span>
                        <span className="text-[9px] text-text-muted">{inv.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-text-base font-bold">{inv.price}</span>
                        <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          inv.status === "Paid" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                        }`}>
                          {inv.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
}
