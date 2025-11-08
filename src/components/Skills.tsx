import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML", level: 95, category: "Languages" },
  { name: "CSS", level: 90, category: "Languages" },
  { name: "JavaScript", level: 85, category: "Languages" },
  { name: "Python", level: 88, category: "Languages" },
  { name: "Java", level: 80, category: "Languages" },
  { name: "Flask", level: 85, category: "Frameworks" },
  { name: "Django", level: 75, category: "Frameworks" },
  { name: "React", level: 82, category: "Frameworks" },
  { name: "TailwindCSS", level: 90, category: "Frameworks" },
  { name: "Git", level: 88, category: "Tools" },
  { name: "SQL", level: 85, category: "Tools" },
  { name: "REST APIs", level: 87, category: "Tools" },
];

export const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: Record<string, number> = {};
      skills.forEach(skill => {
        animated[skill.name] = skill.level;
      });
      setAnimatedSkills(animated);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive set of technologies and tools I use to build robust, scalable applications
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{category}</h3>
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animatedSkills[skill.name] || 0} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Additional Expertise</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/20 text-primary">Full-stack Development</Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary">Responsive Design</Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary">Secure Coding</Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary">Testing & QA</Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary">API Development</Badge>
          </div>
          <div className="text-sm text-muted-foreground bg-muted p-4 rounded border-l-4 border-primary">
            <strong className="text-foreground">Ethical Development:</strong> I work on secure development, testing, and ethical modding for open-source/personal projects only. I do not support piracy or creating malware.
          </div>
        </div>
      </div>
    </section>
  );
};
