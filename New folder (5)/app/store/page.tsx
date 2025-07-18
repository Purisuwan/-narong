"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Lightbox from "@/components/lightbox"

export default function StorePage() {
  const { dispatch } = useCart()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const products = [
    {
      id: "1",
      name: "Photographing Wild eBook",
      image: "/placeholder.svg?height=400&width=300",
      description: "122 page eBook with 16 lessons for mastering compelling photographs.",
      price: 20,
      fullDescription:
        "Introducing 'Photographing Wild' Paul's 122 page eBook with 16 lessons for mastering compelling photographs. Including some of his favourite images and stories about what he does when he's in the field. If you want to ask Paul how to make stronger photographs, discover the things he would do now 30 years later, no techniques and no formulae, just real-world methods to help you tell better stories and make images so powerful they can't be ignored.",
    },
    {
      id: "2",
      name: "Arctic Fox Print",
      image: "/placeholder.svg?height=400&width=300",
      description: "Museum-quality print of Arctic Fox in winter landscape.",
      price: 250,
      fullDescription:
        "A stunning museum-quality print featuring an Arctic Fox in its natural winter habitat. This photograph captures the ethereal beauty of the Arctic landscape and the fox's incredible adaptation to extreme conditions. Printed on archival paper with premium inks for lasting quality.",
    },
    {
      id: "3",
      name: "Bengal Tiger Portrait",
      image: "/placeholder.svg?height=400&width=300",
      description: "Powerful portrait of a Bengal Tiger in its natural habitat.",
      price: 350,
      fullDescription:
        "An intense and powerful portrait of a Bengal Tiger, capturing the raw beauty and strength of one of nature's most magnificent predators. This image showcases the tiger's piercing gaze and distinctive markings in incredible detail.",
    },
    {
      id: "4",
      name: "Humpback Whale Breach",
      image: "/placeholder.svg?height=400&width=300",
      description: "Spectacular moment of a humpback whale breaching the surface.",
      price: 300,
      fullDescription:
        "A breathtaking capture of a humpback whale breaching the ocean surface, demonstrating the incredible power and grace of these marine giants. This photograph was taken during a memorable encounter in pristine Antarctic waters.",
    },
    {
      id: "5",
      name: "Mountain Gorilla Family",
      image: "/placeholder.svg?height=400&width=300",
      description: "Intimate family portrait of mountain gorillas in Rwanda.",
      price: 400,
      fullDescription:
        "An intimate family portrait of mountain gorillas in their natural habitat in the Virunga Mountains of Rwanda. This photograph captures the gentle nature and complex social bonds of these endangered primates.",
    },
    {
      id: "6",
      name: "Polar Bear Cubs",
      image: "/placeholder.svg?height=400&width=300",
      description: "Playful polar bear cubs learning to hunt on Arctic ice.",
      price: 320,
      fullDescription:
        "A heartwarming scene of polar bear cubs learning essential survival skills from their mother on the shifting Arctic ice. This image highlights both the playful nature of the cubs and the harsh realities of life in the Arctic.",
    },
  ]

  const lightboxImages = products.map((product) => ({
    id: Number.parseInt(product.id),
    src: product.image,
    title: product.name,
    description: product.description,
    category: "Wildlife Print",
    price: `$${product.price}`,
  }))

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const addToCart = (product: (typeof products)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Wildlife print collection"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Print Store</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Museum-quality prints and educational materials that support wildlife conservation
            </p>
          </div>
        </div>
      </section>

      {/* Store Navigation */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="rounded-none bg-transparent">
                All
              </Button>
              <Button variant="ghost" className="rounded-none">
                Prints
              </Button>
              <Button variant="ghost" className="rounded-none">
                Books
              </Button>
              <Button variant="ghost" className="rounded-none">
                Educational
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <select className="rounded-none border border-border bg-background px-3 py-2 text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card key={product.id} className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  />
                </div>
                <CardContent className="p-6">
                  <Link href={`/store/product/${product.id}`} className="group">
                    <h3 className="text-xl font-semibold group-hover:underline">{product.name}</h3>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-bold">${product.price}</p>
                    <Button onClick={() => addToCart(product)} className="rounded-none" size="sm">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Print Information */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-xl font-medium">Museum-Quality Prints</h3>
              <p className="mt-4 text-muted-foreground">
                All prints are produced on archival-quality fine art paper with premium pigment inks, ensuring vibrant
                colors and exceptional longevity. Each print is individually inspected and signed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Conservation Impact</h3>
              <p className="mt-4 text-muted-foreground">
                20% of all print sales are donated directly to conservation organizations working to protect the species
                and habitats featured in the images. Your purchase makes a difference.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Shipping & Framing</h3>
              <p className="mt-4 text-muted-foreground">
                Prints are carefully packaged and shipped worldwide. Custom framing options are available at checkout.
                Please allow 1-2 weeks for production and delivery of your print.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  )
}
