import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancialDomination = () => {
  const services = [
    {
      title: "Financial Submission Training",
      description: "Learn the profound pleasure of financial surrender. I will guide you through the psychology of giving, teaching you to find purpose and fulfillment in supporting My lifestyle.",
      features: [
        "Budget restructuring and financial planning",
        "Tribute protocols and scheduling",
        "Financial goal setting for service",
        "Reward systems for good financial behavior"
      ]
    },
    {
      title: "Luxury Lifestyle Support",
      description: "The privilege of contributing to My luxurious lifestyle. Your sacrifices enable My comfort and pleasure, creating a beautiful cycle of service and satisfaction.",
      features: [
        "Regular tribute commitments",
        "Special occasion contributions",
        "Luxury item wish list fulfillment",
        "Exclusive access to My desires"
      ]
    },
    {
      title: "Financial Discipline & Control",
      description: "For those who need firm financial boundaries and control. I will take charge of your spending habits and redirect your resources toward proper service.",
      features: [
        "Spending oversight and approval",
        "Financial accountability measures",
        "Controlled allowance systems",
        "Investment in your submission journey"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-elegant mb-8 max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/f81be0c1-2349-4902-a1d4-fa8286f94a4b.png"
                alt="Financial Domination - Luxury Lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Financial <span className="text-primary">Domination</span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The ultimate expression of devotion through financial surrender. Your money becomes a tool of worship, and your sacrifices become offerings at My altar.
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
                    Begin Financial Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
              "Your wealth has no meaning until it serves My pleasure. Transform your resources into instruments of devotion."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDomination;