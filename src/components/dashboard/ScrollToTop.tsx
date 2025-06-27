import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const ScrollToTop = ({ showScroll }: { showScroll: boolean }) => {
  const { colors } = useTheme();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showScroll ? 1 : 0 }}
      className="fixed bottom-16 md:bottom-12 right-6 z-50"
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
  );
};

export default ScrollToTop;