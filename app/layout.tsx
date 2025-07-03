import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Smart Fit - Promoção Julho 2024 | Planos Especiais",
  description:
    "Aproveite a promoção exclusiva de julho da Smart Fit! Plano Black por R$ 0,00/mês nos primeiros 3 meses. Venha treinar na maior rede de academias da América Latina.",
  keywords: "Smart Fit, academia, promoção julho, plano black, musculação, ginástica, fitness",
  authors: [{ name: "Smart Fit" }],
  creator: "Smart Fit",
  publisher: "Smart Fit",
  robots: "index, follow",
  openGraph: {
    title: "Smart Fit - Promoção Julho 2024",
    description: "Plano Black por R$ 0,00/mês nos primeiros 3 meses! Não perca essa oportunidade única.",
    url: "https://smartpromojulho.com",
    siteName: "Smart Fit Promoção Julho",
    images: [
      {
        url: "/smart-fit-new-logo.png",
        width: 1200,
        height: 630,
        alt: "Smart Fit - Promoção Julho 2024",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Fit - Promoção Julho 2024",
    description: "Plano Black por R$ 0,00/mês nos primeiros 3 meses!",
    images: ["/smart-fit-new-logo.png"],
  },
  alternates: {
    canonical: "https://smartpromojulho.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://smartpromojulho.com" />
        <meta name="theme-color" content="#FACC15" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
