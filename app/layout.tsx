import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "../components";
export const metadata: Metadata = {
  title: "Project Shopee",
  description:
    "Discover a world of limitless creativity and collaboration with our extraordinary software project sharing website. Our platform is a dynamic, full-stack solution that brings together front-end and back-end developers, mobile app creators, website designers, computer software experts, and more. Whether you're a solo developer or part of a multidisciplinary team, our flexible and innovative environment is tailored to empower your projects.",
  keywords:
    "Next.js, React, JavaScript, Server-Side Rendering, SSR, Full-Stack, Web Development, Performance Optimization",
  applicationName: "Project Shopee",
  category: "Web Development",
  authors: [
    { name: "Deepak" },
    { name: "Samuel paul deepak" },
    { name: "samuel paul deepak's innovation company" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Project shopee",
    description:
      "A Next.js project showcasing the power of server-rendered React applications. Explore innovative features, performance optimization, and more.",
    url: "https://example.com/nextjs-project",
    siteName: "Project Shopee",
    images: [{ url: "https://example.com/nextjs-project" }],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Next.js Showcase" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="True" />
        <meta
          name="keywords"
          content="Next.js, React, Server-Side Rendering, Web Development"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Next.js Showcase" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Next.js Project Showcase" />
        <meta
          name="twitter:description"
          content="A Next.js project showcasing the power of server-rendered React applications. Explore innovative features, performance optimization, and more."
        />
        <meta
          name="twitter:image"
          content="https://example.com/nextjs-image.jpg"
        />
        <link rel="canonical" href="https://example.com/nextjs-project" />
        <link rel="alternate" hrefLang="en" href="https://example.com/en" />
        <link rel="alternate" hrefLang="es" href="https://example.com/es" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
