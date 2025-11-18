import { type GymContent } from "@/data/gym/content";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface TrainersProps {
  data: GymContent;
}

const fallbackImg = "/assets/default/trainer.jpg";
const changeImages = ["/assets/change/1.jpg", "/assets/change/2.jpg", "/assets/change/3.jpg"];

const ImageWithFallback = ({
  sources,
  alt,
  priority = false,
}: {
  sources: string[];
  alt: string;
  priority?: boolean;
}) => {
  const [idx, setIdx] = useState(0);
  const handleError = () => setIdx((prev) => (prev < sources.length - 1 ? prev + 1 : prev));

  return (
    <Image
      src={sources[idx] ?? fallbackImg}
      alt={alt}
      fill
      onError={handleError}
      sizes="(max-width:768px) 100vw, 33vw"
      decoding="async"
      className="object-cover"
      priority={priority}
    />
  );
};

export const Trainers = ({ data }: TrainersProps) => {
  return (
    <section id="trainers" className="max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left"
      >
        Trainers
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {data.trainers.map((t, i) => {
          // Ensure a definite string even with noUncheckedIndexedAccess
          const chosen = changeImages[i % changeImages.length] ?? fallbackImg;
          const candidates: string[] = [chosen, fallbackImg];

          return (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-gray-900/50 w-full max-w-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-colors"
            >
              <figure className="relative w-full h-48">
                <ImageWithFallback sources={candidates} alt={t.name} priority={i < 3} />
              </figure>

              <div className="p-4 flex flex-col items-center md:items-start gap-1 text-center md:text-left">
                <h5 className="font-semibold">{t.name}</h5>
                <span className="text-xs text-orange-300">{t.speciality}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
