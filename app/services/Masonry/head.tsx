export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Masonry & Brickwork Services | Morning Star Construction | Victoria TX</title>
      <meta
        name="description"
        content="Morning Star Construction provides expert masonry and brickwork services in Victoria, TX. Our skilled tradesmen handle brick, stone, and concrete projects with precision, durability, and aesthetic excellence."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Masonry & Brickwork Services | Morning Star Construction" />
      <meta
        property="og:description"
        content="Expert masonry and brickwork in Victoria, TX. Morning Star Construction delivers durable, high-quality brick, stone, and concrete work for residential and commercial projects."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourdomain.com/masonry" />
      <meta property="og:image" content="/og-masonry.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Masonry & Brickwork Services | Morning Star Construction" />
      <meta
        name="twitter:description"
        content="Morning Star Construction provides skilled masonry and brickwork services in Victoria, TX. Brick, stone, and concrete projects done with precision and quality."
      />
      <meta name="twitter:image" content="/og-masonry.jpg" />

      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Morning Star Construction",
            "image": "https://www.yourdomain.com/og-masonry.jpg",
            "url": "https://www.yourdomain.com/masonry",
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
              "Professional masonry and brickwork services in Victoria, TX. Skilled brick, stone, and concrete work for residential and commercial projects.",
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
            "areaServed": {
              "@type": "City",
              "name": "Victoria"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": "Masonry and Brickwork Services"
            }
          }),
        }}
      />
    </>
  );
}
