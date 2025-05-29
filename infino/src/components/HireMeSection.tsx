
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const HireMeSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const services = [
    {
      title: 'App Development',
      description: 'Cross-platform mobile applications with native performance.',
      price: 'Starting at $3,500',
      features: ['iOS & Android Support', 'React Native', 'API Integration', '60-day Support']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications.',
      price: 'Starting at $2,500',
      features: ['Responsive Design', 'Frontend Frameworks (React)', 'CMS Integration', '60-day Support']
    },
    {
      title: 'Fullstack Development',
      description: 'Complete frontend and backend solutions for scalable apps.',
      price: 'Starting at $6,000',
      features: ['MERN Stack', 'REST & GraphQL APIs', 'Authentication', '90-day Support']
    },
    {
      title: 'Backend Development',
      description: 'Robust backend systems for high-performance applications.',
      price: 'Starting at $2,500',
      features: ['Node.js/Express', 'Database Architecture', 'API Development', 'Security & Auth']
    }
  ];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.project) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Message Sent!',
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="hire" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-cyber-purple">Work Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to automate your processes or build something amazing? I'm here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Services */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-tech-blue">My Services</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="border-l-4 border-l-cyber-purple hover:shadow-lg transition-all duration-200 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-tech-blue">{service.title}</CardTitle>
                        <CardDescription className="mt-2">{service.description}</CardDescription>
                      </div>
                      <span className="text-lg font-semibold text-cyber-purple">{service.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-gradient-to-br from-tech-blue to-cyber-purple text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project</CardTitle>
                <CardDescription className="text-blue-100">
                  Tell me about your project and I'll get back to you with a custom proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-white">Project Type *</Label>
                    <Input
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                      placeholder="e.g., Mobile App, Automation System"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 resize-none"
                      placeholder="Tell me more about your project requirements, timeline, and budget..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-tech-blue hover:bg-gray-100 font-semibold py-3 transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
