import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { FloatingElements } from './FloatingElements';
import heroImage from '@/assets/hero-palace.jpg';

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-royal/10" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          <FloatingElements />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Heritage Homes
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-medium">
            Discover luxurious properties that blend traditional Indian architecture with modern elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="saffron" size="lg" className="text-lg px-8 py-3">
              Explore Properties
            </Button>
            <Button variant="elegant" size="lg" className="text-lg px-8 py-3">
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};