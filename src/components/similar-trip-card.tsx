import { Heart, MapPin, Calendar, Users, Star, CheckCircle, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TripHost {
  name: string
  age: number
  initials: string
  location: string
  rating: number
  badge: string
  safetyScore: number
  verified: boolean
}

interface SimilarTripCardProps {
  image: string
  title: string
  description: string
  tags: string[]
  origin: string
  destination: string
  dates: string
  price: string
  tripsCompleted: number
  matchPercent: number
  spotsLeft: number
  host: TripHost
  isFavorite?: boolean
}

export function SimilarTripCard({
  image,
  title,
  description,
  tags,
  origin,
  destination,
  dates,
  price,
  tripsCompleted,
  matchPercent,
  spotsLeft,
  host,
  isFavorite = false,
}: SimilarTripCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          <button className="absolute top-3 left-3 p-1.5 rounded-full bg-background/80 hover:bg-background transition-colors">
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-red-500"}`} />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Badge className="bg-red-500 hover:bg-red-500 text-white text-xs">{matchPercent}% Match</Badge>
              <Badge variant="outline" className="border-red-500 text-red-500 text-xs">
                ⚠ {spotsLeft} spots left
              </Badge>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal text-teal-600 border-teal-600">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Location Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{origin}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <span>{destination}</span>
            </div>
          </div>

          {/* Trip Details */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{dates}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-foreground">{price}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{tripsCompleted} Trips Completed</span>
            </div>
          </div>

          {/* Host Section */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 bg-teal-600 text-white">
                <AvatarFallback className="bg-teal-600 text-white font-semibold">{host.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-sm text-foreground">
                    {host.name}, {host.age}
                  </span>
                  {host.verified && <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{host.location}</span>
                  <span>•</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{host.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 text-xs font-normal">
                    👤 {host.badge}
                  </Badge>
                  <Badge variant="outline" className="text-xs font-normal flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-500" />
                    {host.safetyScore}% Safe
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white">
                📋 View Trip
              </Button>
              <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white">
                ➕ Join Trip
              </Button>
              <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white">
                👤 View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
