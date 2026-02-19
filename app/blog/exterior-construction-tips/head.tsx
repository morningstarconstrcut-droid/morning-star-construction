import Head from "next/head";

export default function ExteriorConstructionHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Exterior Construction Tips for Victoria, TX Homes | Morning Star Construction</title>
      <meta name="description" content="Expert exterior construction tips for homeowners in Victoria, TX. Learn about roofing, siding, drainage, safety, and curb appeal to enhance your home's durability and style." />
      <meta name="keywords" content="Exterior construction, home improvement, Victoria TX, roofing tips, siding installation, masonry, decks, landscaping, curb appeal, building tips" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Exterior Construction Tips for Victoria, TX Homes | Morning Star Construction" />
      <meta property="og:description" content="Discover expert tips for exterior construction in Victoria, TX. Improve durability, safety, and curb appeal with guidance on roofing, siding, decks, and more." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/exterior-construction-tips" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/exterior-construction.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Exterior Construction Tips for Victoria, TX Homes | Morning Star Construction" />
      <meta name="twitter:description" content="Expert exterior construction tips for Victoria, TX homeowners. Learn about roofing, siding, decks, drainage, and curb appeal for long-lasting results." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/exterior-construction.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Exterior Construction Tips for Victoria, TX Homes",
            "description": "Expert exterior construction tips for homeowners in Victoria, TX. Improve roofing, siding, decks, drainage, and curb appeal with professional guidance.",
            "image": "https://www.morningstarconstruction.com/blog/exterior-construction.jpg",
            "author": {
              "@type": "Organization",
              "name": "Morning Star Construction"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Morning Star Construction",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.morningstarconstruction.com/logo.png"
              }
            },
            "datePublished": "2026-02-13",
            "dateModified": "2026-02-13",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.morningstarconstruction.com/blog/exterior-construction-tips"
            }
          }),
        }}
      />
    </Head>
  );
}
