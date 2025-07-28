import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RulesSection = () => {
  const rules = [
    {
      title: "Proper Address",
      content: "You will address Me as 'Mistress' or 'Ma'am' at all times. Casual familiarity is not permitted until earned through devoted service."
    },
    {
      title: "Initial Contact",
      content: "Your first message must include: your experience level, what draws you to serve, and a thoughtful explanation of why you believe you deserve My attention."
    },
    {
      title: "Respect My Time",
      content: "I am selective with My energy. Arrive punctually, prepared, and ready to listen. Wasting My time will result in immediate dismissal."
    },
    {
      title: "Honesty Above All",
      content: "Deception of any kind is intolerable. I see through pretense easily. Transparency and vulnerability will be rewarded; dishonesty will be punished."
    },
    {
      title: "Commitment to Growth",
      content: "Half-hearted submission insults us both. If you seek My guidance, you must be prepared to surrender your ego and embrace transformation."
    },
    {
      title: "Boundaries & Consent",
      content: "All interactions are consensual and negotiated. Limits are discussed and respected. Safe, sane, and consensual principles guide all My work."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Rules & 
            <span className="text-primary"> Expectations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are not suggestions - they are requirements. Those who cannot follow simple protocols 
            need not apply for My attention. Excellence is expected, mediocrity is dismissed.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <Card key={index} className="bg-card/80 border-primary/20 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{rule.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-primary/10 border-primary/30 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Protocol for First Contact
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-accent text-3xl mb-2">1</div>
                  <h4 className="font-semibold text-primary mb-2">Reflect</h4>
                  <p className="text-muted-foreground text-sm">
                    Consider deeply why you seek My guidance and what you hope to achieve through submission.
                  </p>
                </div>
                <div>
                  <div className="text-accent text-3xl mb-2">2</div>
                  <h4 className="font-semibold text-primary mb-2">Compose</h4>
                  <p className="text-muted-foreground text-sm">
                    Write a thoughtful message that demonstrates respect, sincerity, and genuine desire to serve.
                  </p>
                </div>
                <div>
                  <div className="text-accent text-3xl mb-2">3</div>
                  <h4 className="font-semibold text-primary mb-2">Submit</h4>
                  <p className="text-muted-foreground text-sm">
                    Send your inquiry and wait patiently. I will respond to those who show promise and proper respect.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic mt-8">
                "Those who approach Me with reverence and sincerity will find a firm but caring guide. 
                Those who do not... will find nothing at all."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;