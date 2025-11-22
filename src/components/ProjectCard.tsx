import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] bg-card border-border overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/10 before:to-accent/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
      <div className="relative overflow-hidden bg-muted h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-primary/20 text-primary border-primary/30 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewDetails(project)}
          className="flex-1 border-primary text-primary hover:bg-primary/10"
        >
          View Details
        </Button>
        {project.githubUrl && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="border-border"
          >
            <Github className="w-4 h-4 mr-2" />
            Source
          </Button>
        )}
        {project.demoUrl && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.demoUrl, '_blank')}
            className="border-border"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
