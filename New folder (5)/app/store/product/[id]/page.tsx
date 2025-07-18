"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

const products = [
  {
    id: "1",
    name: "Photographing Wild eBook",
    image: "/placeholder.svg?height=600&width=400",
    price: 20,
    fullDescription:
      "Introducing 'Photographing Wild' Paul's 122 page eBook with 16 lessons for mastering compelling photographs. Including some of his favourite images and stories about what he does when he's in the field. If you want to ask Paul how to make stronger photographs, discover the things he would do now 30 years later, no techniques and no formulae, just real-world methods to help you tell better stories and make images so powerful they can't be ignored.",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "2",
    name: "Arctic Fox Print",
    image: "/placeholder.svg?height=600&width=400",
    price: 250,
    fullDescription:
      "A stunning museum-quality print featuring an Arctic Fox in its natural winter habitat. This photograph captures the ethereal beauty of the Arctic landscape and the fox's incredible adaptation to extreme conditions. Printed on archival paper with premium inks for lasting quality.",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "3",
    name: "Bengal Tiger Portrait",
    image: "/placeholder.svg?height=600&width=400",
    price: 350,
    fullDescription:
      "An intense and powerful portrait of a Bengal Tiger, capturing the raw beauty and strength of one of nature's most magnificent predators. This image showcases the tiger's piercing gaze and distinctive markings in incredible detail.",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { dispatch } = useCart()
  const { toast } = useToast()

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Button onClick={() => router.push("/store")} className="mt-4">
          Back to Store
        </Button>
      </div>
    )
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-24 md:px-6">
      <Button onClick={() => router.push("/store")} variant="ghost" className="mb-8 rounded-none">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Store
      </Button>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="mb-4 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={800}
              className="h-[500px] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.gallery.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={400}
                  height={300}
                  className="h-24 w-full object-cover cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-4 text-2xl font-bold text-primary">US${product.price}</p>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 rounded-none border border-border bg-background px-3 py-2 text-center"
            />
            <Button onClick={addToCart} className="rounded-none flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <p>• High-quality digital product</p>
            <p>• Instant download after purchase</p>
            <p>• 30-day money-back guarantee</p>
            <p>• Customer support included</p>
          </div>
        </div>
      </div>
    </div>
  )
}
