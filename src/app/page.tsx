import { SimilarTripCard } from "@/components/similar-trip-card"

export default function Home() {
  const tripData = {
    image: "/tropicalbeach.jpg",
    title: "Tropical Island Getaway in Maldives",
    description:
      "Join us for an unforgettable beach vacation! Relax by the turquoise waters, enjoy local seafood, and snorkel among vibrant coral reefs.",
    tags: ["Beach", "Luxury", "Relaxation"],
    origin: "Kolkata, West Bengal",
    destination: "Maldives",
    dates: "Feb 1-5, 2026",
    price: "₹45,000 / person",
    tripsCompleted: 25,
    matchPercent: 50,
    spotsLeft: 2,
    host: {
      name: "Priya Sharma",
      age: 17,
      initials: "PS",
      location: "Mumbai, India",
      rating: 3.6,
      badge: "Travel Enthusiast",
      safetyScore: 50,
      verified: true,
    },
    isFavorite: true,
  }

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-4">Similar Trips</h2>
        <SimilarTripCard {...tripData} />
      </div>
    </main>
  )
}
