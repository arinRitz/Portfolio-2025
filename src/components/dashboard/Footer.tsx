import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { colors, darkMode } = useTheme();

  return (
    <footer className={`py-4 text-center text-sm ${colors.text} border-t ${
      darkMode ? "border-gray-800" : "border-gray-200"
    }`}>
      &copy; {new Date().getFullYear()} Ahsan Raza. All rights reserved.
    </footer>
  );
};

export default Footer;