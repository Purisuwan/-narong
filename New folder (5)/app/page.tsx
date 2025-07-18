import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Wildlife hero image"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Capturing the Wild</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Documenting the beauty and fragility of our natural world through the lens
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-none">
              <Link href="/store">View Gallery</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none bg-transparent text-white border-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Galleries */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Galleries</h2>
              <p className="mt-2 text-muted-foreground">Explore the latest collections from around the world</p>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href="/store" className="flex items-center gap-2">
                View All Collections
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Arctic Wilderness",
                image: "/placeholder.svg?height=600&width=800",
                description: "The untouched beauty of the polar regions",
              },
              {
                title: "African Savanna",
                image: "/placeholder.svg?height=600&width=800",
                description: "The majestic wildlife of the African plains",
              },
              {
                title: "Ocean Depths",
                image: "/placeholder.svg?height=600&width=800",
                description: "Exploring the mysteries beneath the waves",
              },
            ].map((gallery, index) => (
              <Link key={index} href="/store" className="group relative overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={gallery.image || "/placeholder.svg"}
                    alt={gallery.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium">{gallery.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{gallery.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium">
                    Explore
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-square overflow-hidden md:aspect-auto md:h-full">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Wildlife photographer"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About the Photographer</h2>
              <p className="mt-6 text-muted-foreground">
                With over 15 years of experience documenting wildlife across seven continents, I've dedicated my career
                to capturing the beauty of our natural world and raising awareness about conservation efforts.
              </p>
              <p className="mt-4 text-muted-foreground">
                My work has been featured in National Geographic, BBC Wildlife, and numerous international exhibitions.
                I believe in the power of photography to inspire change and protect our planet's most vulnerable
                species.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-none bg-transparent">
                  <Link href="/about">Read My Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Limited Edition Prints</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Bring the beauty of wildlife into your home with museum-quality prints. Each purchase supports
              conservation efforts worldwide.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Arctic Fox",
                image: "/placeholder.svg?height=600&width=500",
                price: "$250",
              },
              {
                title: "Bengal Tiger",
                image: "/placeholder.svg?height=600&width=500",
                price: "$350",
              },
              {
                title: "Humpback Breach",
                image: "/placeholder.svg?height=600&width=500",
                price: "$300",
              },
              {
                title: "Mountain Gorilla",
                image: "/placeholder.svg?height=600&width=500",
                price: "$400",
              },
            ].map((product, index) => (
              <Link key={index} href="/store" className="group">
                <div className="overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={500}
                    height={600}
                    className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-medium">{product.title}</h3>
                  <p>{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild className="rounded-none">
              <Link href="/store">Shop All Prints</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Limited Edition Prints</h2>
              <p className="mt-2 text-muted-foreground">Exclusive collector pieces with compelling stories</p>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href="/blog" className="flex items-center gap-2">
                View All Editions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tracking Polar Bears in the Arctic",
                image: "/placeholder.svg?height=400&width=600",
                date: "July 10, 2023",
                excerpt:
                  "An unforgettable expedition to document the lives of polar bears as they navigate a changing landscape.",
              },
              {
                title: "The Challenge of Underwater Photography",
                image: "/placeholder.svg?height=400&width=600",
                date: "June 22, 2023",
                excerpt:
                  "Diving into the technical and physical challenges of capturing marine life in their natural habitat.",
              },
              {
                title: "Conservation Efforts in the Amazon",
                image: "/placeholder.svg?height=400&width=600",
                date: "May 15, 2023",
                excerpt: "Working with local communities to protect one of Earth's most biodiverse regions.",
              },
            ].map((post, index) => (
              <Link key={index} href="/blog" className="group overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h3 className="mt-2 text-xl font-medium group-hover:underline">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-sm font-medium">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the Journey</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Subscribe to receive updates on new galleries, behind-the-scenes content, and exclusive offers on limited
              edition prints.
            </p>
            <form className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-none border border-border bg-background px-4 py-2"
                required
              />
              <Button type="submit" className="rounded-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
