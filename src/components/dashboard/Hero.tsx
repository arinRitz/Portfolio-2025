import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import dev12 from "@/assets/dev-img.jpeg";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Hero = () => {
  const { colors } = useTheme();

  return (
    <section className="px-4 md:px-12 lg:px-24 pt-20 pb-16 max-w-screen-xl mx-auto ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col md:flex-row items-center gap-10"
      >
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
            alt="Developer avatar"
     fill
  sizes="192px" // or "192px" for md:w-48
  className="object-cover"
  priority
  quality={80}
          />
        </motion.div>

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
          >
            Hi, I&rsquo;m Ahsan
          </motion.h1>

          <motion.p
            className={`text-lg md:text-xl ${colors.text} leading-relaxed`}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            I develop Web Applications,<br />
            Integrate LLMs into web,<br />
            and Learn CyberSecurity<br />
            <span className={`font-medium ${colors.accent}`}>Aim to develop something that worths</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
           <Button asChild variant="secondary" className="gap-2">
      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
        <FaFileDownload className="w-4 h-4" />
        Resume
      </Link>
    </Button>
            <Button variant="secondary" size="icon" aria-label="GitHub">
              <Link href="https://github.com/arinRitz"  target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button variant="secondary" size="icon" aria-label="LinkedIn">
            <Link href="https://www.linkedin.com/in/ahsan-raza8hbb/"  target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-4 h-4" />
               </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;