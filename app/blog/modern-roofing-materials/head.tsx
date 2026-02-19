import Head from "next/head";

export default function ModernRoofingMaterialsHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Modern Roofing Materials That Boost Curb Appeal | Morning Star Construction</title>
      <meta name="description" content="Enhance your Victoria, TX home's look and durability with modern roofing materials. Learn about asphalt shingles, metal, tile, and slate roofing options." />
      <meta name="keywords" content="modern roofing materials, Victoria TX roofing, asphalt shingles, metal roofing, tile roofing, slate roofing, home curb appeal, roofing tips" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Modern Roofing Materials That Boost Curb Appeal | Morning Star Construction" />
      <meta property="og:description" content="Discover modern roofing materials that improve durability and curb appeal for Victoria, TX homes. Explore asphalt, metal, tile, and slate roofing options." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/modern-roofing-materials" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/modern-roofing-materials.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Modern Roofing Materials That Boost Curb Appeal | Morning Star Construction" />
      <meta name="twitter:description" content="Enhance your Victoria, TX home's look and durability with modern roofing materials. Learn about asphalt shingles, metal, tile, and slate roofing options." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/modern-roofing-materials.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Modern Roofing Materials That Boost Curb Appeal",
            "description": "Enhance your Victoria, TX home's look and durability with modern roofing materials. Learn about asphalt shingles, metal, tile, and slate roofing options.",
            "image": "https://www.morningstarconstruction.com/blog/modern-roofing-materials.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/modern-roofing-materials"
            }
          }),
        }}
      />
    </Head>
  );
}
