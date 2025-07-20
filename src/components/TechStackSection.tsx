import { Code, Cloud, Database, Wrench, Server, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "Bash Scripting"],
      color: "text-primary"
    },
    {
      title: "DevOps Tools",
      icon: Wrench,
      skills: ["Docker", "Kubernetes", "Jenkins", "Git"],
      color: "text-accent"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Google Cloud Platform", "Microsoft Azure"],
      color: "text-success"
    },
    {
      title: "Databases & Systems",
      icon: Database,
      skills: ["MySQL", "Linux", "Windows"],
      color: "text-primary-glow"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Version Control"],
      color: "text-accent"
    },
    {
      title: "Infrastructure",
      icon: Server,
      skills: ["Microservices", "CI/CD", "Container Orchestration", "System Scalability"],
      color: "text-success"
    }
  ];

  const allSkills = techCategories.flatMap(category => category.skills);

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies, tools, and platforms I use to build 
            scalable and efficient solutions in the DevOps and cloud ecosystem.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Cloud */}
        <div className="bg-card/50 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8">
            Complete <span className="gradient-text">Skill Set</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill, index) => (
              <Badge 
                key={`${skill}-${index}`}
                variant="outline"
                className={`text-sm py-2 px-4 hover:bg-primary/20 hover:border-primary transition-all duration-300 cursor-default ${
                  index % 3 === 0 ? 'hover:scale-110' : 
                  index % 3 === 1 ? 'hover:scale-105' : 
                  'hover:scale-108'
                }`}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  fontSize: index % 4 === 0 ? '0.9rem' : '0.8rem'
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Code Block Element */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="code-block rounded-lg p-6 bg-muted/50 border border-border">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <span className="ml-4 text-sm text-muted-foreground font-mono">~/portfolio/skills.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-muted-foreground"># Current focus areas</div>
              <div className="text-primary">const skills = {`{`}</div>
              <div className="text-foreground ml-4">
                devops: [<span className="text-accent">"Docker"</span>, <span className="text-accent">"Kubernetes"</span>, <span className="text-accent">"Jenkins"</span>],
              </div>
              <div className="text-foreground ml-4">
                cloud: [<span className="text-accent">"AWS"</span>, <span className="text-accent">"GCP"</span>, <span className="text-accent">"Azure"</span>],
              </div>
              <div className="text-foreground ml-4">
                languages: [<span className="text-accent">"Python"</span>, <span className="text-accent">"Bash"</span>, <span className="text-accent">"C++"</span>]
              </div>
              <div className="text-primary">{`}`}</div>
              <div className="text-muted-foreground mt-4"># Always learning and growing! 🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;