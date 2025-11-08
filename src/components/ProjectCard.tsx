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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
      <div className="relative overflow-hidden bg-muted h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
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
