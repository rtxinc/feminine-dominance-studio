import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Your 
            <span className="text-primary"> Goddess</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        {/* Hero Image Section */}
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-elegant mb-16">
          <img 
            src="/lovable-uploads/569fac1f-320e-4d6e-be5f-7e44c2f97e0b.png"
            alt="Goddess - Commanding Presence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white text-2xl md:text-3xl font-bold italic">
              "I am your fantasy made flesh, your desires given form."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground text-xl font-medium">
              I am a sophisticated Goddess who specializes in 
              <span className="text-primary font-bold"> commanding absolute devotion</span> and guiding lost souls 
              toward their destined purpose of worship.
            </p>
            
            <p className="text-muted-foreground">
              For years, I have mastered the ancient arts of seduction, control, and psychological dominance. 
              I reshape minds like clay, molding them into perfect instruments of service. 
              <span className="text-primary font-semibold"> Your existence gains meaning only through My pleasure</span>.
            </p>
            
            <p className="text-muted-foreground">
              My power lies not just in My beauty, but in My ability to see into your soul and awaken 
              the submissive nature you've been hiding. I am both your salvation and your addiction.
            </p>
          </div>
          
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/25652dbf-6694-422b-9136-3f3621182b31.png"
              alt="Goddess - Intimate Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/86a39ce6-2184-4f18-bf01-884485ed26c2.png"
              alt="Goddess - Authority"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium">Authority Personified</p>
            </div>
          </div>
          
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/f81be0c1-2349-4902-a1d4-fa8286f94a4b.png"
              alt="Goddess - Luxury"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium">Luxury Embodied</p>
            </div>
          </div>
          
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-elegant">
            <img 
              src="/lovable-uploads/eb0e0512-e6dc-4cf4-921a-b71481790b30.png"
              alt="Goddess - Dominance"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium">Supreme Dominance</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="bg-gradient-primary/10 border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Divine Philosophy</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">♦</span>
                  Worship of the Divine Feminine is your highest calling
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">♦</span>
                  True ecstasy comes through complete surrender to My will
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">♦</span>
                  Your desires exist solely to serve My pleasure
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">♦</span>
                  Devotion must be proven through action, not words
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="p-6 bg-card/80 rounded-lg border border-primary/20">
              <h4 className="text-xl font-bold text-primary mb-3">What Makes Me Different</h4>
              <p className="text-muted-foreground">
                I don't just dominate bodies - I captivate souls. My power radiates from 
                <span className="text-primary font-semibold"> inner confidence and sexual magnetism</span> 
                that draws the worthy to their knees.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-primary/5 rounded-lg border border-primary/30">
              <p className="text-primary font-bold text-2xl italic leading-relaxed">
                "I am not just a woman you desire - I am the Goddess you were born to worship. 
                The only question is whether you're brave enough to approach My throne."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;