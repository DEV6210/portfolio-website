
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  Code2,
  Smartphone,
  Globe,
  Zap,
  Clock,
  CheckCircle2,
  Star,
  Users,
  Rocket,
  Shield
} from 'lucide-react';
import { Mail, PhoneCall, MessageCircle } from "lucide-react";

interface HireMeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HireMeModal = ({ open, onOpenChange }: HireMeModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    description: ''
  });

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks",
      technologies: ["React", "Next.js", "Node.js", "Laravel"],
      price: "Starting at $2,500",
      timeline: "2-4 weeks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps for iOS and Android",
      technologies: ["React Native", "Flutter", "Native"],
      price: "Starting at $3,500",
      timeline: "3-8 weeks",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fullstack Development",
      description: "End-to-end web and mobile app development with modern stacks",
      technologies: ["React", "React Native", "Next.js", "Python", "Node.js", "MongoDB", "MySQL", "AWS"],
      price: "Starting at $6,000",
      timeline: "2-6 weeks",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Backend Systems",
      description: "Scalable APIs and database architecture",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      price: "Starting at $2,500",
      timeline: "2-5 weeks",
      color: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseMe = [
    { icon: <Clock className="w-5 h-5" />, text: "48-hour response time" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "100% project completion rate" },
    { icon: <Star className="w-5 h-5" />, text: "5-star client satisfaction" },
    { icon: <Users className="w-5 h-5" />, text: "50+ successful projects" },
    { icon: <Rocket className="w-5 h-5" />, text: "Cutting-edge technologies" },
    { icon: <Shield className="w-5 h-5" />, text: "3 months warranty included" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.projectType) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: '🎉 Message Sent Successfully!',
      description: "Thank you for your interest! I'll get back to you within 24 hours with a detailed proposal.",
    });

    // setFormData({ name: '', email: '', company: '', budget: '', timeline: '', projectType: '', description: '' });
    // onOpenChange(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        <DialogHeader className="text-center pb-6 border-b">
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-tech-blue via-cyber-purple to-neon-green bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </DialogTitle>
          <p className="text-gray-600 mt-2">Transform your ideas into reality with professional development services</p>
        </DialogHeader>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="process" className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Why Choose Me
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Hire Me
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-cyber-purple animate-slide-in-right"
                // style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-cyber-purple">{service.price}</span>
                        <span className="text-gray-500">⏱️ {service.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseMe.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-200 animate-slide-in-right"
                // style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-cyber-purple">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-r from-tech-blue to-cyber-purple text-white">
              <CardHeader>
                <CardTitle className="text-xl">🚀 Development Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "Discovery", desc: "Understanding your needs" },
                    { step: "2", title: "Planning", desc: "Detailed project roadmap" },
                    { step: "3", title: "Development", desc: "Building with best practices" },
                    { step: "4", title: "Delivery", desc: "Testing & deployment" }
                  ].map((phase) => (
                    <div key={phase.step} className="text-center">
                      <div className="w-10 h-10 bg-white text-tech-blue rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                        {phase.step}
                      </div>
                      <h4 className="font-semibold">{phase.title}</h4>
                      <p className="text-sm text-blue-100">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <section className="max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-3xl shadow-lg space-y-6 border border-gray-100">
              {/* Header */}
              <div className="text-center space-y-1">
                <h2 className="text-3xl font-bold text-gray-900">Let's Connect</h2>
                <p className="text-gray-600 text-base md:text-lg">Feel free to reach out via phone, email, or WhatsApp.</p>
              </div>

              {/* Contact Info List */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyber-purple/10 rounded-xl">
                    <Mail size={24} className="text-cyber-purple" />
                  </div>
                  <div className="text-gray-800 text-sm md:text-base">amitmandal6210@gmail.com</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyber-purple/10 rounded-xl">
                    <PhoneCall size={24} className="text-cyber-purple" />
                  </div>
                  <div className="text-gray-800 text-sm md:text-base">+91 9382370394</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-cyber-purple/10 rounded-xl">
                    <MessageCircle size={24} className="text-cyber-purple" />
                  </div>
                  <div className="text-gray-800 text-sm md:text-base">+91 9382370394</div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href="tel:9382370394"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-tech-blue to-cyber-purple text-white rounded-xl shadow hover:from-cyber-purple hover:to-tech-blue transition-all duration-300 text-sm md:text-base font-medium"
                >
                  <PhoneCall size={20} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919382370394?text=Hi%20Amit%2C%20I%20found%20you%20through%20Infino."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl shadow hover:from-[#128C7E] hover:to-[#25D366] transition-all duration-300 text-sm md:text-base font-medium"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </section>


            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="border-gray-300 focus:border-cyber-purple"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                    className="border-gray-300 focus:border-cyber-purple"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Tech Startup Inc."
                    className="border-gray-300 focus:border-cyber-purple"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-cyber-purple focus:outline-none focus:ring-1 focus:ring-cyber-purple"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-cyber-purple focus:outline-none focus:ring-1 focus:ring-cyber-purple"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush job)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                    <option value="fulltime-permanent">Full-time - Permanent</option>
                    <option value="temporary-parttime">Temporary - Part-time</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-cyber-purple focus:outline-none focus:ring-1 focus:ring-cyber-purple"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="automation">Automation System</option>
                    <option value="backend">Backend/API</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                  className="border-gray-300 focus:border-cyber-purple resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-tech-blue to-cyber-purple hover:from-cyber-purple hover:to-tech-blue transition-all duration-300 text-white font-semibold py-3"
                >
                  🚀 Send Project Request
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="px-8"
                >
                  Cancel
                </Button>
              </div>
            </form> */}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeModal;
