import Head from "next/head";

export default function SpotStructuralIssuesHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>How to Spot Structural Issues Before They Become Costly | Morning Star Construction</title>
      <meta name="description" content="Learn how to identify structural issues in your Victoria, TX home before they become expensive. Tips on foundation cracks, roof problems, water damage, and pest damage." />
      <meta name="keywords" content="structural issues, home inspection, Victoria TX, foundation cracks, roof leaks, water damage, pest damage, home maintenance, construction tips" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="How to Spot Structural Issues Before They Become Costly | Morning Star Construction" />
      <meta property="og:description" content="Discover early warning signs of structural issues in your Victoria, TX home. Prevent expensive repairs by learning what to inspect and when to call professionals." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/spot-structural-issues" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/structural-issues.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="How to Spot Structural Issues Before They Become Costly | Morning Star Construction" />
      <meta name="twitter:description" content="Learn how to identify structural issues in your Victoria, TX home before they become expensive. Tips on foundation cracks, roof problems, water damage, and pest damage." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/structural-issues.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How to Spot Structural Issues Before They Become Costly",
            "description": "Learn how to identify structural issues in your Victoria, TX home before they become expensive. Tips on foundation cracks, roof problems, water damage, and pest damage.",
            "image": "https://www.morningstarconstruction.com/blog/structural-issues.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/spot-structural-issues"
            }
          }),
        }}
      />
    </Head>
  );
}
