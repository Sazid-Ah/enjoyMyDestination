import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Enjoy Destination | Luxury Travel & Andaman Tours",
    template: "%s | Enjoy Destination",
  },

  description:
    "Discover luxury travel experiences, Andaman island tours, honeymoon packages, family trips, and unforgettable journeys with Enjoy Destination.",

  keywords: [
    "Enjoy Destination",
    "Andaman Tour Packages",
    "Luxury Travel",
    "Island Tours",
    "Travel Agency",
    "Honeymoon Packages",
    "Family Trips",
    "Vacation Planning",
    "Travel Services",
  ],

  authors: [{ name: "Enjoy Destination" }],

  creator: "Enjoy Destination",

  metadataBase: new URL("https://www.enjoydestination.com"),

  openGraph: {
    title: "Enjoy Destination | Luxury Travel & Andaman Tours",
    description:
      "Explore breathtaking island journeys and luxury travel experiences with Enjoy Destination.",
    url: "https://www.enjoydestination.com",
    siteName: "Enjoy Destination",
    images: [
      {
        url: "/enjoylogo.png",
        width: 1200,
        height: 630,
        alt: "Enjoy Destination",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Enjoy Destination | Luxury Travel & Andaman Tours",
    description:
      "Luxury travel experiences and unforgettable island journeys.",
    images: ["/enjoylogo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", () => {
                const sections = document.querySelectorAll("section");

                const observer = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        const title = entry.target.getAttribute("data-title");

                        if (title) {
                          document.title = title + " | Enjoy Destination";
                        }
                      }
                    });
                  },
                  {
                    threshold: 0.5,
                  }
                );

                sections.forEach((section) => observer.observe(section));
              });
            `,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}