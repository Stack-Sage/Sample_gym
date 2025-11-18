import { type GymContent } from "@/data/gym/content";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  data: GymContent;
}

const defaultSamples = [
  "/assets/default/girl1.jpg",
  "/assets/default/girl2.jpg",
  "/assets/default/boy1.jpg",
  "/assets/default/boy2.jpg",
];
const changeSet = [1, 2, 3, 4, 5, 6].map(n => `/assets/change/${n}.jpg`);
const fallback = "/assets/default/trainer.jpg";

export const Gallery = ({ data }: GalleryProps) => {
  const content = (data.gallery || []).filter(Boolean);
  const maxSlots = Math.max(
    4,
    Math.min(6, Math.max(content.length, changeSet.length, defaultSamples.length)),
  );
  const slots = Array.from({ length: maxSlots }, (_, i) => i);

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Gallery
      </motion.h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {slots.map(i => {
          const candidates = [
            content[i],
            changeSet[i],
            defaultSamples[i % defaultSamples.length],
            fallback,
          ].filter((v): v is string => typeof v === "string" && v.length > 0);

          const src = candidates[0];
          return (
            <motion.figure
              key={`g-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative h-48 md:h-56 w-full max-w-sm rounded-lg overflow-hidden group"
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                decoding="async"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
};
