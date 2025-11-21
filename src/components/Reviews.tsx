import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface ReviewsProps {
  data: GymContent;
}

export const Reviews = ({ data }: ReviewsProps) => {
  return (
    <section id="reviews" className="max-w-5xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Reviews
      </motion.h3>
      <div className="flex flex-col gap-6">
        {data.reviews.map((r, i) => (
          <motion.blockquote
            key={r.author + i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-l-4 border-orange-500 pl-4"
          >
            <p className="text-sm md:text-base text-gray-200 mb-2">“{r.text}”</p>
            <footer className="text-xs text-gray-400 flex items-center gap-2">
              <span>{r.author}</span>
              <span className="text-orange-400">
                {"★".repeat(r.rating)}
                <span className="text-gray-600">{"★".repeat(5 - r.rating)}</span>
              </span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};
