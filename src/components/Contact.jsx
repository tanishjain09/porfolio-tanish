import { useState } from "react";
import { motion } from "framer-motion"; 
import { Send, MapPin, Briefcase, Mail, Clock } from "lucide-react";

export function Contact({ isFullPage = false }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    // Keep your Web3Forms access key
    formData.append("access_key", "9de9b994-4bd7-4fe0-8d5f-793074208b96");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-6 md:px-[12%] py-20 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`max-w-6xl mx-auto ${
          isFullPage ? "grid grid-cols-1 lg:grid-cols-2 gap-12" : "max-w-2xl"
        }`}
      >
        <div>
          <div className={`${isFullPage ? "text-left" : "text-center"} mb-12`}>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-3"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
            >
              Contact Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-neutral-600 dark:text-neutral-400"
            >
              Have a question or want to work together? I'd love to hear from
              you.
            </motion.p>
          </div>

          {isFullPage && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-neutral-900 dark:text-white font-medium">
                    Location
                  </h4>
                  <p>Vadodara, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-neutral-900 dark:text-white font-medium">
                    Availability
                  </h4>
                  <p>Available for remote work & new projects</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-neutral-900 dark:text-white font-medium">
                    Response Time
                  </h4>
                  <p>Usually responds within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-neutral-900 dark:text-white font-medium">
                    Email
                  </h4>
                  <p>tanish9.work@gmail.com</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white dark:bg-[#0a0a16] border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all hover:border-neutral-400 dark:hover:border-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white dark:bg-[#0a0a16] border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all hover:border-neutral-400 dark:hover:border-neutral-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Your message..."
              className="w-full px-4 py-3 bg-white dark:bg-[#0a0a16] border border-neutral-300 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none hover:border-neutral-400 dark:hover:border-neutral-600"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full overflow-hidden transition-all disabled:opacity-50 shadow-xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>

            {result && (
              <p
                className={`text-sm ${
                  result.includes("successfully")
                    ? "text-green-600 dark:text-green-400"
                    : result === "Sending..."
                    ? "text-neutral-600 dark:text-neutral-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {result}
              </p>
            )}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
export default Contact;