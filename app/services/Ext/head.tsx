export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Exterior Construction | Morning Star Construction | Victoria TX</title>
      <meta
        name="description"
        content="Morning Star Construction provides professional exterior construction in Victoria, TX. Siding, decks, fences, framing, additions, and exterior renovations completed with quality and precision."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Exterior Construction | Morning Star Construction" />
      <meta
        property="og:description"
        content="Professional exterior construction services in Victoria, TX. Siding, decks, fences, framing, additions, and exterior renovations completed with quality and precision."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourdomain.com/exterior" />
      <meta property="og:image" content="/og-exterior.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Exterior Construction | Morning Star Construction" />
      <meta
        name="twitter:description"
        content="Skilled exterior construction services in Victoria, TX. Siding, decks, fences, framing, additions, and renovations delivered with precision and care."
      />
      <meta name="twitter:image" content="/og-exterior.jpg" />

      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Morning Star Construction",
            "image": "https://www.yourdomain.com/og-exterior.jpg",
            "url": "https://www.yourdomain.com/exterior",
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
              "Expert exterior construction in Victoria, TX. Services include siding, decks, fences, framing, additions, and exterior renovations with quality craftsmanship.",
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
            "areaServed": {
              "@type": "City",
              "name": "Victoria"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": "Exterior Construction & Renovation Services"
            }
          }),
        }}
      />
    </>
  );
}
