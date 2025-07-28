import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FetishQueen = () => {
  const services = [
    {
      title: "Fetish Exploration & Development",
      description: "Discover and develop your deepest fetishes under My expert guidance. I create safe spaces for exploration while pushing boundaries and expanding your desires.",
      features: [
        "Personal fetish assessment and analysis",
        "Safe exploration techniques and protocols",
        "Boundary expansion and development",
        "Fetish-specific training programs"
      ]
    },
    {
      title: "Specialized Kink Training",
      description: "Master the art of your chosen kinks with precision and skill. From foot worship to sensation play, I will elevate your understanding and technique.",
      features: [
        "Technique refinement and perfection",
        "Sensory training and development",
        "Ritual creation and practice",
        "Advanced skill development"
      ]
    },
    {
      title: "Fantasy Fulfillment Sessions",
      description: "Bring your deepest fantasies to life under My direction. I craft immersive experiences that satisfy your cravings while maintaining complete control.",
      features: [
        "Custom fantasy scenario development",
        "Immersive role-playing experiences",
        "Psychological fantasy exploration",
        "Safe reality-fantasy integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Fetish <span className="text-primary">Queen</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your desires are My domain. I am the sovereign of your fetishes, the architect of your fantasies, and the key to unlocking pleasures you never knew existed.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/80 border-primary/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-3 mt-1 text-lg">✦</span>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="command" className="w-full">
                    Explore Your Fetishes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
              "Every fetish is a doorway to deeper submission. Let Me be your guide through the labyrinth of your desires."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetishQueen;