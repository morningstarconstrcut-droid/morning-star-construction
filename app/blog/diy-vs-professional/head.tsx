import Head from "next/head";

export default function DiyVsProfessionalHead() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>DIY vs Professional Renovation | Morning Star Construction Victoria TX</title>
      <meta name="description" content="Compare DIY and professional home renovation projects in Victoria, TX. Learn the pros, cons, and tips to decide the best approach for your home improvement." />
      <meta name="keywords" content="DIY renovation, professional renovation, Victoria TX home improvement, home remodeling tips, DIY vs contractor, home renovation guide, remodeling Victoria TX" />
      <meta name="author" content="Morning Star Construction" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="DIY vs Professional Renovation | Morning Star Construction Victoria TX" />
      <meta property="og:description" content="Compare DIY and professional home renovation projects in Victoria, TX. Learn the pros, cons, and tips to make the right choice for your home." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.morningstarconstruction.com/blog/diy-vs-professional-renovation" />
      <meta property="og:image" content="https://www.morningstarconstruction.com/blog/diy-vs-professional.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DIY vs Professional Renovation | Morning Star Construction Victoria TX" />
      <meta name="twitter:description" content="Compare DIY and professional home renovation projects in Victoria, TX. Learn the pros, cons, and tips to make the best choice for your home." />
      <meta name="twitter:image" content="https://www.morningstarconstruction.com/blog/diy-vs-professional.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "DIY vs. Professional Renovation: What You Should Know",
            "description": "Compare DIY and professional home renovation projects in Victoria, TX. Learn the pros, cons, and tips to decide the best approach for your home improvement.",
            "image": "https://www.morningstarconstruction.com/blog/diy-vs-professional.jpg",
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
              "@id": "https://www.morningstarconstruction.com/blog/diy-vs-professional-renovation"
            }
          }),
        }}
      />
    </Head>
  );
}
