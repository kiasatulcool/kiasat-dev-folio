import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import { useEffect, useRef } from "react";

interface HeroProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

export const Hero = ({ onViewProjects, onContactClick }: HeroProps) => {
  const animatedTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const capabilities = [
      "a developer",
      "an ethical hacker",
      "a fast learner",
      "a problem solver",
      "a full-stack engineer",
      "a Python enthusiast",
      "a Java coder",
      "a backend architect",
      "a UI/UX admirer",
      "an API specialist",
      "a clean-code believer",
      "a security-focused creator"
    ];

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      if (animatedTextRef.current) {
        animatedTextRef.current.textContent = capabilities[0];
      }
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
      return;
    }

    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentCapability = capabilities[currentIndex];

      if (!isDeleting) {
        // Typing
        currentText = currentCapability.substring(0, charIndex + 1);
        charIndex++;

        if (animatedTextRef.current) {
          animatedTextRef.current.textContent = currentText;
        }

        if (charIndex === currentCapability.length) {
          // Finished typing, pause then start deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 1300);
        } else {
          // Continue typing
          timeoutId = setTimeout(type, 80);
        }
      } else {
        // Deleting
        currentText = currentCapability.substring(0, charIndex - 1);
        charIndex--;

        if (animatedTextRef.current) {
          animatedTextRef.current.textContent = currentText;
        }

        if (charIndex === 0) {
          // Finished deleting, move to next capability
          isDeleting = false;
          currentIndex = (currentIndex + 1) % capabilities.length;
          timeoutId = setTimeout(type, 200);
        } else {
          // Continue deleting
          timeoutId = setTimeout(type, 50);
        }
      }
    };

    // Start the animation
    type();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Video background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-from via-[hsl(var(--hero-gradient-via))] to-hero-to">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">WELCOME TO MY PORTFOLIO</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block mb-2">Hi,</span>
                <span className="block">
                  I'm{" "}
                  <span 
                    ref={animatedTextRef}
                    className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  ></span>
                  <span 
                    ref={cursorRef}
                    className="typewriter-cursor text-primary"
                  >|</span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full-Stack Developer | HTML • CSS • Python • Java
              </p>
              
              <p className="text-lg text-foreground/80 max-w-xl">
                I build powerful and elegant web experiences that blend creativity with clean code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={onViewProjects}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
              >
                🚀 View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onContactClick}
                className="border-primary/50 hover:border-primary text-lg px-8"
              >
                📬 Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kiasatulmabood@gmail.com"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+917439938849"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl absolute inset-0 animate-pulse" />
              <div className="relative z-10 w-96 h-96 flex items-center justify-center">
                <div className="text-9xl">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
