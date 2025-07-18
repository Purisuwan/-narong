"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const prints = [
  {
    id: 1,
    name: "Polar Reflections",
    image: "/placeholder.svg?height=800&width=600",
    description:
      "Its image mirrored against the water surface, a polar bear dives below a pan of ice. The continuous loss of sea ice in the polar regions is just one impact of climate change. Without this platform from which polar bears forage on seals, there are shorter hunting seasons, making it increasingly difficult to survive. Bears like this huge male have a much higher chance of survival than younger bears.",
    location: "Nunavut, Canada, 2006",
    dimensions: "31 × 46.5 in / 78.7 × 118.1 cm",
    edition: "Edition of 15",
    sizes: ["16×24 inches", "24×36 inches", "31×46.5 inches"],
  },
  {
    id: 2,
    name: "Arctic Solitude",
    image: "/placeholder.svg?height=800&width=600",
    description:
      "A lone polar bear contemplates the vast Arctic landscape as the midnight sun casts ethereal light across the ice. This powerful image captures the solitude and majesty of the Arctic's apex predator in its rapidly changing environment.",
    location: "Svalbard, Norway, 2018",
    dimensions: "24 × 36 in / 61 × 91.4 cm",
    edition: "Edition of 25",
    sizes: ["16×24 inches", "24×36 inches", "32×48 inches"],
  },
  {
    id: 3,
    name: "Eyes of the Wild",
    image: "/placeholder.svg?height=800&width=600",
    description:
      "An intimate portrait of a Bengal tiger, capturing the intensity and beauty of one of nature's apex predators. This photograph showcases the tiger's piercing gaze and distinctive markings in incredible detail, taken during a rare encounter in the forests of India.",
    location: "Ranthambore, India, 2019",
    dimensions: "20 × 30 in / 50.8 × 76.2 cm",
    edition: "Edition of 20",
    sizes: ["16×24 inches", "20×30 inches", "24×36 inches"],
  },
  {
    id: 4,
    name: "Frozen Moment",
    image: "/placeholder.svg?height=800&width=600",
    description:
      "Emperor penguins huddle together against the Antarctic wind, a testament to survival and community. This image captures the incredible resilience of these remarkable birds in one of Earth's harshest environments.",
    location: "Antarctica, 2017",
    dimensions: "18 × 24 in / 45.7 × 61 cm",
    edition: "Edition of 30",
    sizes: ["12×16 inches", "18×24 inches", "24×32 inches"],
  },
  {
    id: 5,
    name: "Underwater Ballet",
    image: "/placeholder.svg?height=800&width=600",
    description:
      "A graceful sea turtle glides through crystal-clear waters, surrounded by a school of tropical fish. This underwater scene captures the serene beauty and delicate balance of marine ecosystems.",
    location: "Great Barrier Reef, Australia, 2020",
    dimensions: "24 × 32 in / 61 × 81.3 cm",
    edition: "Edition of 12",
    sizes: ["16×20 inches", "24×32 inches", "30×40 inches"],
  },
]

export default function PrintDetailPage() {
  const params = useParams()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    message: "",
    newsletter: false,
  })

  const print = prints.find((p) => p.id === Number.parseInt(params.id as string))

  if (!print) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Print not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Limited Editions
          </Link>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call to Google Sheets for limited edition inquiries
      const inquiryData = {
        ...formData,
        printName: print.name,
        printId: print.id,
        inquiryDate: new Date().toISOString(),
        type: "limited_edition_inquiry",
      }

      // Here you would send to Google Sheets API (different sheet from store)
      console.log("Limited Edition Inquiry data:", inquiryData)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Inquiry Sent Successfully!",
        description: "Thank you for your interest. We will contact you soon with availability and pricing information.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        message: "",
        newsletter: false,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your inquiry. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing */}
      <div className="h-20"></div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <Link href="#" className="hover:text-black transition-colors">
              ← PREVIOUS
            </Link>
            <Link href="/blog" className="hover:text-black transition-colors">
              VIEW ALL
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              NEXT →
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Print Image */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src={print.image || "/placeholder.svg"}
                alt={print.name}
                width={600}
                height={800}
                className="w-full h-full object-cover clickable-image"
              />
            </div>
          </div>

          {/* Print Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{print.name}</h1>
              <p className="text-gray-600 text-sm mb-4">{print.location}</p>
              <p className="text-gray-500 text-sm">
                {print.dimensions} | {print.edition}
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">{print.description}</p>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-gray-900">Available Print Sizes:</h3>
              <ul className="space-y-1">
                {print.sizes.map((size, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {size}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-8">
              <p className="text-sm text-gray-600 mb-6">
                For information regarding availability and pricing of limited edition prints in this series, please
                contact us using the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="rounded-none border-gray-300"
                      placeholder="First"
                      required
                    />
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="rounded-none border-gray-300"
                      placeholder="Last"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-none border-gray-300 mt-2"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Please double check your email for accuracy.</p>
                </div>

                <div>
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Location *
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="rounded-none border-gray-300 mt-2"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Please provide your country and state/province if you are in Canada. States please also say which
                    state so we can locate a Canada, Minnesota or United States New York or Vancouver.
                  </p>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-none border-gray-300 mt-2"
                    rows={4}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletter" className="text-sm text-gray-600 leading-relaxed">
                    Subscribe to my Paul Nicklen newsletter and join the adventure.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-none bg-black hover:bg-gray-800 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-16 pt-8 border-t">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <Link href="#" className="hover:text-black transition-colors">
              ← PREVIOUS
            </Link>
            <Link href="/blog" className="hover:text-black transition-colors">
              VIEW ALL
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              NEXT →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
