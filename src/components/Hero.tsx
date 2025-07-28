import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { FloatingElements } from './FloatingElements';
import heroImage from '@/assets/hero-palace.jpg';

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ornate-frame paisley-pattern">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-gold/10 to-royal/20" />
      
      {/* Indian decorative elements */}
      <div className="absolute top-8 left-8 text-6xl text-gold/40 select-none animate-pulse">🕉️</div>
      <div className="absolute top-16 right-16 text-5xl text-gold/30 select-none rotate-45">✨</div>
      <div className="absolute bottom-20 left-20 text-4xl text-gold/25 select-none">🪷</div>
      <div className="absolute bottom-24 right-24 text-5xl text-gold/30 select-none">🏛️</div>
      
      {/* Corner ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-br-full opacity-80"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/20 to-transparent rounded-bl-full opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/20 to-transparent rounded-tr-full opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/20 to-transparent rounded-tl-full opacity-80"></div>
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          <FloatingElements />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          {/* Decorative elements around title */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-5xl text-gold/50 animate-pulse">👑</div>
          
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-3xl text-gold/60">🪷</div>
            <h1 className="text-6xl md:text-8xl font-bold heritage-text leading-tight relative lotus-glow">
              Heritage Homes
            </h1>
            <div className="absolute -bottom-8 -right-8 text-3xl text-gold/60">🪷</div>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-2xl text-gold/40">🕉️</div>
            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
              Discover palatial residences that blend timeless Indian architecture with supreme luxury
            </p>
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-2xl text-gold/40">🕉️</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="saffron" size="lg" className="text-lg px-10 py-4 lotus-glow">
              🏛️ Explore Properties
            </Button>
            <Button variant="royal" size="lg" className="text-lg px-10 py-4 lotus-glow">
              📅 Schedule Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};