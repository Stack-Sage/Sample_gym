import Image from "next/image";
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
  const contentImages = (gymContent.gallery ?? []).filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );

  // Always have at least one image
  const images: string[] =
    contentImages.length > 0
      ? contentImages.slice(0, 10)
      : FALLBACK_IMAGES.slice(0, 10);

  return (
    <section id="gallery" className="w-full max-w-screen-2xl mx-auto px-6 md:px-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((candidate, i) => {
          // Guarantee a string for Next/Image
          const src = candidate || "/assets/default/trainer.jpg";
          return (
            <figure
              key={src + i}
              className="relative h-48 md:h-56 rounded-xl overflow-hidden group bg-gray-800"
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                decoding="async"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={({ currentTarget }) => {
                  // Swap to local fallback if missing
                  if (currentTarget.getAttribute("src") !== "/assets/default/trainer.jpg") {
                    // Next/Image doesn't allow direct src mutation; render will retry with same src.
                    // We keep src valid via our guaranteed src variable above.
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </figure>
          );
        })}
      </div>
    </section>
  );
};
