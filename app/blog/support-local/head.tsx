import Head from "next/head";

export default function FamilyOwnedConstructionHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Supporting Local: Family-Owned Construction in Victoria, TX | Morning Star Construction</title>
      <meta name="description" content="Discover the benefits of hiring a family-owned construction company in Victoria, TX. Personalized service, local expertise, and trusted craftsmanship for your home projects." />
      <meta name="keywords" content="family-owned construction, local contractors Victoria TX, personalized construction services, trusted home builders, residential construction Victoria TX, masonry, roofing, remodeling" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Supporting Local: Family-Owned Construction in Victoria, TX | Morning Star Construction" />
      <meta property="og:description" content="Learn why choosing a family-owned construction company in Victoria, TX ensures personalized service, trusted craftsmanship, and local expertise for your home." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/family-owned-construction" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/family-owned-construction.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Supporting Local: Family-Owned Construction in Victoria, TX | Morning Star Construction" />
      <meta name="twitter:description" content="Discover the benefits of hiring a family-owned construction company in Victoria, TX. Personalized service, local expertise, and trusted craftsmanship for your home projects." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/family-owned-construction.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Supporting Local: Why Choosing a Family-Owned Construction Company Matters",
            "description": "Discover the benefits of hiring a family-owned construction company in Victoria, TX. Personalized service, local expertise, and trusted craftsmanship for your home projects.",
            "image": "https://www.morningstarconstruction.com/blog/family-owned-construction.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/family-owned-construction"
            }
          }),
        }}
      />
    </Head>
  );
}

