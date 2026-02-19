import Head from "next/head";

export default function SeasonalMaintenanceHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Seasonal Maintenance Tips for Texas Homes | Morning Star Construction</title>
      <meta name="description" content="Keep your Victoria, TX home safe, efficient, and looking great year-round with seasonal maintenance tips. Learn spring, summer, fall, and winter checklists for your home." />
      <meta name="keywords" content="seasonal home maintenance, Victoria TX home tips, spring maintenance, summer maintenance, fall maintenance, winter maintenance, home inspections, roof maintenance, HVAC maintenance, plumbing tips" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Seasonal Maintenance Tips for Texas Homes | Morning Star Construction" />
      <meta property="og:description" content="Protect your Victoria, TX home year-round with seasonal maintenance checklists. Spring, summer, fall, and winter home tips for safety and efficiency." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/seasonal-maintenance-tips" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/seasonal-maintenance-texas.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Seasonal Maintenance Tips for Texas Homes | Morning Star Construction" />
      <meta name="twitter:description" content="Keep your Victoria, TX home safe, efficient, and looking great year-round with seasonal maintenance tips. Spring, summer, fall, and winter checklists for your home." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/seasonal-maintenance-texas.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Seasonal Maintenance Tips for Texas Homes",
            "description": "Keep your Victoria, TX home safe, efficient, and looking great year-round with seasonal maintenance tips. Learn spring, summer, fall, and winter checklists for your home.",
            "image": "https://www.morningstarconstruction.com/blog/seasonal-maintenance-texas.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/seasonal-maintenance-tips"
            }
          }),
        }}
      />
    </Head>
  );
}
