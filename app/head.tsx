export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Morning Star Construction | Victoria TX | Roofing, Masonry, Remodeling</title>
      <meta
        name="description"
        content="Morning Star Construction provides high-quality residential and commercial construction in Victoria, TX. Services include roofing, masonry, remodeling, and renovations with skilled tradesmen and honest pricing."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Morning Star Construction | Victoria TX" />
      <meta
        property="og:description"
        content="Expert residential and commercial construction in Victoria, TX. Roofing, masonry, remodeling, and renovations done with quality and integrity."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourdomain.com/" />
      <meta property="og:image" content="/og-home.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Morning Star Construction | Victoria TX" />
      <meta
        name="twitter:description"
        content="Expert residential and commercial construction in Victoria, TX. Roofing, masonry, remodeling, and renovations done with quality and integrity."
      />
      <meta name="twitter:image" content="/og-home.jpg" />

      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Morning Star Construction",
            "image": "https://www.yourdomain.com/og-home.jpg",
            "url": "https://www.yourdomain.com",
            "telephone": "(361) 788-3004",
            "email": "morningstarconstrcut@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Victoria",
              "addressRegion": "TX",
              "postalCode": "77901",
              "addressCountry": "US"
            },
            "description":
              "High-quality residential and commercial construction in Victoria, TX. Roofing, masonry, remodeling, and renovations with skilled tradesmen and honest pricing.",
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00"
          }),
        }}
      />
    </>
  );
}
