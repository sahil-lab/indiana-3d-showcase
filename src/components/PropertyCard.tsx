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
    <Card className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/20">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {type}
        </Badge>
        <div className="absolute top-4 right-4 text-white font-bold text-lg bg-black/30 px-3 py-1 rounded">
          {price}
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground">{location}</p>
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{bedrooms} Bedrooms</span>
          <span>{bathrooms} Bathrooms</span>
          <span>{area}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button variant="saffron" className="flex-1">
            Contact Agent
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};