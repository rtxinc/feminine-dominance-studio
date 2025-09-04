import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FemdomServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Power Exchange Training",
      description: "Learn the sacred art of power exchange. I will guide you through the fundamental protocols of submission, teaching you to surrender your will while maintaining your dignity.",
      features: [
        "Psychological preparation and conditioning",
        "Power dynamics education",
        "Safe, sane, and consensual practices",
        "Personal submission assessment"
      ]
    },
    {
      title: "Discipline & Correction",
      description: "For those who require firm guidance to stay on the proper path. My methods are precise, effective, and designed to reshape behavior permanently.",
      features: [
        "Behavioral modification techniques",
        "Corrective protocols and consequences",
        "Progress tracking and evaluation",
        "Positive reinforcement systems"
      ]
    },
    {
      title: "Worship & Devotion Training",
      description: "Discover the profound satisfaction of complete devotion. I will teach you the sacred rituals of worship and the joy found in selfless service.",
      features: [
        "Ritual development and practice",
        "Mindfulness and focus training",
        "Devotional meditation techniques",
        "Service-oriented mindset cultivation"
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
                src="/lovable-uploads/25652dbf-6694-422b-9136-3f3621182b31.png"
                alt="Professional Femdom Session - Power Exchange Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Femdom <span className="text-primary">Services</span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enter the world of Female Dominance under My expert guidance. These services are designed to awaken your deepest desires for submission and reshape your understanding of power.
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
                  
                  <Button variant="command" className="w-full" onClick={() => navigate('/contact')}>
                    Request This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
              "True power lies not in force, but in the willing surrender of those who recognize their place. Are you ready to discover yours?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemdomServices;