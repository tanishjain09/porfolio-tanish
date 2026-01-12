import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tanish995/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/tanishjain09",
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/tanishSethiya/",
    label: "LeetCode",
  },
  {
    href: "https://www.instagram.com/tanish_sethiya_/",
    label: "Instagram",
  },
];

export function Footer({ isDarkMode }) {
  return (
    <footer className="w-full px-6 md:px-[12%] py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:tanish.jain.0905@gmail.com"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              tanish9.work@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-sm text-neutral-500">
            ©{new Date().getFullYear()} Tanish Sethiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
