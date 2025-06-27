import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext";

const Certifications = () => {
  const { colors } = useTheme();

  return (
    <section id="certifications" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <h2 className={`text-2xl font-bold ${colors.text} mb-8`}>Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
            { title: " Google Prompting Essentials", org: "Google via Coursera", date: "Jun 2025" }, 
          { title: "VU-ITU-DTC-Cyber Threat Management", org: "Virtual University of Pakistan via Cisco Network Academy", date: "Jun 2025" }, 
          { title: "Cybersecurity Essentials", org: "Cisco Network Academy", date: "Mar 2025" },
          {title: "Game Development", org: " National Vocational and Technical Training Commission(NAVTTC)", date: "Sep 2024" }, 
          { title: "Web Engineering Bootcamp", org: "Sukkur IBA IET", date: "Jun 2024" },
         { title: "Technical Domain", org: "National Freelance Training Program", date: "Mar 2024" },
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
    </section>
  );
};

export default Certifications;