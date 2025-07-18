import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              WILDLIFE
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Capturing the beauty of wildlife through the lens. Dedicated to conservation and showcasing the wonders of
              our natural world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium">Pages</h3>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
                <Link href="/about" className="text-sm hover:underline">
                  About
                </Link>
                <Link href="/store" className="text-sm hover:underline">
                  Store
                </Link>
                <Link href="/blog" className="text-sm hover:underline">
                  Limited Editions
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Follow</h3>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-medium">Subscribe</h3>
              <form className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border border-r-0 border-border bg-background px-3 py-2 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="rounded-r-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wildlife Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
