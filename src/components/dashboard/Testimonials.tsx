import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/ThemeContext";

const Testimonials = () => {
  const { colors } = useTheme();

  return (
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
  );
};

export default Testimonials;