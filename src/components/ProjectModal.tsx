import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-3xl text-foreground">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg bg-muted h-64">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">About</h3>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-3 pt-4">
            {project.githubUrl && (
              <Button 
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            )}
            {project.demoUrl && (
              <Button 
                variant="outline"
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="flex-1 border-primary text-primary hover:bg-primary/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
