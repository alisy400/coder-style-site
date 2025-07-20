import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Floating code elements */}
        <div className="absolute top-20 left-10 text-primary/20 text-sm font-mono rotate-12 float">
          {'<DevOps />'}
        </div>
        <div className="absolute top-40 right-20 text-accent/20 text-sm font-mono -rotate-12 float">
          kubectl apply -f
        </div>
        <div className="absolute bottom-40 left-20 text-primary/20 text-sm font-mono rotate-6 float">
          docker build .
        </div>
        <div className="absolute bottom-20 right-10 text-accent/20 text-sm font-mono -rotate-6 float">
          git commit -m
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img 
              src="/lovable-uploads/56f9caa6-9650-489c-8f0d-34fa224b9cdb.png"
              alt="Mohammad Shahbaz Ali"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text text-glow">
              Shahbaz Ali
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Passionate{' '}
            <span className="text-primary font-medium">DevOps Developer</span>
            {' '}& Cloud Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Aspiring DevOps professional skilled in Python, cloud technologies, containerization, and CI/CD pipelines. 
            Passionate about automation and scalable infrastructure, with a strong interest in enhancing cloud management, 
            optimizing workflows, and improving system reliability through innovative techniques.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/alisy404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-shahbaz-ali-408b74255/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="mailto:contact.shahbaz.alii@gmail.com"
              className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            className="btn-glow text-lg px-8 py-4 h-auto font-semibold group"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;