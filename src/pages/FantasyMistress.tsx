import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FantasyMistress = () => {
  const services = [
    {
      title: "Fantasy Scenario Creation",
      description: "I craft intricate fantasy worlds where your deepest desires come to life. From elaborate role-play scenarios to immersive psychological journeys.",
      features: [
        "Custom fantasy development and scripting",
        "Immersive environment creation",
        "Character development and role assignment",
        "Multi-session narrative arcs"
      ]
    },
    {
      title: "Psychological Fantasy Exploration",
      description: "Dive deep into the psychological aspects of your fantasies. I guide you through mental landscapes that blur the line between imagination and reality.",
      features: [
        "Deep psychological profiling and analysis",
        "Subconscious desire exploration",
        "Fantasy integration therapy",
        "Mind conditioning and programming"
      ]
    },
    {
      title: "Virtual Reality Experiences",
      description: "Experience the future of submission through cutting-edge virtual encounters. My presence transcends physical limitations to reach you anywhere.",
      features: [
        "Interactive virtual domination sessions",
        "Real-time fantasy manipulation",
        "Remote control and monitoring",
        "Digital presence experiences"
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
              Fantasy <span className="text-primary">Mistress</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am the architect of dreams, the weaver of desires, and the goddess of your deepest fantasies. In My realm, imagination becomes reality and dreams submit to My will.
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
                    Enter My Fantasy Realm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
              "Reality is but the canvas upon which I paint your desires. In My fantasies, you discover who you truly are meant to be."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyMistress;