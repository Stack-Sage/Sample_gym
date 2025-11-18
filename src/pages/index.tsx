import Head from "next/head";
import { gymContent } from "@/data/gym/content";
import { Navbar } from "@/components/layout/Navbar";

// Safe minimal components (used if external ones not present)
const Hero = ({ data }: { data: typeof gymContent }) => (
  <header id="hero" className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold">{data.name}</h1>
    <p className="mt-4 text-orange-400 text-lg md:text-xl">{data.tagline}</p>
    <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">{data.about.slice(0, 160)}...</p>
    <div className="mt-6 flex gap-4">
      <a href="#pricing" className="px-5 py-2 rounded bg-orange-500 text-black text-sm font-medium hover:bg-orange-600">View Plans</a>
      <a href="#contact" className="px-5 py-2 rounded border border-orange-400 text-orange-400 text-sm font-medium hover:bg-orange-400 hover:text-black">Join Now</a>
    </div>
  </header>
);

const About = ({ data }: { data: typeof gymContent }) => (
  <section id="about" className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">About Us</h2>
    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{data.about}</p>
  </section>
);

const Facilities = ({ data }: { data: typeof gymContent }) => (
  <section id="facilities" className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Facilities</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.facilities.map(f => (
        <div key={f.title} className="border border-gray-700 rounded-lg p-5 hover:bg-gray-800/60 transition-colors text-center md:text-left">
          <h3 className="font-semibold mb-2 text-lg">{f.title}</h3>
          <p className="text-xs md:text-sm text-gray-300">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Trainers = ({ data }: { data: typeof gymContent }) => {
  const images = ["/assets/change/1.jpg", "/assets/change/2.jpg", "/assets/change/3.jpg"];
  return (
    <section id="trainers" className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Trainers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {data.trainers.map((t, i) => (
          <div key={t.name + i} className="bg-gray-900/50 w-full max-w-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-colors">
            <div className="relative h-48">
              {/* Using plain img for simplicity here */}
              <img
                src={images[i % images.length]}
                alt={t.name}
                className="w-full h-full object-cover"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).src = "/assets/default/trainer.jpg";
                }}
              />
            </div>
            <div className="p-4 flex flex-col items-center md:items-start gap-1 text-center md:text-left">
              <h5 className="font-semibold">{t.name}</h5>
              <span className="text-xs text-orange-400">{t.speciality}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = ({ data }: { data: typeof gymContent }) => (
  <section id="pricing" className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Pricing</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.pricing.map(p => (
        <div key={p.plan} className="flex flex-col items-center md:items-start w-full gap-2 p-5 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors">
          <h3 className="font-semibold text-lg">{p.plan}</h3>
          <span className="text-orange-400 font-bold text-xl">{p.amount}</span>
          <button className="mt-2 text-xs px-3 py-2 rounded bg-orange-500 hover:bg-orange-600 text-black font-medium">Choose</button>
        </div>
      ))}
    </div>
  </section>
);

const Gallery = ({ data }: { data: typeof gymContent }) => {
  const candidates = (data.gallery || []).filter(Boolean);
  const fallback = ["/assets/change/1.jpg", "/assets/change/2.jpg", "/assets/change/3.jpg", "/assets/default/girl1.jpg"];
  const images = (candidates.length ? candidates : fallback).slice(0, 6);
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {images.map((src, i) => (
          <figure key={src + i} className="relative h-48 md:h-56 w-full max-w-sm rounded-lg overflow-hidden group">
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={e => {
                (e.currentTarget as HTMLImageElement).src = "/assets/default/trainer.jpg";
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
          </figure>
        ))}
      </div>
    </section>
  );
};

const Reviews = ({ data }: { data: typeof gymContent }) => (
  <section id="reviews" className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Reviews</h2>
    <div className="flex flex-col gap-6">
      {data.reviews.map((r, i) => (
        <blockquote key={r.author + i} className="border-l-4 border-orange-500 pl-4">
          <p className="text-sm md:text-base text-gray-200 mb-2">“{r.text}”</p>
          <footer className="text-xs text-gray-400 flex items-center gap-2">
            <span>{r.author}</span>
            <span className="text-orange-400">
              {"★".repeat(r.rating)}
              <span className="text-gray-600">{"★".repeat(5 - r.rating)}</span>
            </span>
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
);

const Contact = ({ data }: { data: typeof gymContent }) => (
  <section id="contact" className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Contact & Location</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <p className="text-sm md:text-base"><span className="font-semibold">Address:</span> {data.address}</p>
        <p className="text-sm md:text-base"><span className="font-semibold">Phone:</span> {data.phone}</p>
        <p className="text-sm md:text-base"><span className="font-semibold">Opening Hours:</span> {data.openingHours}</p>
        <a href={`tel:${data.phone.replace(/\s+/g, "")}`} className="px-4 py-2 rounded bg-orange-500 text-black text-sm font-medium hover:bg-orange-600 transition-colors">Call Now</a>
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-700 h-64 md:h-80">
        <iframe
          title="Gym Location"
          src={data.googleMapEmbedUrl || "about:blank"}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

const GymHome = () => {
  return (
    <>
      <Head>
        <title>{gymContent.name} – {gymContent.tagline}</title>
        <meta name="description" content={gymContent.about} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${gymContent.name} – ${gymContent.tagline}`} />
        <meta property="og:description" content={gymContent.about} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Head>
      <main className="text-gray-100 flex flex-col gap-20">
        <Navbar name={gymContent.name} />
        <Hero data={gymContent} />
        <About data={gymContent} />
        <Facilities data={gymContent} />
        <Trainers data={gymContent} />
        <Pricing data={gymContent} />
        <Gallery data={gymContent} />
        <Reviews data={gymContent} />
        <Contact data={gymContent} />
      </main>
    </>
  );
};

export default GymHome;
