// MASONRY GALLERY: save as app/gallery/masonry/page.jsx (or src/app/gallery/masonry/page.jsx).
// Keep this a server component. Do not add "use client".
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Masonry Project Gallery | Morning Star Construction | Victoria, TX" },
  description:
    "Explore brickwork, masonry repairs, stonework, brick mailboxes, and fireplace projects from Morning Star Construction in Victoria, TX.",
  alternates: {
    canonical: "https://morningstarconstructiontexas.com/gallery/masonry",
  },
};

// Set false if your shared layout already includes these components.
const SHOW_NAVBAR = true;
const SHOW_FOOTER = true;

// CATEGORY SETUP:
// Put your actual completed-project cover photos in public.
// Example: public/brickwork-cover.jpg becomes image: "/brickwork-cover.jpg".
// Write accurate alt text describing each actual photo.
// Empty image values show a photo space instead of a broken image.
// Set ready: true ONLY when that category's destination page exists.
// Before then, its card shows "Gallery coming soon" and is not clickable.
// Add or remove categories by copying or deleting an object below.
const categories = [
  {
    title: "Brickwork & Repairs",
    description: "New brick installation, brick replacement, and mortar repairs.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/gallery/masonry/brickwork",
    ready: false,
  },
  {
    title: "Stonework",
    description: "Stone installations, veneers, and exterior masonry details.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/gallery/masonry/stonework",
    ready: false,
  },
  {
    title: "Brick Mailboxes",
    description: "Brick mailbox installations, rebuilds, and finishing details.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/gallery/masonry/mailboxes",
    ready: false,
  },
  {
    title: "Fireplaces & Chimneys",
    description: "Fireplace masonry, chimney brickwork, and repair projects.",
    image: "",
    alt: "",
    imagePosition: "center",
    href: "/gallery/masonry/fireplaces-chimneys",
    ready: false,
  },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400";

function CategoryContent({ category }) {
  return (
    <>
      <div className="aspect-[4/3] overflow-hidden bg-neutral-800">
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

export default function MasonryGalleryPage() {
  return (
    <div className="bg-black font-sans text-white">
      <a href="#gallery-main" className="sr-only focus:not-sr-only focus:block focus:bg-yellow-500 focus:p-4 focus:text-black">Skip to masonry gallery</a>
      {SHOW_NAVBAR && <Navbar />}

      <main id="gallery-main">
        {/* HERO — dark gray */}
        <section className="bg-gray-900 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-12 text-sm text-neutral-300">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className={`hover:text-amber-400 ${focus}`}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/gallery" className={`hover:text-amber-400 ${focus}`}>Our Work</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-amber-400">Masonry</li>
              </ol>
            </nav>

            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-amber-400">Morning Star Construction</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">Masonry Project Gallery</h1>
              <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">Explore our brickwork, stonework, mailboxes, and fireplace projects. Take a closer look at the materials, repairs, and finishing details.</p>
              <p className="mt-6 text-neutral-400">Serving Victoria, TX and surrounding areas</p>
            </div>
          </div>
        </section>

        {/* CATEGORY SELECTION — black; 2 columns, stacking on phones */}
        <section aria-labelledby="gallery-categories" className="bg-black px-6 py-16 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div aria-hidden="true" className="mx-auto mb-8 h-0.5 w-24 bg-yellow-500" />
            <h2 id="gallery-categories" className="mb-6 text-center text-3xl font-bold md:text-5xl">Explore Our Masonry Work</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-300">Choose an available category to view project photos and details.</p>

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
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Planning Brick or Stone Work?</h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-300">Learn about our masonry services, including new installations and repairs, or contact us to discuss the work your property needs.</p>
            <Link href="/services/Masonry" className={`inline-flex min-h-[48px] items-center justify-center rounded-xl border border-amber-400 px-8 py-4 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-black ${focus}`}>Explore Masonry Services</Link>
            <div className="mt-6"><Link href="/gallery" className={`inline-flex min-h-[44px] items-center text-neutral-300 underline underline-offset-4 hover:text-white ${focus}`}>Back to All Project Galleries</Link></div>
          </div>
        </section>

        {/* CALL TO ACTION — yellow */}
        <section className="bg-yellow-500 px-6 py-20 text-center text-black md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Let’s Talk About Your Masonry Project</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg">Contact Morning Star Construction for a free estimate in Victoria, TX and surrounding areas.</p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a href="tel:+13617883004" className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Call (361) 788-3004</a>
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-black px-8 py-4 text-lg font-semibold transition hover:bg-black hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Get a Free Estimate</Link>
            </div>
          </div>
        </section>
      </main>

      {SHOW_FOOTER && <Footer />}
    </div>
  );
}
