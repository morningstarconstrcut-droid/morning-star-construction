import Head from "next/head";

export default function EcoFriendlyRenovationHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Eco-Friendly Home Renovation Ideas | Morning Star Construction</title>
      <meta name="description" content="Reduce environmental impact while improving your Victoria, TX home with eco-friendly renovation ideas. Learn about energy-efficient upgrades, sustainable materials, and green home tips." />
      <meta name="keywords" content="eco-friendly home renovation, green renovation ideas, sustainable home upgrades, Victoria TX remodeling, energy-efficient homes, low-VOC paint, solar panels, water conservation" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Eco-Friendly Home Renovation Ideas | Morning Star Construction" />
      <meta property="og:description" content="Discover eco-friendly home renovation ideas for Victoria, TX. Explore energy-efficient upgrades, sustainable materials, and green home improvements." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/eco-friendly-renovation" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/eco-friendly-renovation.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Eco-Friendly Home Renovation Ideas | Morning Star Construction" />
      <meta name="twitter:description" content="Reduce environmental impact while improving your Victoria, TX home with eco-friendly renovation ideas. Learn about energy-efficient upgrades, sustainable materials, and green home tips." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/eco-friendly-renovation.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Eco-Friendly Home Renovation Ideas",
            "description": "Reduce environmental impact while improving your Victoria, TX home with eco-friendly renovation ideas. Learn about energy-efficient upgrades, sustainable materials, and green home tips.",
            "image": "https://www.morningstarconstruction.com/blog/eco-friendly-renovation.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/eco-friendly-renovation"
            }
          }),
        }}
      />
    </Head>
  );
}
