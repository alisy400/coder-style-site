import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "Jenkins-Powered CI/CD Workflow for Microservice App",
      description: "Implemented a Jenkins-powered CI/CD workflow that automated deployment processes for a microservice application, reducing deployment time by 40% and ensuring seamless integration with Docker and GitHub.",
      techStack: ["Jenkins", "Docker", "GitHub", "CI/CD", "Microservices"],
      category: "DevOps",
      githubUrl: "https://github.com/alisy404",
      featured: true
    },
    {
      id: 2,
      name: "AWS Static Website Hosting",
      description: "Hosted a static website using S3 and configured infrastructure with EC2, VPC and Beanstalk. Explored RDS for potential dynamic features.",
      techStack: ["AWS", "S3", "EC2", "VPC", "Beanstalk", "RDS"],
      category: "Cloud",
      githubUrl: "https://github.com/alisy404",
      featured: true
    },
    {
      id: 3,
      name: "Python-Based Projects",
      description: "Developed tools like Password Generator, WPM Counter, and Snake & Ladder game, refining automation and problem-solving abilities.",
      techStack: ["Python", "Automation", "Game Development"],
      category: "Development",
      githubUrl: "https://github.com/alisy404",
      featured: false
    },
    {
      id: 4,
      name: "Kubernetes Deployment",
      description: "Deployed mongoexpress and mongo-yaml on a local host, enabling online request handling and dataset retrieval. Strengthened understanding of container orchestration and system scalability.",
      techStack: ["Kubernetes", "MongoDB", "YAML", "Container Orchestration"],
      category: "DevOps",
      githubUrl: "https://github.com/alisy404",
      featured: true
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'DevOps', 'Cloud', 'Development'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of DevOps, cloud, and development projects that showcase 
            my expertise in automation, infrastructure, and scalable solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filter by:
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'btn-glow' 
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`card-glow relative overflow-hidden group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group/btn hover:border-primary hover:text-primary"
                  asChild
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary" />
                    Code
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group/btn hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="btn-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a 
              href="https://github.com/alisy404?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;