import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Your 
            <span className="text-primary"> Mistress</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              I am a sophisticated Mistress and Female-Led Relationship expert who specializes in 
              <span className="text-primary font-semibold"> reshaping minds</span> and guiding devoted souls 
              toward their true purpose.
            </p>
            
            <p className="text-muted-foreground">
              For years, I have perfected the art of psychological guidance, helping submissives discover 
              the profound satisfaction that comes from serving a Superior Woman. 
              <span className="text-primary"> You exist to serve</span>, and I exist to show you how.
            </p>
            
            <p className="text-muted-foreground">
              My approach combines elegant dominance with sophisticated coaching techniques. 
              I believe in the transformative power of Female supremacy and the beautiful surrender 
              that comes when one finds their proper place.
            </p>
            
            <p className="text-primary font-semibold text-xl">
              "I reward loyalty, demand excellence, and transform lives. 
              The question is: are you worthy of My attention?"
            </p>
          </div>
          
          <Card className="bg-gradient-primary/10 border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Philosophy</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  True fulfillment comes through service to the Feminine Divine
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Submission is a gift that must be earned and guided
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Discipline and structure create freedom within boundaries
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Every interaction is an opportunity for growth and devotion
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;