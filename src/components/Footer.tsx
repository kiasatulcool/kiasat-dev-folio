import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">MD. Kiasat ul Mabood</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer specializing in building elegant web experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:kiasatulmabood@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                kiasatulmabood@gmail.com
              </a>
              <a
                href="tel:+917439938849"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +91 7439938849
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/kiasatulmabood"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kiasatulmabood"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kiasatulmabood@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} MD. Kiasat ul Mabood. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
