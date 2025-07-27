import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "maharana pratap fitness | Best Gym & Fitness Center",
  description:
    "Join maharana pratap fitness – the best gym in town. Offering expert personal training, modern equipment, and tailored fitness programs to help you reach your goals.",
  keywords: [
    "gym",
    "fitness",
    "maharana pratap fitness",
    "personal training",
    "workouts",
    "weight loss",
    "muscle building",
    "fitness center",
    "maharanafitness.online",
  ],
  authors: [{ name: "maharana pratap fitness Team", url: "https://maharanafitness.online" }],
  creator: "maharana pratap fitness",
  metadataBase: new URL("https://maharanafitness.online"),
  openGraph: {
    title: "maharana pratap fitness | Premium Gym & Training Center",
    description:
      "Experience the best fitness programs and state-of-the-art equipment at maharana pratap fitness. Your transformation starts here!",
    url: "https://maharanafitness.online",
    siteName: "maharana pratap fitness",
    images: [
      {
        url: "https://maharanafitness.online/gym2.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "maharana pratap fitness Gym Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
