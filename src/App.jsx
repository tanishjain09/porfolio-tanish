import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./Home";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import ScrollToTop from "./components/ScrollToTop"; 

export default function App() {
  useEffect(() => {
    document.title = "Tanish Jain - Portfolio";

    const injectScripts = () => {
      const scriptConfigs = [
        {
          id: "orchids-browser-logs",
          src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js",
          "data-orchids-project-id": "5835dcaa-328e-41ad-9b76-1caa7906a643"
        },
        {
          src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js",
          "data-target-origin": "*",
          "data-message-type": "ROUTE_CHANGE"
        }
      ];

      scriptConfigs.forEach(config => {
        if (!document.getElementById(config.id || config.src)) {
          const script = document.createElement("script");
          Object.entries(config).forEach(([key, val]) => script.setAttribute(key, val));
          script.async = true;
          document.body.appendChild(script);
        }
      });
    };

    injectScripts();
  }, []);

  return (
    <div className="antialiased">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}