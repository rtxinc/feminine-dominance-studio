import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary">Kneel.</span> Inquire. 
            <span className="text-primary"> Begin.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is your moment of choice. Submit your request for consideration with the respect and reverence 
            that befits approaching a Superior Woman.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <Card className="bg-background/80 border-primary/20 shadow-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Request My Attention
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Complete this form with sincerity and respect. I read every submission personally.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary">Name</Label>
                <Input 
                  id="name" 
                  placeholder="How shall I address you?"
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Your contact information"
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-primary">Experience Level</Label>
              <Input 
                id="experience" 
                placeholder="Describe your experience with submission/FLR"
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation" className="text-primary">What Draws You to Serve?</Label>
              <Textarea 
                id="motivation"
                placeholder="Explain what compels you to seek Female-Led guidance..."
                className="bg-background/50 border-primary/30 focus:border-primary min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="worthiness" className="text-primary">Why Do You Deserve My Attention?</Label>
              <Textarea 
                id="worthiness"
                placeholder="Demonstrate your sincerity and commitment to growth..."
                className="bg-background/50 border-primary/30 focus:border-primary min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals" className="text-primary">Your Goals & Desires</Label>
              <Textarea 
                id="goals"
                placeholder="What do you hope to achieve through My guidance?"
                className="bg-background/50 border-primary/30 focus:border-primary min-h-20"
              />
            </div>

            <div className="pt-4">
              <Button variant="command" className="w-full text-lg py-6">
                Submit for Consideration
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>
                By submitting this form, you acknowledge that you have read and accept My rules and expectations.
              </p>
              <p className="italic">
                "I respond only to those who demonstrate genuine desire and proper respect. 
                Make your words count."
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-primary/10 border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Alternative Contact</h3>
              <p className="text-muted-foreground">
                For serious inquiries about intensive training or long-term mentorship, 
                you may reach Me directly at: 
                <span className="text-primary font-semibold"> mistress@domain.com</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                Professional inquiries only. Social messages will be ignored.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;