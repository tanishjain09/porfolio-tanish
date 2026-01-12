import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import {Project} from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <Header isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} isHomePage={true} />
        <Project isHomePage={true} />
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}