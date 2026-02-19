export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Interior Construction & Finishes | Morning Star Construction | Victoria TX</title>
      <meta
        name="description"
        content="Morning Star Construction offers professional interior construction in Victoria, TX. Drywall, flooring, tile, trim, painting, and detailed interior finishes done with quality and precision."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content="Interior Construction & Finishes | Morning Star Construction" />
      <meta
        property="og:description"
        content="Expert interior construction services in Victoria, TX. Drywall, flooring, tile, trim, painting, and detailed interior finishes completed with precision and quality craftsmanship."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourdomain.com/interior" />
      <meta property="og:image" content="/og-interior.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Interior Construction & Finishes | Morning Star Construction" />
      <meta
        name="twitter:description"
        content="Victoria, TX interior construction specialists. Drywall, flooring, tile, trim, painting, and detailed finishes done right."
      />
      <meta name="twitter:image" content="/og-interior.jpg" />

      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Morning Star Construction",
            "image": "https://www.yourdomain.com/og-interior.jpg",
            "url": "https://www.yourdomain.com/interior",
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
              "Professional interior construction in Victoria, TX. Services include drywall, flooring, tile, trim, painting, and detailed interior finishes delivered with quality and precision.",
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
            "areaServed": {
              "@type": "City",
              "name": "Victoria"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": "Interior Construction & Finishing Services"
            }
          }),
        }}
      />
    </>
  );
}
