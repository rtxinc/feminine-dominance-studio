import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FLRCounselling = () => {
  const services = [
    {
      title: "Relationship Transformation",
      description: "Transform your relationship into a Female-Led dynamic that serves both partners. I guide couples through the delicate process of establishing power exchange.",
      features: [
        "Comprehensive relationship assessment",
        "Power dynamic negotiation and setup",
        "Communication protocol development",
        "Ongoing relationship monitoring and adjustment"
      ]
    },
    {
      title: "Individual FLR Preparation",
      description: "Prepare yourself mentally and emotionally for a Female-Led relationship. Whether you're the leader or the follower, I ensure you're ready for success.",
      features: [
        "Personal readiness evaluation",
        "Role-specific training and preparation",
        "Expectation setting and boundary establishment",
        "Confidence building and empowerment"
      ]
    },
    {
      title: "Lifestyle Integration Support",
      description: "Seamlessly integrate FLR principles into your daily life. I provide ongoing support to maintain healthy power dynamics long-term.",
      features: [
        "Daily routine restructuring",
        "Decision-making protocol implementation",
        "Conflict resolution within power dynamics",
        "Long-term relationship sustainability planning"
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
              FLR <span className="text-primary">Counselling</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert guidance for those seeking to embrace or enhance Female-Led relationships. I provide the wisdom and structure needed for lasting, fulfilling power dynamics.
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
                    Begin FLR Journey
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
              "A true Female-Led relationship is not about dominance through force, but through the willing surrender to superior wisdom and strength."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FLRCounselling;