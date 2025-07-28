import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

export const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  type, 
  bedrooms, 
  bathrooms, 
  area 
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden palace-card hover:shadow-2xl transition-all duration-500 hover:scale-105 mandala-border lotus-glow">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Decorative corner elements */}
        <div className="absolute top-2 left-2 text-xl text-gold/80">🪷</div>
        <div className="absolute top-2 right-2 text-xl text-gold/80">🪷</div>
        
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white border border-gold/40">
          🏛️ {type}
        </Badge>
        <div className="absolute top-4 right-4 text-gold font-bold text-lg bg-gradient-to-r from-black/80 to-black/60 px-4 py-2 rounded-lg border border-gold/40 backdrop-blur-sm">
          {price}
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4 paisley-pattern">
        <div className="relative">
          <div className="absolute -top-2 -right-2 text-sm text-gold/60">✨</div>
          <h3 className="text-xl font-bold heritage-text group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground flex items-center gap-2">
            📍 {location}
          </p>
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground bg-gradient-to-r from-background/60 to-muted/40 p-3 rounded-lg border border-gold/20">
          <span className="flex items-center gap-1">🛏️ {bedrooms} Bed</span>
          <span className="flex items-center gap-1">🚿 {bathrooms} Bath</span>
          <span className="flex items-center gap-1">📐 {area}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-3 w-full">
          <Button variant="outline" className="flex-1 border-gold/40 hover:bg-gold/10 hover:border-gold/60">
            👁️ View Details
          </Button>
          <Button variant="saffron" className="flex-1 lotus-glow">
            📞 Contact Agent
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};