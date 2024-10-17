import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Aviral Shastri | Software Engineer",
  description: "Portfolio of Aviral Shastri, showcasing computer science projects. Explore my work and skills.",
  keywords: ["web developer", "designer", "portfolio", "Aviral Shastri", "frontend", "UI/UX"],
  authors: [{ name: "Aviral Shastri" }],
  openGraph: {
    title: "Aviral Shastri | Software Engineer",
    description: "Portfolio of Aviral Shastri, showcasing computer science projects. Explore my work and skills.",
    url: "https://www.aviralshastri.com",
    siteName: "Aviral Shastri Portfolio",
    images: [
      {
        url: "https://www.aviralshastri.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aviral Shastri Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviral Shastri | Software Engineer",
    description: "Portfolio of Aviral Shastri, showcasing computer science projects. Explore my work and skills.",
    images: ["https://www.aviralshastri.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.aviralshastri.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}