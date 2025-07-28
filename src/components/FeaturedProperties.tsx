import { PropertyCard } from './PropertyCard';
import modernApartment from '@/assets/modern-apartment.jpg';
import luxuryVilla from '@/assets/luxury-villa.jpg';
import heroImage from '@/assets/hero-palace.jpg';

const properties = [
  {
    image: heroImage,
    title: "Royal Heritage Palace",
    location: "Udaipur, Rajasthan",
    price: "₹15.5 Cr",
    type: "Palace",
    bedrooms: 12,
    bathrooms: 8,
    area: "25,000 sq ft"
  },
  {
    image: modernApartment,
    title: "Skyline Residences",
    location: "Bandra, Mumbai",
    price: "₹3.2 Cr",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,100 sq ft"
  },
  {
    image: luxuryVilla,
    title: "Garden Villa Estate",
    location: "Gurgaon, Delhi NCR",
    price: "₹7.8 Cr",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,500 sq ft"
  }
];

export const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of premium properties that embody luxury and tradition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};