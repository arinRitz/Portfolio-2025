'use client';

import { useState, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowUp, FaCheck } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import dev12 from "../../assets/dev12.png";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 400);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const colors = {
    primary: darkMode ? "bg-[#0F172A]" : "bg-[#F8FAFC]",
    secondary: darkMode ? "bg-[#1E293B]" : "bg-[#F1F5F9]",
    text: darkMode ? "text-gray-300" : "text-gray-700",
    accent: darkMode ? "text-[#7DD3FC]" : "text-[#0369A1]",
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${colors.primary}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b ${darkMode ? 'border-gray-800/30' : 'border-gray-200/30'}`}
        style={{ backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)' }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className={`text-xl font-bold ${colors.accent}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTop();
              }}
            >
              {'</0xAhsanRaza>'}
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['projects', 'skills', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleLinkClick(e, section)}
                  className={`${colors.text} hover:text-[#7DD3FC] transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
            <Button
              onClick={() => setDarkMode(!darkMode)}
              size="icon"
              variant="ghost"
              aria-label="Toggle dark mode"
              className="text-gray-400 hover:bg-gray-700/20"
            >
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>
      <div className="h-16" />

      {/* Scroll to Top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollTop}
          size="icon"
          aria-label="Scroll to top"
          className={`rounded-full p-4 ${colors.accent} bg-opacity-20 hover:bg-opacity-30`}
        >
          <FaArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-dashed border-[#7DD3FC]"
          >
            <Image
              src={dev12}
              alt="Ahsan Raza's developer avatar"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-4 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className={`text-3xl md:text-5xl font-bold ${colors.text}`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
            Hi, I&rsquo;m Ahsan

            </motion.h1>

            <motion.p
              className={`text-lg md:text-xl ${colors.text} leading-relaxed`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              I develop Web Applications,<br />
              Integrate LLMs into web,<br />
              and Learn CyberSecurity<br />
              <span className={`font-medium ${colors.accent}`}>Aim to develop something that worths</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Button className="gap-2" variant="secondary">
                <FaFileDownload className="w-4 h-4" />
                Resume
              </Button>
              <Button variant="secondary" size="icon" aria-label="GitHub">
                <FaGithub className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* Sections */}
      {[
        {
          id: "projects",
          title: "Recent Work",
          content: (
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "AI Legal Assistant",
                  description: "AI-powered legal consultation platform with secure authentication and real-time generative AI responses.",
                  tech: ["Next.js", "Google AI", "MongoDB", "OAuth"],
                  link: "https://legal-aid-assistant.vercel.app",
                },
                {
                  title: "Adalynn AI Chatbot",
                  description: "Offline-capable AI assistant with speech recognition and multi-threaded processing for seamless interactions.",
                  tech: ["Python", "Vosk", "Generative AI", "Tkinter"],
                },
              ].map(({ title, description, tech, link }, index) => (
                <Card key={index} className={`${colors.secondary} border-0`}>
                  <CardHeader>
                    <CardTitle className={colors.text}>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`${colors.text} mb-4`}>{description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-full text-sm ${colors.accent} bg-opacity-20`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {link && (
                      <Button variant="secondary" onClick={() => window.open(link, "_blank")}>
                        Live Demo
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ),
        },
        {
          id: "skills",
          title: "What I Work With",
          content: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "Next.js","Django (learning..)","Python", "MongoDB", "LLMs", "OAuth", "REST", "Networking"].map((skill) => (
                <div key={skill} className={`p-3 text-center rounded-lg ${colors.secondary}`}>
                  <span className={`text-base ${colors.text}`}>{skill}</span>
                </div>
              ))}
            </div>
          ),
        },
        {
          id: "certifications",
          title: "Certifications",
          content: (
            <div className="grid gap-6 md:grid-cols-2">
              {[
                 { title: "VU-ITU-DTC-Cyber Threat Management", org: "Cisco Network Academy", date: "May 2025" }, 
                { title: "Cybersecurity Essentials", org: "Cisco Network Academy", date: "Jan 2024" },
                { title: "Technical Domain", org: "National Freelance Training Program", date: "Jan 2023" },
                { title: "Web Engineering Bootcamp", org: "Sukkur IBA IET", date: "Aug 2022" },
              ].map((cert, i) => (
                <Card key={i} className={`${colors.secondary} border-0`}>
                  <CardContent className="p-6">
                    <h3 className={`text-lg font-semibold ${colors.accent} mb-2`}>{cert.title}</h3>
                    <p className={`${colors.text} mb-2`}>{cert.org}</p>
                    <p className={`text-sm ${colors.text} opacity-75`}>Completed: {cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ),
        },
        {
          id: "achievements",
          title: "Achievements",
          content: (
            <div className="space-y-4">
              {[
                "Led team of 2 to deliver AI Legal Assistant on schedule",
                "Improved AI response accuracy by 40% through API optimization",
                "Reduced UI lag by 30% with multi-threading implementation",
                "Integrated Google AI in 2+ production projects",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <FaCheck className={`mt-1 ${colors.accent}`} />
                  <p className={colors.text}>{item}</p>
                </div>
              ))}
            </div>
          ),
        },
      ].map((section) => (
        <section key={section.id} id={section.id} className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
          <h2 className={`text-2xl font-bold ${colors.text} mb-8`}>{section.title}</h2>
          {section.content}
        </section>
      ))}

      {/* Testimonials */}
      <section className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
        <h2 className={`text-2xl font-bold ${colors.text} mb-8`}>Testimonials</h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className={`${colors.secondary} border-0`}>
            <CardContent className="p-6">
              <blockquote className="space-y-4">
            <p className={`text-xl italic ${colors.text}`}>
  &quot;Ahsan demonstrated exceptional problem-solving skills in our AI project,
  consistently delivering innovative solutions under tight deadlines.&quot;
</p>

                <footer className={`font-medium ${colors.accent}`}>&#8211; Project Supervisor, FYP</footer>

              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`px-4 md:px-12 lg:px-24 py-10 ${colors.secondary} mt-12`}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${colors.text} text-center md:text-left`}>
            Let&rsquo;s build something meaningful together

          </p>
          <Button className={`${colors.accent} border-current`} onClick={() => window.open('mailto:arkolachi@gmail.com')}>
            Get in Touch
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
