import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode, colors } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b ${
        darkMode ? 'border-gray-800/30' : 'border-gray-200/30'
      }`}
      style={{ backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)' }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className={`text-xl font-bold ${colors.accent}`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Ahsan
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
            onClick={toggleDarkMode}
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
  );
};

export default Navbar;