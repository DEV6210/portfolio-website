
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Calendar, Image } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'For project inquiries and collaborations',
      value: 'amitmandal6210@gmail.com',
      link: 'mailto:amitmandal6210@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free 30-minute consultation',
      value: 'Schedule Meeting',
      link: '#',
      color: 'text-green-600'
    },
    {
      icon: Image,
      title: 'Social Media',
      description: 'Connect on professional networks',
      value: 'LinkedIn Profile',
      link: '#',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-cyber-purple">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Want to discuss automation opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card
                key={method.title}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-tech-blue to-cyber-purple flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-tech-blue">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a
                    href={method.link}
                    className={`${method.color} hover:underline font-medium transition-colors duration-200`}
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-gradient-to-r from-tech-blue to-cyber-purple text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into powerful automation solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href='https://amitmandal.netlify.app/Amit_Manda_Resume.pdf'
                  download
                  className="bg-white text-tech-blue hover:bg-gray-100 font-semibold px-8  transition-all duration-200"
                  style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: 50, display: 'flex', borderRadius: 10 }}
                >
                  Download Resume
                </a>
                <a
                  href='tel:9382370394'
                  style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: 50, display: 'flex', borderRadius: 10 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-tech-blue px-8  transition-all duration-200"
                >
                  Call Now
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
