// Save as app/projects/floor-tile/page.jsx
// Or src/app/projects/floor-tile/page.jsx if your project uses src/app.
// Keep this as a server component: do not add "use client".
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    absolute: "Floor Tile Project Gallery | Morning Star Construction",
  },
  description:
    "Explore floor tile projects from Morning Star Construction. Contact us for tile installation and repair in Victoria, TX and surrounding areas.",
  alternates: {
    canonical: "https://morningstarconstructiontexas.com/projects/floor-tile",
  },
};

// If your shared layout already includes Navbar or Footer, set its switch false.
const SHOW_NAVBAR = true;
const SHOW_FOOTER = true;

// PHOTO SETUP:
// 1. Place your actual photos inside public.
// 2. Enter their paths in src, for example: "/floor-tile-1.jpg".
// 3. Replace each title, alt, and caption with accurate project details.
// 4. Keep src empty until you have a photo: a visible placeholder will appear.
// 5. Copy an entry to add more photos, or delete unused entries.
// Photos can show separate jobs or different views of the same job.
// imagePosition may be "center", "top", or "bottom" to adjust the crop.
const photos = [
  { id: "floor-1", src: "", alt: "", title: "Floor Tile Photo 1", caption: "", imagePosition: "center" },
  { id: "floor-2", src: "", alt: "", title: "Floor Tile Photo 2", caption: "", imagePosition: "center" },
  { id: "floor-3", src: "", alt: "", title: "Floor Tile Photo 3", caption: "", imagePosition: "center" },
  { id: "floor-4", src: "", alt: "", title: "Floor Tile Photo 4", caption: "", imagePosition: "center" },
  { id: "floor-5", src: "", alt: "", title: "Floor Tile Photo 5", caption: "", imagePosition: "center" },
  { id: "floor-6", src: "", alt: "", title: "Floor Tile Photo 6", caption: "", imagePosition: "center" },
];

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400";

export default function FloorTileGalleryPage() {
  return (
    <div className="bg-black font-sans text-white">
      <a href="#floor-gallery-main" className="sr-only focus:not-sr-only focus:block focus:bg-yellow-500 focus:p-4 focus:text-black">
        Skip to floor tile gallery
      </a>
      {SHOW_NAVBAR && <Navbar />}

      <main id="floor-gallery-main">
        {/* HERO — dark gray */}
        <section className="bg-gray-900 px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-12 text-sm text-neutral-300">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className={`hover:text-amber-400 ${focusStyle}`}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services/tile-installation" className={`hover:text-amber-400 ${focusStyle}`}>Tile Services</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-amber-400">Floor Tile Gallery</li>
              </ol>
            </nav>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-5">Morning Star Construction</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">Floor Tile Projects</h1>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                Take a closer look at our floor tile work. Planning an update of your own? We offer tile installation and repair in Victoria, TX and surrounding areas.
              </p>
              <Link href="/contact" className={`inline-flex min-h-[48px] items-center justify-center bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition ${focusStyle}`}>
                Get a Free Tile Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY — black; 1 column on phones, 2 on tablets, 3 on desktop */}
        <section aria-labelledby="floor-photos-heading" className="bg-black px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div aria-hidden="true" className="w-24 h-0.5 bg-yellow-500 mx-auto mb-8" />
            <h2 id="floor-photos-heading" className="text-3xl md:text-4xl font-bold text-center mb-5">Floor Tile Photo Gallery</h2>
            <p className="text-neutral-300 text-center max-w-2xl mx-auto mb-12">Select a project photo to open the full image in a new tab.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo) => (
                <figure key={photo.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
                  {photo.src ? (
                    <a
                      href={photo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${photo.title} full-size photo in a new tab`}
                      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-400"
                    >
                      {/* Standard img keeps this compatible with your existing photo setup. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-cover hover:opacity-90 transition-opacity"
                        style={{ objectPosition: photo.imagePosition }}
                      />
                    </a>
                  ) : (
                    <div className="aspect-[4/3] bg-neutral-800 flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-amber-400">
                        <rect x="5" y="7" width="38" height="34" rx="4" stroke="currentColor" strokeWidth="2" />
                        <circle cx="17" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
                        <path d="M6 35l11-10 8 7 8-13 10 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                      <p className="text-neutral-300">Project photo coming soon</p>
                    </div>
                  )}

                  <figcaption className="p-6">
                    <h3 className="text-xl font-semibold text-white">{photo.title}</h3>
                    {photo.caption && <p className="mt-3 text-neutral-300 leading-relaxed">{photo.caption}</p>}
                    {photo.src && <p className="mt-4 text-sm text-amber-400">Select photo to enlarge <span aria-hidden="true">↗</span></p>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* BACK TO TILE SERVICES — dark gray */}
        <section className="bg-gray-900 px-6 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-5">Looking for More Tile Services?</h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">Explore shower tile, kitchen backsplashes, outdoor tile, repairs, and regrouting.</p>
            <Link href="/services/tile-installation" className={`inline-flex min-h-12 items-center justify-center text-amber-400 font-semibold underline underline-offset-4 hover:text-amber-300 ${focusStyle}`}>
              Back to Tile Installation &amp; Repair
            </Link>
          </div>
        </section>

        {/* CALL TO ACTION — yellow, matching your service pages */}
        <section className="bg-yellow-500 px-6 py-20 md:py-24 text-black text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Update Your Floors?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">Tell Morning Star Construction about your space and the tile work you have in mind. Contact us for a free estimate.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:+13617883004" className="inline-flex min-h-12 items-center justify-center bg-black text-yellow-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-neutral-800 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Call (361) 788-3004</a>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border-2 border-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-black hover:text-yellow-400 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Get a Free Estimate</Link>
            </div>
          </div>
        </section>
      </main>

      {SHOW_FOOTER && <Footer />}
    </div>
  );
}
