import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "FLR Coaching",
      description: "Comprehensive guidance for those seeking to embrace Female-Led dynamics. I will teach you the protocols, mindset, and devotion required to serve properly.",
      price: "Inquiry Required",
      features: [
        "Personal assessment and goal setting",
        "Behavioral modification techniques", 
        "Protocol establishment and training",
        "Ongoing accountability and guidance"
      ]
    },
    {
      title: "Submissive Training",
      description: "Intensive conditioning for those ready to surrender completely. Learn to anticipate needs, follow commands, and find purpose in service.",
      price: "Selective Acceptance",
      features: [
        "Mindset restructuring sessions",
        "Obedience and ritual training",
        "Service-oriented skill development",
        "Regular evaluation and correction"
      ]
    },
    {
      title: "Behavior Correction",
      description: "For those who have strayed from their path. Firm but caring guidance to realign your priorities and recommit to proper devotion.",
      price: "By Appointment",
      features: [
        "Personalized correction protocols",
        "Accountability structures",
        "Progress tracking and rewards",
        "Mindfulness and focus exercises"
      ]
    },
    {
      title: "Online Domination",
      description: "Virtual sessions for devoted submissives seeking My direct attention. Experience My presence and guidance from anywhere in the world.",
      price: "Premium Service", 
      features: [
        "Live video guidance sessions",
        "Personalized task assignments",
        "Real-time feedback and correction",
        "Exclusive access to My attention"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/80 border-primary/20 hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-2">{service.title}</CardTitle>
                <p className="text-accent font-semibold">{service.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full">
                  Request Consideration
                </Button>
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