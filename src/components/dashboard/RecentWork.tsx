"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const projects = [
  {
    title: "AI Legal Assistant",
    description: "AI-powered legal consultation platform with secure authentication and real-time generative AI responses.",
    tech: ["Next.js", "Google AI", "MongoDB", "OAuth"],
    image: "@/assets/dev12.png",
    link: "https://legal-aid-assistant.vercel.app",
  },
  {
    title: "Adalynn AI Chatbot",
    description: "Offline-capable AI assistant with speech recognition and multi-threaded processing for seamless interactions.",
    tech: ["Python", "Vosk", "Generative AI", "Tkinter"],
    image: "@/assets/dev12.png",
  },
];

export default function RecentWork() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { title, description, tech, image, link } = projects[current];

  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-xl font-semibold text-sky-600 mb-2">Most Recent Work</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto bg-blue-50 p-6 rounded-2xl shadow-md transition-all duration-700">
        <div className="w-full md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-xl border"
          />
        </div>

        <div className="text-left md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="bg-sky-200 text-sky-900 text-sm px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          {link && (
            <Button onClick={() => window.open(link, "_blank")} className="mt-2">
              Demo →
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
