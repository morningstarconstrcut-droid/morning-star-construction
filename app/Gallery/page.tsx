// MAIN GALLERY: save as app/gallery/page.jsx (or src/app/gallery/page.jsx).
// Keep this a server component. Do not add "use client".
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Project Gallery | Morning Star Construction | Victoria, TX" },
  description:
    "Explore tile, masonry, remodeling, and roofing work from Morning Star Construction. Browse project photos and request a free estimate in Victoria, TX.",
  alternates: {
    canonical: "https://morningstarconstructiontexas.com/gallery",
  },
};

// Set false if your shared layout already includes these components.
const SHOW_NAVBAR = true;
const SHOW_FOOTER = true;

// CATEGORY SETUP:
// Put your actual completed-project cover photos in public.
// Example: public/tile-cover.jpg becomes image: "/tile-cover.jpg".
// Write accurate alt text describing each actual photo.
// Empty image values show a photo space instead of a broken image.
// Set ready: true ONLY when that category's destination page exists.
// Before then, its card shows "Gallery coming soon" and is not clickable.
// Add or remove categories by copying or deleting an object below.
const categories = [
  {
    title: "Tile Projects",
    description: "Floors, showers, kitchen backsplashes, and outdoor tile.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/Gallery/tile",
    ready: true,
  },
  {
    title: "Masonry Projects",
    description: "Brickwork, stonework, mailboxes, and masonry repairs.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/Gallery/mason",
    ready: true,
  },
  {
    title: "Remodeling Projects",
    description: "Kitchen, bathroom, and other home renovation projects.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/gallery/remodeling",
    ready: false,
  },
  {
    title: "Roofing Projects",
    description: "Roof installations, replacements, and repair work.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/gallery/roofing",
    ready: false,
  },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400";

type GalleryCategory = {
  image?: string;
  alt?: string;
  imagePosition?: React.CSSProperties["objectPosition"];
  title: string;
  description: string;
  ready: boolean;
};

function CategoryContent({ category }: { category: GalleryCategory }) {
  return (
    <>
      <div className="aspect-4/3 overflow-hidden bg-neutral-800">
        {category.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={category.image}
            alt={category.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: category.imagePosition }}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
            <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className="h-14 w-14 text-amber-400">
              <rect x="5" y="7" width="38" height="34" rx="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M6 35l11-10 8 7 8-13 10 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <p className="text-neutral-300">Project photos coming soon</p>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8">
        <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">{category.title}</h3>
        <p className="leading-relaxed text-neutral-300">{category.description}</p>
        {category.ready ? (
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-400 group-hover:text-amber-300">
            View Gallery <span aria-hidden="true">→</span>
          </span>
        ) : (
          <p className="mt-6 text-sm text-neutral-400">Gallery coming soon</p>
        )}
      </div>
    </>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-black font-sans text-white">
      <a href="#gallery-main" className="sr-only focus:not-sr-only focus:block focus:bg-yellow-500 focus:p-4 focus:text-black">Skip to project gallery</a>
      {SHOW_NAVBAR && <Navbar />}

      <main id="gallery-main">
        {/* HERO — dark gray */}
        <section className="bg-gray-900 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-12 text-sm text-neutral-300">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className={`hover:text-amber-400 ${focus}`}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-amber-400">Our Work</li>
              </ol>
            </nav>

            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-amber-400">Morning Star Construction</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Our Work</h1>
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">Explore our construction and renovation work by service. Find ideas for your next project and take a closer look at the details.</p>
              <p className="mt-6 text-neutral-400">Serving Victoria, TX and surrounding areas</p>
            </div>
          </div>
        </section>

        {/* CATEGORY SELECTION — black; 2 columns, stacking on phones */}
        <section aria-labelledby="gallery-categories" className="bg-black px-6 py-16 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div aria-hidden="true" className="mx-auto mb-8 h-0.5 w-24 bg-yellow-500" />
            <h2 id="gallery-categories" className="mb-6 text-center text-3xl font-bold md:text-5xl">Explore Projects by Service</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-300">Choose an available gallery to see more of our work.</p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {categories.map((category) => (
                <article key={category.href} className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900">
                  {category.ready ? (
                    <Link href={category.href} aria-label={`View ${category.title} gallery`} className="group block h-full transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-400">
                      <CategoryContent category={category} />
                    </Link>
                  ) : (
                    <div><CategoryContent category={category} /></div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE LINK — dark gray */}
        <section className="bg-gray-900 px-6 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Have a Project in Mind?</h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-300">Explore our services to learn more about the work we offer, or contact us to discuss your home and the improvements you have in mind.</p>
            <Link href="/services" className={`inline-flex min-h-12 items-center justify-center rounded-xl border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-black ${focus}`}>Explore Our Services</Link>
          </div>
        </section>

        {/* CALL TO ACTION — yellow */}
        <section className="bg-yellow-500 px-6 py-20 text-center text-black md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Let’s Talk About Your Next Project</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg">Contact Morning Star Construction for a free estimate in Victoria, TX and surrounding areas.</p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a href="tel:+13617883004" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Call (361) 788-3004</a>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-2xl border-2 border-black px-8 py-4 text-lg font-semibold transition hover:bg-black hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Get a Free Estimate</Link>
            </div>
          </div>
        </section>
      </main>

      {SHOW_FOOTER && <Footer />}
    </div>
  );
}
