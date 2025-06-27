import { FaCheck } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const Achievements = () => {
  const { colors } = useTheme();

  return (
    <section id="achievements" className="px-4 md:px-12 lg:px-24 py-16 max-w-screen-xl mx-auto">
      <h2 className={`text-2xl font-bold ${colors.text} mb-8`}>Achievements</h2>
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
    </section>
  );
};

export default Achievements;