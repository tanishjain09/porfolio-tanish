import {Navbar} from "../components/Navbar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeProvider";

export default function SkillsPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="pt-20">
        <Skills isHomePage={false} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}