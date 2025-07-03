import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full py-4 bg-slate-50">
      <div className="container mx-auto flex items-center justify-center bg-slate-50">
        <Link href="https://smartpromojulho.com" className="flex items-center">
          <Image
            src="/smart-fit-new-logo.png"
            alt="Smart Fit - Promoção Julho 2024"
            width={200}
            height={60}
            priority
            className="h-auto"
          />
        </Link>
      </div>
      {/* Schema.org structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Smart Fit",
            url: "https://smartpromojulho.com",
            logo: "https://smartpromojulho.com/smart-fit-new-logo.png",
            description: "Maior rede de academias da América Latina",
            sameAs: [
              "https://www.facebook.com/SmartFit",
              "https://www.instagram.com/smartfit",
              "https://www.youtube.com/smartfit",
            ],
          }),
        }}
      />
    </header>
  )
}
