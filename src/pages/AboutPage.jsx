import {Navbar} from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeProvider"; // adjust path

function AboutPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="pt-20">
        <About isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default AboutPage;
