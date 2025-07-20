import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Python Developer Intern",
      company: "Promotively Pvt. Ltd",
      location: "Remote",
      duration: "June 2024 - August 2024",
      type: "Internship",
      description: [
        "Developed a Twitter web scraping tool using Python and APIs, enhancing data retrieval and automation skills.",
        "Collaborated on scripting solutions to streamline workflows, demonstrating adaptability and problem-solving."
      ],
      skills: ["Python", "Web Scraping", "APIs", "Automation", "Data Processing"]
    }
  ];

  const certifications = [
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft Azure",
      year: "2024",
      description: "Microsoft AI-900 complements your DevOps skills by giving you foundational knowledge to support ML/AI applications, automate workflows using AI services, and integrate AI tools into CI/CD pipelines. It also enhances your ability to work with Azure, a key DevOps platform."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in the tech industry, building expertise in DevOps, automation, and cloud technologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-primary" />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="card-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline"
                          className="hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <svg className="mr-3 h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;