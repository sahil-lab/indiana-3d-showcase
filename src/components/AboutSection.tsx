import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "50+", label: "Cities Covered" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" }
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Where Heritage Meets
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Modern Luxury
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, Heritage Homes has been India's premier destination for luxury real estate. 
                We specialize in properties that celebrate our rich architectural heritage while offering 
                contemporary amenities and world-class living standards.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Promise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Expert guidance from certified real estate professionals
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Exclusive access to premium properties across India
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Transparent pricing and seamless transaction process
                </li>
              </ul>
            </div>
            
            <Button variant="elegant" size="lg" className="px-8">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};