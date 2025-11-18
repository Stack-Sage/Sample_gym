import { gymContent } from "@/data/gym/content";

const FALLBACK_IMAGES: string[] = [
  "/assets/change/1.jpg",
  "/assets/change/2.jpg",
  "/assets/change/3.jpg",
  "/assets/default/girl1.jpg",
  "/assets/default/girl2.jpg",
  "/assets/default/trainer.jpg",
];

export const Gallery = () => {
  const contentImages = (gymContent.gallery || []).filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );
  const images =
    contentImages.length > 0
      ? contentImages.slice(0, 6)
      : FALLBACK_IMAGES.slice(0, 6);

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Gallery
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {images.map((src, i) => (
          <figure
            key={src + i}
            className="relative h-48 md:h-56 w-full max-w-sm rounded-lg overflow-hidden group"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={e => {
                (e.currentTarget as HTMLImageElement).src =
                  "/assets/default/trainer.jpg";
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
          </figure>
        ))}
      </div>
    </section>
  );
};
