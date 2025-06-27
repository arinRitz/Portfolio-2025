"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

import legal from "@/assets/ProjectImages/legal.png"
import adalynn from "@/assets/ProjectImages/adalynn.png"

const projects = [
  {
    title: "AI-Powered Legal Aid Assistant",
    description:
      "AI-powered legal consultation platform with secure authentication and real-time generative AI responses.",
    tech: ["Next.js", "Google Generative AI", "MongoDB", "OAuth","Framer Motion"],
    image: legal,
    legallink: "https://legal-aid-assistant-by-ahsan-and-shafiullah-bn7c.vercel.app/",
  },

  {
    title: "Adalynn AI Chatbot",
    description:
      "Offline-capable AI assistant with speech recognition and multi-threaded processing for seamless interactions.",
    tech: ["Python", "Vosk", "Google Generative AI", "Tkinter"],
    image: adalynn,
  },
];

const Projects = () => {
  const { colors } = useTheme();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <h2 className={`text-2xl font-bold ${colors.text} mb-8`}>Recent Work</h2>

      <div className="relative overflow-hidden rounded-xl">
        {/* Slider track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map(({ title, description, tech, image, legallink }, index) => (
            <div key={index} className={`min-w-full flex flex-col md:flex-row items-center gap-8 p-6 ${colors.secondary}`}>
              <div className="w-full md:w-1/2">
                <Image src={image} alt={title} width={600} height={400} className="rounded-xl border" />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className={`text-2xl font-bold ${colors.text}`}>{title}</h3>
                <p className={`${colors.text}`}>{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className={`px-3 py-1 rounded-full text-sm ${colors.accent} bg-opacity-20`}>
                      {t}
                    </span>
                  ))}
                </div>
                {legallink && (
                  <Button variant="secondary" className="mt-4" onClick={() => window.open(legallink, "_blank")}>
                    Live Demo →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-700 z-10"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-700 z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
