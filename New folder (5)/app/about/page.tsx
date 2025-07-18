import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Wildlife photographer in the field"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">About Me</h1>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  I've been capturing wildlife photography for over 15 years, traveling to some of the most remote and
                  challenging environments on Earth. My journey began with a simple desire to document the beauty of
                  nature, but quickly evolved into a mission to raise awareness about conservation and the fragility of
                  our ecosystems.
                </p>
                <p>
                  Having worked across seven continents, I've had the privilege of witnessing some of nature's most
                  extraordinary moments – from polar bears hunting on Arctic ice to the great migration across the
                  Serengeti. Each expedition presents unique challenges and rewards, pushing the boundaries of both
                  technical skill and physical endurance.
                </p>
                <p>
                  My work has been featured in National Geographic, BBC Wildlife Magazine, and numerous international
                  exhibitions. I've collaborated with leading conservation organizations including WWF and The Nature
                  Conservancy to create impactful visual stories that inspire action.
                </p>
                <p>
                  Beyond photography, I lead workshops and expeditions for aspiring wildlife photographers, sharing
                  techniques and approaches that respect wildlife while capturing compelling images. A percentage of all
                  print sales goes directly to conservation efforts in the regions where the images were taken.
                </p>
              </div>
              <div className="mt-8 flex space-x-4">
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
              </div>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Wildlife photographer portrait"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="On location in the Arctic"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Photographing wildlife"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Equipment & Approach</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-xl font-medium">My Gear</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Primary Camera: Canon EOS R5</li>
                <li>Secondary Camera: Sony Alpha a9 II</li>
                <li>Lenses: 600mm f/4, 100-400mm f/4.5-5.6, 24-70mm f/2.8</li>
                <li>Underwater Housing: Aquatica for specific marine expeditions</li>
                <li>Tripods: Gitzo carbon fiber series</li>
                <li>Drones: DJI Mavic 3 Pro for aerial perspectives</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">My Approach</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  My photography philosophy centers on patience, respect, and minimal intervention. I often spend weeks
                  in a single location, learning animal behaviors and waiting for the perfect moment rather than forcing
                  an interaction.
                </p>
                <p>
                  I believe in ethical wildlife photography that prioritizes the welfare of animals and their habitats.
                  This means maintaining appropriate distances, never baiting wildlife, and being conscious of my
                  environmental impact during expeditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Awards & Recognition</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                award: "Wildlife Photographer of the Year",
                category: "Animal Portraits",
                year: "2022",
                organization: "Natural History Museum",
              },
              {
                award: "Environmental Photography Award",
                category: "Conservation Impact",
                year: "2021",
                organization: "United Nations Environment Programme",
              },
              {
                award: "National Geographic Explorer",
                category: "Photography Fellow",
                year: "2020-Present",
                organization: "National Geographic Society",
              },
              {
                award: "International Conservation Photographer",
                category: "Marine Life",
                year: "2019",
                organization: "Ocean Geographic Society",
              },
              {
                award: "Fine Art Photography Awards",
                category: "Wildlife",
                year: "2018",
                organization: "FAPA",
              },
              {
                award: "Sony World Photography Awards",
                category: "Natural World",
                year: "2017",
                organization: "World Photography Organisation",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                <h3 className="font-medium">{item.award}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.category} • {item.year}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let's Connect</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Interested in collaborations, workshops, or licensing my work? I'm always open to discussing new projects
              and opportunities.
            </p>
            <div className="mt-8">
              <Button asChild className="rounded-none">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
