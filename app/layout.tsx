import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "InfiniteHealings - Your Path to Inner Peace",
  description:
    "Embark on a transformative journey to inner peace and wellness with InfiniteHealings. Explore our holistic approach to healing, meditation, mindfulness, and therapy with InfiniteHealings.in.",
  keywords:
  "healing, wellness, meditation, mindfulness, therapy, inner peace, self-care, holistic healing, spiritual healing, emotional healing, energy healing, alternative medicine, well-being, relaxation, stress relief, self-discovery, personal growth, natural healing, mental health, emotional well-being, healing journey, body-mind-spirit, self-healing, holistic therapy, wellness center, healing practices, mindfulness meditation, holistic wellness,  infinitehealings.in, infinitehealings by simmi arora"
};

import { cn } from "@/lib/utils";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-5C1BRTRWYV"></Script>
<Script id='google-analytics'>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5C1BRTRWYV');
  
  `}
  
</Script>

        <title>
          InfiniteHealings - Your Path to Inner Peace | Home Page
        </title>
        <meta
          name="description"
          content="Embark on a transformative journey to inner peace and wellness with InfiniteHealings. Explore our holistic approach to healing, meditation, mindfulness, and therapy with InfiniteHealings.in. "
        />
        <meta name="keywords" content="healing, wellness, meditation, mindfulness, therapy, inner peace, self-care, holistic healing, spiritual healing, emotional healing, energy healing, alternative medicine, well-being, relaxation, stress relief, self-discovery, personal growth, natural healing, mental health, emotional well-being, healing journey, body-mind-spirit, self-healing, holistic therapy, wellness center, healing practices, mindfulness meditation, holistic wellness, infinitehealings.in, infinitehealings by simmi arora" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
