import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Mistress Rose
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <div className="relative group">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  <a href="/femdom-services" className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    Femdom Services
                  </a>
                  <a href="/financial-domination" className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    Financial Domination
                  </a>
                  <a href="/fetish-queen" className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    Fetish Queen
                  </a>
                  <a href="/flr-counselling" className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    FLR Counselling
                  </a>
                  <a href="/dominatrix-services" className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    Professional Dominatrix
                  </a>
                  <a href="/fantasy-mistress" className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    Fantasy Mistress
                  </a>
                </div>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('rules')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Rules
            </button>
            <Button 
              variant="command" 
              onClick={() => scrollToSection('contact')}
            >
              Begin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <div className="text-left">
                <div className="text-muted-foreground mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <a href="/femdom-services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Femdom Services
                  </a>
                  <a href="/financial-domination" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Financial Domination
                  </a>
                  <a href="/fetish-queen" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Fetish Queen
                  </a>
                  <a href="/flr-counselling" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    FLR Counselling
                  </a>
                  <a href="/dominatrix-services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Professional Dominatrix
                  </a>
                  <a href="/fantasy-mistress" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Fantasy Mistress
                  </a>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('rules')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Rules
              </button>
              <Button 
                variant="command" 
                onClick={() => scrollToSection('contact')}
                className="mt-4"
              >
                Begin
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;