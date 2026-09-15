import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.novadente.clinic"),
  title: "Nova Dente | Стоматологія, якій довіряють — Мукачево",
  description:
    "Сімейна стоматологічна клініка Nova Dente у Мукачеві. Імплантація Straumann®, лікування каналів під мікроскопом, естетичні вініри, відбілювання Beyond Polus Advanced, дитяча стоматологія з седацією. Запис: +38 (066) 000 42 42.",
  keywords: [
    "стоматологія Мукачево",
    "Nova Dente",
    "імплантація зубів Мукачево",
    "Straumann Мукачево",
    "стоматолог Мукачево",
    "лікування зубів під мікроскопом",
    "дитячий стоматолог Мукачево",
    "вініри Мукачево",
    "відбілювання Beyond",
  ],
  authors: [{ name: "Nova Dente Clinic" }],
  openGraph: {
    title: "Nova Dente | Стоматологія, якій довіряють — Мукачево",
    description:
      "Турбота, професіоналізм, технології. Преміальна сімейна стоматологія в Мукачеві з міжнародними стандартами.",
    url: "https://www.novadente.clinic/",
    siteName: "Nova Dente Dental Clinic",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/clinic/hero-team.png",
        width: 1200,
        height: 630,
        alt: "Команда стоматологічної клініки Nova Dente",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning className={`${lora.variable} ${manrope.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#f9f8f4] text-[#121815] font-sans antialiased selection:bg-[#0c4134] selection:text-[#faf9f5]">
        {children}
      </body>
    </html>
  );
}

