import { Download, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResumeSection = () => {
  const education = {
    degree: "Bachelor of Technology in Artificial Intelligence",
    institution: "Poornima College of Engineering",
    location: "Sitapura, Jaipur, Rajasthan",
    duration: "2026",
    gpa: "7.52 GPA"
  };

  const personalInfo = {
    name: "Mohammad Shahbaz Ali",
    phone: "637617432",
    linkedin: "https://www.linkedin.com/in/mohammad-shahbaz-ali-408b74255/",
    github: "https://github.com/alisy404",
    location: "Sitapura, Jaipur, Rajasthan"
  };

  const summary = "Aspiring DevOps professional skilled in Python, cloud technologies, containerization, and CI/CD pipelines. Passionate about automation and scalable infrastructure, with a strong interest in enhancing cloud management, optimizing workflows, and improving system reliability through innovative techniques.";

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my educational background, skills, and professional journey in the tech industry.
          </p>
          
          {/* Download Resume Button */}
          <Button 
            className="btn-glow text-lg px-8 py-4 h-auto font-semibold group"
            onClick={() => {
              // In a real application, you would link to an actual PDF file
              console.log('Download resume clicked');
            }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Summary */}
          <div className="lg:col-span-1 space-y-8">
            {/* Personal Information */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Full Name</h4>
                  <p className="text-muted-foreground">{personalInfo.name}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">{personalInfo.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Location
                  </h4>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
                <div className="space-y-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary-glow transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary-glow transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {summary}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education & Key Highlights */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {education.degree}
                    </h3>
                    <p className="text-primary font-medium">
                      {education.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {education.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Expected {education.duration}
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {education.gpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Key Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Core Expertise</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• DevOps & CI/CD Pipelines</li>
                        <li>• Cloud Infrastructure Management</li>
                        <li>• Container Orchestration</li>
                        <li>• Automation & Scripting</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recent Achievements</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• 40% deployment time reduction</li>
                        <li>• Microsoft Azure AI Certified</li>
                        <li>• Python automation expertise</li>
                        <li>• Multi-cloud platform experience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card className="card-glow text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <p className="text-sm text-muted-foreground">Months Experience</p>
                </CardContent>
              </Card>
              <Card className="card-glow text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="card-glow text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground">Cloud Platforms</p>
                </CardContent>
              </Card>
              <Card className="card-glow text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <p className="text-sm text-muted-foreground">Certification</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;