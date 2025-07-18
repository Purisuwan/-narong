import Image from "next/image"
import Link from "next/link"

export default function LimitedEditionPage() {
  const limitedEditionPrints = [
    {
      id: 1,
      title: "Polar Reflections",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Arctic Solitude",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "Eyes of the Wild",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      title: "Frozen Moment",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      title: "Underwater Ballet",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      title: "Mountain Majesty",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      title: "Arctic Hunter",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      title: "Serengeti Sunset",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 9,
      title: "Leopard's Gaze",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      title: "Ocean's Depth",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      title: "Wings of Freedom",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      title: "Ice Cathedral",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 13,
      title: "Tundra Dreams",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 14,
      title: "Coral Symphony",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 15,
      title: "Midnight Sun",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 16,
      title: "Gentle Giants",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 17,
      title: "Frozen Wilderness",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 18,
      title: "Ocean Predator",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 19,
      title: "Arctic Grace",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 20,
      title: "Savanna Pride",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 21,
      title: "Polar Journey",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 22,
      title: "Marine Ballet",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 23,
      title: "Frozen Lake",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 24,
      title: "Arctic Light",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 25,
      title: "Ocean Guardian",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 26,
      title: "Tundra Life",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 27,
      title: "Polar Beauty",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 28,
      title: "Arctic Storm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 29,
      title: "Ocean Mystery",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 30,
      title: "Wilderness Echo",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 31,
      title: "Frozen Dreams",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 32,
      title: "Arctic Whisper",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 33,
      title: "Ocean Depths",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 34,
      title: "Polar Silence",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 35,
      title: "Tundra Spirit",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 36,
      title: "Arctic Dawn",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 37,
      title: "Ocean Soul",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 38,
      title: "Frozen Heart",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 39,
      title: "Polar Wind",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 40,
      title: "Arctic Memory",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 41,
      title: "Ocean Dream",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 42,
      title: "Tundra Song",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 43,
      title: "Polar Magic",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 44,
      title: "Arctic Wonder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 45,
      title: "Ocean Peace",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 46,
      title: "Frozen Time",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 47,
      title: "Polar Dance",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 48,
      title: "Arctic Harmony",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 49,
      title: "Ocean Rhythm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 50,
      title: "Tundra Embrace",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 51,
      title: "Polar Serenity",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 52,
      title: "Arctic Calm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 53,
      title: "Ocean Tranquil",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 54,
      title: "Frozen Eternity",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 55,
      title: "Polar Essence",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 56,
      title: "Arctic Pure",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 57,
      title: "Ocean Flow",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 58,
      title: "Tundra Breath",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 59,
      title: "Polar Truth",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 60,
      title: "Arctic Soul",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing */}
      <div className="h-20"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Grid of prints */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {limitedEditionPrints.map((print) => (
            <Link key={print.id} href={`/blog/print/${print.id}`} className="group block">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-2">
                <Image
                  src={print.image || "/placeholder.svg"}
                  alt={print.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 clickable-image"
                />
              </div>
              <h3 className="text-sm text-gray-700 group-hover:text-black transition-colors">{print.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
