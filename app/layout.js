import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"], // Specify the character subsets
  weight: ["400", "700"], // Specify the font weights you need
  style: ["normal", "italic"], // Optional: Include italic styles if needed
  display: "swap", // Optional: Use font-display swap for better performance
});

export const metadata = {
  title: "Yogesh Vishwakarma - Developer, Designer, and Innovator",
  description:
    "Explore the portfolio of Yogesh Vishwakarma, a passionate developer and designer creating innovative digital solutions.",
  keywords:
    "Yogesh Vishwakarma, developer, portfolio, web design, web development, React, Next.js",
  author: "Yogesh Vishwakarma",
  robots: "index, follow", // Instruct search engines to index and follow the pages
  openGraph: {
    title: "Yogesh Vishwakarma - Developer, Designer, and Innovator",
    description:
      "Explore the portfolio of Yogesh Vishwakarma, a passionate developer and designer creating innovative digital solutions.",
    url: "https://your-website.com", // Replace with your actual website URL
    image: "/path-to-image.jpg", // Add an image to enhance the preview
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Choose the card type (e.g., "summary", "summary_large_image")
    site: "@yourtwitterhandle", // Replace with your actual Twitter handle
    title: "Yogesh Vishwakarma - Developer, Designer, and Innovator",
    description:
      "Explore the portfolio of Yogesh Vishwakarma, a passionate developer and designer creating innovative digital solutions.",
    image: "/path-to-image.jpg", // Add an image for Twitter preview
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yogesh Vishwakarma",
    jobTitle: "Web Developer & Designer",
    url: "https://your-website.com", // Replace with your actual website URL
    sameAs: [
      "https://www.linkedin.com/in/yourlinkedin",
      "https://twitter.com/yourtwitterhandle",
      "https://github.com/yourgithubhandle",
    ], // Add links to your social profiles
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO meta tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.structuredData),
          }}
        />
      </head>
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
