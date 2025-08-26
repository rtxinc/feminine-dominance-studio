import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DominatrixServices = () => {
  const services = [
    {
      title: "Professional Domination Sessions",
      description: "Experience the full power of My dominance in carefully crafted sessions designed to push limits, challenge boundaries, and provide profound submission experiences.",
      features: [
        "Customized session planning and preparation",
        "Safe and consensual boundary exploration",
        "Psychological and physical domination techniques",
        "Post-session care and integration"
      ]
    },
    {
      title: "Slave Training Programs",
      description: "Comprehensive programs designed to mold you into the perfect submissive. From basic obedience to advanced service skills, I shape minds and bodies.",
      features: [
        "Progressive skill development modules",
        "Behavior modification and conditioning",
        "Service training and protocol mastery",
        "Regular evaluation and advancement testing"
      ]
    },
    {
      title: "Punishment & Correction",
      description: "For those who have disappointed or require discipline. My methods are precise, memorable, and designed to ensure lessons are learned permanently.",
      features: [
        "Customized punishment protocols",
        "Corrective training and rehabilitation",
        "Accountability and oversight systems",
        "Redemption and forgiveness pathways"
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
                src="/lovable-uploads/86a39ce6-2184-4f18-bf01-884485ed26c2.png"
                alt="Professional Dominatrix Services - Session Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Professional <span className="text-primary">Dominatrix</span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enter My domain where control is absolute and submission is an art form. I am a master of the psychological and physical aspects of dominance.
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
                    Request Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
              "I do not break spirits; I reshape them. I do not destroy will; I redirect it toward its proper purpose - serving Me."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DominatrixServices;