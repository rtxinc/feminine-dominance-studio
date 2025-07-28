import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "She completely transformed my understanding of my place. Under Her guidance, I discovered the profound peace that comes from true submission. Every day I wake grateful for the privilege of serving.",
      author: "devoted m.",
      role: "6 months under Her guidance"
    },
    {
      quote: "I thought I understood submission until I met Her. She showed me depths of devotion I never knew existed. My life has meaning now - to please Her and serve Her vision.",
      author: "faithful j.",
      role: "2 years of loyal service"
    },
    {
      quote: "Her wisdom and authority are unmatched. She sees through pretense and guides with firm but caring hands. I am honored to call myself one of Her devoted.",
      author: "grateful s.",
      role: "Ongoing mentorship"
    },
    {
      quote: "Every session reveals new layers of myself that I never knew existed. She doesn't just teach submission - She awakens it from within. I am forever changed.",
      author: "transformed k.",
      role: "1 year of training"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Words of 
            <span className="text-primary"> Devotion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Those who have earned My attention speak of their transformation. 
            Their words reveal the profound changes that come from proper guidance.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/60 border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-accent text-2xl">✦</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-primary/10 border-primary/30 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Will you be next to discover your true purpose?
              </h3>
              <p className="text-muted-foreground text-lg">
                These devoted souls once stood where you stand now - uncertain, searching, longing. 
                They chose to submit to My guidance and found their place. The question remains: 
                <span className="text-primary font-semibold"> are you ready to join them?</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;