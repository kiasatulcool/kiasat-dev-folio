import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface HeroProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

export const Hero = ({ onViewProjects, onContactClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-hero-from to-hero-to">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center animate-float">
            <div className="w-28 h-28 rounded-full bg-primary/40 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">MK</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          MD. Kiasat ul Mabood
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Full-Stack Developer — HTML • CSS • Python • Java
        </p>
        
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          I build fast, responsive web apps and practical tools. I love clean code and solving real problems with elegant solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            onClick={onViewProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onContactClick}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Contact Me
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:kiasatulmabood@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="tel:+917439938849"
            className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
