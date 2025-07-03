import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full py-4 bg-slate-50">
      <div className="container mx-auto flex items-center justify-center bg-slate-50">
        <Link href="/">
          <Image
            src="/smart-fit-new-logo.png"
            alt="Smart Fit Logo"
            width={200}
            height={60}
            priority
            className="h-auto"
          />
        </Link>
      </div>
    </header>
  )
}
