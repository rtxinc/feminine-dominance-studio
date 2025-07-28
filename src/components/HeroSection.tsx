import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Surrender to the Power
          <span className="block text-primary bg-gradient-primary bg-clip-text text-transparent">
            of the Feminine
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Your place is at My feet. Are you ready to discover the exquisite pleasure of submission and surrender?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="command" 
            size="lg"
            className="text-lg px-8 py-4"
          >
            Kneel. Inquire. Begin.
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4"
          >
            Learn Your Place
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-muted-foreground italic">
          "I do not ask twice. Obedience pleases Me."
        </p>
      </div>
    </section>
  );
};

export default HeroSection;