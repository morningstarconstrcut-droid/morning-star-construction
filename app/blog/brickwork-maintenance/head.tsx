import Head from "next/head";

export default function MaintainingBrickworkHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Maintaining Your Brickwork: Tips for Longevity | Morning Star Construction</title>
      <meta name="description" content="Learn expert tips to maintain your brickwork and extend the life of your masonry in Victoria, TX. Discover cleaning, tuckpointing, sealing, and inspection strategies." />
      <meta name="keywords" content="brickwork maintenance, masonry tips, Victoria TX, masonry repair, tuckpointing, sealing bricks, home maintenance, masonry inspection" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Maintaining Your Brickwork: Tips for Longevity | Morning Star Construction" />
      <meta property="og:description" content="Keep your brickwork in top condition with professional maintenance tips. Learn cleaning, tuckpointing, sealing, and inspection strategies for Victoria, TX homes." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/maintaining-brickwork" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/brickwork-maintenance.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Maintaining Your Brickwork: Tips for Longevity | Morning Star Construction" />
      <meta name="twitter:description" content="Learn expert tips to maintain your brickwork and extend the life of your masonry in Victoria, TX. Discover cleaning, tuckpointing, sealing, and inspection strategies." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/brickwork-maintenance.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Maintaining Your Brickwork: Tips for Longevity",
            "description": "Learn expert tips to maintain your brickwork and extend the life of your masonry in Victoria, TX. Discover cleaning, tuckpointing, sealing, and inspection strategies.",
            "image": "https://www.morningstarconstruction.com/blog/brickwork-maintenance.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/maintaining-brickwork"
            }
          }),
        }}
      />
    </Head>
  );
}
