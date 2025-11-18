import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface NavbarProps {
  name?: string;
}

export const Navbar = ({ name }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const items = ["hero", "about", "facilities", "trainers", "pricing", "gallery", "reviews", "contact"];

  // Lock body scroll when menu is open and close on Escape
  useEffect(() => {
    if (open) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onEsc);
      return () => {
        document.documentElement.style.overflow = prev;
        window.removeEventListener("keydown", onEsc);
      };
    }
  }, [open]);

  return (
    <nav className="h-16 md:h-20 flex items-center sticky top-0 bg-black/70 backdrop-blur z-40">
      <article className="max-w-7xl mx-auto flex-1 flex items-center justify-between px-4">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-white uppercase tracking-wide text-sm md:text-base"
        >
          {name ?? "Gym Name"}
        </motion.span>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-4 text-xs md:text-sm text-white">
          {items.map(id => (
            <li key={id}>
              <Link href={`#${id}`} className="hover:text-orange-400 transition-colors">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-white/20 text-white"
        >
          <span className="sr-only">Open menu</span>
          <div className="w-5 space-y-1.5">
            <span className="block h-0.5 bg-white" />
            <span className="block h-0.5 bg-white" />
            <span className="block h-0.5 bg-white" />
          </div>
        </button>
      </article>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 md:hidden z-50"
            onClick={e => {
              // close when clicking the backdrop (but not inner content)
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div
              className="max-w-7xl mx-auto h-full overflow-y-auto"
              style={{
                paddingTop: "calc(16px + env(safe-area-inset-top))",
                paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
              }}
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl leading-none"
              >
                ×
              </button>

              <ul className="min-h-full px-6 pt-16 pb-10 flex flex-col items-center justify-center gap-5 text-center">
                {items.map((id, idx) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="block text-white text-xl font-medium tracking-wide hover:text-orange-400 transition-colors"
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
