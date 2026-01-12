import {Navbar} from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeProvider";

export default function ContactPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="pt-20">
        <Contact isFullPage={true} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
