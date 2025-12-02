import { Heart, MapPin, Bed, Bath, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  featured?: boolean;
  status?: "available" | "reserved" | "sold";
  delay?: number;
}

const statusStyles = {
  available: "bg-seafoam text-seafoam-dark",
  reserved: "bg-sand text-sand-dark",
  sold: "bg-coral/20 text-coral",
};

const statusLabels = {
  available: "Disponível",
  reserved: "Reservado",
  sold: "Vendido",
};

export const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  featured = false,
  status = "available",
  delay = 0,
}: PropertyCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl overflow-hidden border border-border/40 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in",
        featured && "ring-2 ring-ocean/20"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <div
          className={cn(
            "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium",
            statusStyles[status]
          )}
        >
          {statusLabels[status]}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card transition-colors group/fav">
          <Heart className="w-4 h-4 text-muted-foreground group-hover/fav:text-coral transition-colors" />
        </button>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gradient-ocean text-primary-foreground text-xs font-medium">
            ⭐ Destaque
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-ocean transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mb-4 py-3 border-y border-border/50">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bed className="w-4 h-4" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bath className="w-4 h-4" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Maximize className="w-4 h-4" />
            <span>{area}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Preço</p>
            <p className="text-lg font-display font-semibold text-foreground">
              {price}
            </p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-ocean/10 text-ocean text-sm font-medium hover:bg-ocean hover:text-primary-foreground transition-all">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};
