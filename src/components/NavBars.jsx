import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-50 px-4 md:px-8 flex-col items-stretch">
      {/* Navbar Main */}
      <div className="flex items-center w-full">
        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl text-primary"
          >
            Tohfa Conrete
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="flex-none hidden md:flex gap-6 items-center">
          <a href="#products" className="hover:text-primary transition-colors">
            منتجاتنا
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-sm rounded-full px-5"
          >
            تواصلي معانا
          </a>
        </div>

        {/* Mobile Burger */}
        <div className="flex-none md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative flex h-6 w-6 flex-col justify-center"
            >
              {/* Top Line */}
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: -6,
                  },
                  open: {
                    rotate: 45,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.2 }}
                className="absolute block h-0.5 w-6 rounded-full bg-current"
              />

              {/* Middle Line */}
              <motion.span
                variants={{
                  closed: {
                    opacity: 1,
                  },
                  open: {
                    opacity: 0,
                  },
                }}
                transition={{ duration: 0.15 }}
                className="absolute block h-0.5 w-6 rounded-full bg-current"
              />

              {/* Bottom Line */}
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 6,
                  },
                  open: {
                    rotate: -45,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.2 }}
                className="absolute block h-0.5 w-6 rounded-full bg-current"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 py-4 border-t border-base-300 mt-2">
              {/* Products */}
              <a
                href="#products"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                منتجاتنا
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary btn-sm rounded-full w-full"
              >
                تواصلي معانا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
