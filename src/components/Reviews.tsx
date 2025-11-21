import { type GymContent } from "@/data/gym/content";
import { motion } from "framer-motion";

interface ReviewsProps {
  data: GymContent;
}

export const Reviews = ({ data }: ReviewsProps) => {
  const average =
    data.reviews.length > 0
      ? (
          data.reviews.reduce((s, r) => s + r.rating, 0) / data.reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <section id="reviews" className="max-w-5xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
      >
        Reviews
      </motion.h3>

      {/* Summary + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-4"
      >
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-gray-300">
            Average Rating: <span className="text-orange-400 font-semibold">{average}</span> / 5
          </p>
          <p className="text-xs text-gray-400">
            Based on {data.reviews.length} curated review snapshots.
          </p>
        </div>
        <a
          href="https://www.google.com/maps?q=ABS+Fitness+Ring+Road+Nagpur&tbm=map"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-orange-500 text-black text-xs md:text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          Write a Review
        </a>
      </motion.div>

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
