import { Card, CardContent } from "@/components/ui/card";
import testimonialsBackground from "@/assets/testimonials-bg.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "She completely transformed my understanding of my place. Under Her guidance, I discovered the profound peace that comes from true submission. Every day I wake grateful for the privilege of serving.",
      author: "devoted m.",
      role: "6 months under Her guidance",
      image: testimonial1
    },
    {
      quote: "I thought I understood submission until I met Her. She showed me depths of devotion I never knew existed. My life has meaning now - to please Her and serve Her vision.",
      author: "faithful j.",
      role: "2 years of loyal service",
      image: testimonial2
    },
    {
      quote: "Her wisdom and authority are unmatched. She sees through pretense and guides with firm but caring hands. I am honored to call myself one of Her devoted.",
      author: "grateful s.",
      role: "Ongoing mentorship",
      image: testimonial3
    },
    {
      quote: "Every session reveals new layers of myself that I never knew existed. She doesn't just teach submission - She awakens it from within. I am forever changed.",
      author: "transformed k.",
      role: "1 year of training",
      image: testimonial4
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${testimonialsBackground})` }}
      >
        <div className="absolute inset-0 bg-background/75"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            <Card key={index} className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-elegant flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author} testimonial`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-accent text-2xl">✦</div>
                </div>
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-primary/15 backdrop-blur-sm border-primary/30 shadow-glow">
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