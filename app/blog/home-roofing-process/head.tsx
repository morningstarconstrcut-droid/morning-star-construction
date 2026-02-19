import Head from "next/head";

export default function HomeRoofingProcessHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Step-by-Step Home Roofing Process Explained | Morning Star Construction</title>
      <meta name="description" content="Learn the step-by-step residential roofing process in Victoria, TX. From inspection to final walkthrough, understand how professionals install durable, safe, and high-quality roofs." />
      <meta name="keywords" content="home roofing process, residential roofing, roof installation, Victoria TX roofing, roofing steps, roof inspection, roofing maintenance, roof materials" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Step-by-Step Home Roofing Process Explained | Morning Star Construction" />
      <meta property="og:description" content="Discover each step of a professional home roofing process in Victoria, TX. From inspection to final walkthrough, ensure a durable and safe roof for your home." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/home-roofing-process" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/roofing-process.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Step-by-Step Home Roofing Process Explained | Morning Star Construction" />
      <meta name="twitter:description" content="Learn the step-by-step residential roofing process in Victoria, TX. From inspection to final walkthrough, understand how professionals install durable, safe, and high-quality roofs." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/roofing-process.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Step-by-Step Home Roofing Process Explained",
            "description": "Learn the step-by-step residential roofing process in Victoria, TX. From inspection to final walkthrough, understand how professionals install durable, safe, and high-quality roofs.",
            "image": "https://www.morningstarconstruction.com/blog/roofing-process.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/home-roofing-process"
            }
          }),
        }}
      />
    </Head>
  );
}
