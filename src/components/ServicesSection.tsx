import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicesBanner from "@/assets/services-banner.jpg";
import femdomCard from "@/assets/femdom-card.jpg";
import findomCard from "@/assets/findom-card.jpg";
import fetishCard from "@/assets/fetish-card.jpg";
import dominatrixCard from "@/assets/dominatrix-card.jpg";
import fantasyCard from "@/assets/fantasy-card.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Femdom Services",
      description: "Enter the world of Female Dominance under My expert guidance. Power exchange, discipline, and worship training.",
      link: "/femdom-services",
      image: femdomCard
    },
    {
      title: "Financial Domination",
      description: "The ultimate expression of devotion through financial surrender. Your money becomes a tool of worship.",
      link: "/financial-domination",
      image: findomCard
    },
    {
      title: "Fetish Queen",
      description: "Your desires are My domain. I am the sovereign of your fetishes and the architect of your fantasies.",
      link: "/fetish-queen",
      image: fetishCard
    },
    {
      title: "FLR Counselling",
      description: "Expert guidance for Female-Led relationships. Transform your dynamic with professional support.",
      link: "/flr-counselling",
      image: femdomCard
    },
    {
      title: "Professional Dominatrix",
      description: "Experience the full power of My dominance in carefully crafted sessions and training programs.",
      link: "/dominatrix-services",
      image: dominatrixCard
    },
    {
      title: "Fantasy Mistress",
      description: "I am the architect of dreams and the goddess of your deepest fantasies. Imagination becomes reality.",
      link: "/fantasy-mistress",
      image: fantasyCard
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesBanner})` }}
      >
        <div className="absolute inset-0 bg-background/85"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Paths to 
            <span className="text-primary"> Devotion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each service is carefully designed to guide you deeper into submission and closer to your true purpose. 
            Choose your path, but know that all roads lead to My feet.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-primary/20 hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <CardTitle className="text-xl text-white drop-shadow-lg">{service.title}</CardTitle>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <a href={service.link}>
                  <Button variant="command" className="w-full">
                    Explore This Path
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground italic text-lg">
            "I select My submissives carefully. Prove your worth through proper approach and genuine desire to serve."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;