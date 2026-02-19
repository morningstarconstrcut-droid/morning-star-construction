import Head from "next/head";

export default function RemodelingTrendsHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Top 5 Home Remodeling Trends in 2026 | Morning Star Construction</title>
      <meta name="description" content="Discover the top 5 home remodeling trends for 2026. From smart home integration to sustainable materials, stay ahead in Victoria, TX with expert remodeling tips." />
      <meta name="keywords" content="home remodeling trends 2026, Victoria TX remodeling, smart home upgrades, sustainable materials, open-concept spaces, energy-efficient home, bold colors" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Top 5 Home Remodeling Trends in 2026 | Morning Star Construction" />
      <meta property="og:description" content="Stay ahead of the curve with the hottest home remodeling trends in 2026 for Victoria, TX. Learn about smart home upgrades, sustainable materials, and more." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/remodeling-trends-2026" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/remodeling-trends-2026.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Top 5 Home Remodeling Trends in 2026 | Morning Star Construction" />
      <meta name="twitter:description" content="Discover the top 5 home remodeling trends for 2026. From smart home integration to sustainable materials, stay ahead in Victoria, TX with expert remodeling tips." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/remodeling-trends-2026.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Top 5 Home Remodeling Trends in 2026",
            "description": "Discover the top 5 home remodeling trends for 2026. From smart home integration to sustainable materials, stay ahead in Victoria, TX with expert remodeling tips.",
            "image": "https://www.morningstarconstruction.com/blog/remodeling-trends-2026.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/remodeling-trends-2026"
            }
          }),
        }}
      />
    </Head>
  );
}
