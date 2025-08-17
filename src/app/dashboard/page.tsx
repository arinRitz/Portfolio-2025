'use client';
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/dashboard/Navbar";
import Hero from "@/components/dashboard/Hero";
import Projects from "@/components/dashboard/Projects";
import Skills from "@/components/dashboard/Skills";
import Certifications from "@/components/dashboard/Certifications";
import Achievements from "@/components/dashboard/Achievements";
import Testimonials from "@/components/dashboard/Testimonials";
import Footer from "@/components/dashboard/Footer";
import ScrollToTop from "@/components/dashboard/ScrollToTop";


const Dashboard = () => {
  const { colors } = useTheme();
  const [showScroll] = useState(false);


  

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${colors.primary}`}>
      <Navbar />
      
      <ScrollToTop showScroll={showScroll} />
      
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      
  
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default function DashboardPage() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}