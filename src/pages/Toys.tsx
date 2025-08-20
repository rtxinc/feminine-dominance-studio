import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Toys = () => {
  const toys = [
    {
      id: 1,
      name: "Luxurious Silk Restraints",
      price: "$89",
      description: "Premium silk restraints for the discerning submissive. Elegant, comfortable, and effective.",
      category: "Restraints",
      image: "🎀",
      featured: true
    },
    {
      id: 2,
      name: "Crystal Collar Collection",
      price: "$156",
      description: "Handcrafted crystal collar symbolizing dedication and submission to your Mistress.",
      category: "Jewelry",
      image: "💎",
      featured: true
    },
    {
      id: 3,
      name: "Discipline Enhancement Kit",
      price: "$234",
      description: "Complete kit for training and discipline. Quality materials for the committed servant.",
      category: "Training",
      image: "⚡",
      featured: false
    },
    {
      id: 4,
      name: "Sensory Deprivation Set",
      price: "$67",
      description: "High-quality blindfold and accessories to heighten awareness and submission.",
      category: "Sensory",
      image: "🖤",
      featured: false
    },
    {
      id: 5,
      name: "Worship Essential Kit",
      price: "$123",
      description: "Everything needed for proper worship and devotion. Mistress-approved quality.",
      category: "Worship",
      image: "👑",
      featured: true
    },
    {
      id: 6,
      name: "Advanced Training Tools",
      price: "$345",
      description: "Professional-grade tools for serious devotees ready for advanced instruction.",
      category: "Training",
      image: "🔥",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              <span className="text-primary">Mistress Rose's</span> Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully curated tools and accessories for the devoted servant. Each item selected 
              to enhance your journey of submission and personal growth under My guidance.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toys.map((toy) => (
              <Card 
                key={toy.id} 
                className={`bg-background/80 border-primary/20 shadow-glow hover:shadow-primary/30 transition-all duration-300 hover:scale-105 ${
                  toy.featured ? 'ring-1 ring-primary/50' : ''
                }`}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{toy.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={toy.featured ? "default" : "secondary"} className="text-xs">
                      {toy.category}
                    </Badge>
                    {toy.featured && (
                      <Badge variant="outline" className="text-xs border-primary text-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-primary">{toy.name}</CardTitle>
                  <div className="text-2xl font-bold text-foreground">{toy.price}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 min-h-20">
                    {toy.description}
                  </p>
                  <Button 
                    variant="command" 
                    className="w-full"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Request Information
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary/10 border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Personal Consultation Required
                </h3>
                <p className="text-muted-foreground mb-6">
                  All items require My personal approval before purchase. Each tool is selected 
                  specifically for your journey and level of commitment. Contact Me for a consultation 
                  to determine which items are appropriate for your training.
                </p>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;