import { useTheme } from "@/context/ThemeContext";

const Skills = () => {
  const { colors } = useTheme();

  return (
    <section id="skills" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <h2 className={`text-2xl font-bold ${colors.text} mb-8`}>What I Work With</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["React", "Next.js", "Django (learning..)", "Python", "MongoDB", "LLMs", "OAuth", "REST","Packet tracer","Networking"].map((skill) => (
          <div key={skill} className={`p-3 text-center rounded-lg ${colors.secondary}`}>
            <span className={`text-base ${colors.text}`}>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;