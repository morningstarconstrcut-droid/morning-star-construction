export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Residential Roofing Services | Morning Star Construction | Victoria TX</title>
      <meta
        name="description"
        content="Morning Star Construction offers professional residential roofing services in Victoria, TX. Asphalt shingles, metal, wood shingles, and composite roofing installed with precision and reliability."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Residential Roofing Services | Morning Star Construction" />
      <meta
        property="og:description"
        content="Expert residential roofing in Victoria, TX. Morning Star Construction installs asphalt shingles, metal, wood shingles, and composite roofs with precision and care."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourdomain.com/roofing" />
      <meta property="og:image" content="/og-roofing.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Residential Roofing Services | Morning Star Construction" />
      <meta
        name="twitter:description"
        content="Professional residential roofing services in Victoria, TX. Asphalt shingles, metal, wood shingles, and composite roofs installed with precision."
      />
      <meta name="twitter:image" content="/og-roofing.jpg" />

      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Morning Star Construction",
            "image": "https://www.yourdomain.com/og-roofing.jpg",
            "url": "https://www.yourdomain.com/roofing",
            "telephone": "(361) 788-3004",
            "email": "morningstarconstrcut@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Victoria",
              "addressRegion": "TX",
              "postalCode": "Your ZIP Code",
              "addressCountry": "US"
            },
            "description":
              "Professional residential roofing services in Victoria, TX. Skilled installation of asphalt shingles, metal, wood shingles, and composite roofing.",
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
            "areaServed": {
              "@type": "City",
              "name": "Victoria"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": "Residential Roofing Services"
            }
          }),
        }}
      />
    </>
  );
}
