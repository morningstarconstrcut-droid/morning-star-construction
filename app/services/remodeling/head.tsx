export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Remodeling & Renovations | Morning Star Construction | Victoria TX</title>
      <meta
        name="description"
        content="Morning Star Construction provides expert home remodeling and renovations in Victoria, TX. Kitchen remodels, bathroom upgrades, additions, and structural improvements done with precision and quality."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Remodeling & Renovations | Morning Star Construction" />
      <meta
        property="og:description"
        content="Expert home remodeling and renovations in Victoria, TX. Morning Star Construction handles kitchen remodels, bathroom upgrades, additions, and structural improvements with care."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourdomain.com/remodeling" />
      <meta property="og:image" content="/og-remodeling.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Remodeling & Renovations | Morning Star Construction" />
      <meta
        name="twitter:description"
        content="Professional home remodeling and renovations in Victoria, TX. Kitchen, bathroom, additions, and structural improvements completed with precision."
      />
      <meta name="twitter:image" content="/og-remodeling.jpg" />

      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Morning Star Construction",
            "image": "https://www.yourdomain.com/og-remodeling.jpg",
            "url": "https://www.yourdomain.com/remodeling",
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
              "Expert home remodeling and renovations in Victoria, TX. Skilled services include kitchen remodels, bathroom upgrades, additions, and structural improvements.",
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
            "areaServed": {
              "@type": "City",
              "name": "Victoria"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": "Home Remodeling & Renovation Services"
            }
          }),
        }}
      />
    </>
  );
}
